import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import readingTime from "reading-time";

const dest_dir = "data";

const sortByDate = (a, b) => {
  if (a.frontmatter.date && b.frontmatter.date) {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  }
  return 0;
};

const getPages = async (directory) => {
  try {
    const dirFiles = fs.readdirSync(directory);
    const pages = dirFiles.filter((file) => file.endsWith(".mdx"));

    if (!fs.existsSync(`${dest_dir}/pages`)) {
      fs.mkdirSync(`${dest_dir}/pages`, { recursive: true });
    }

    for (const filename of pages) {
      const slug = filename.replace(/\.[^/.]+$/, "");
      const filePath = path.join(process.cwd(), directory, filename);
      const dirFileContents = fs.readFileSync(filePath, "utf8");
      const content = dirFileContents.replace(/---[\s\S]+?---/, "").trim();

      try {
        const { frontmatter } = await compileMDX({
          source: dirFileContents,
          options: { parseFrontmatter: true },
        });

        const pageData = { slug, frontmatter, content };
        fs.writeFileSync(
          `${dest_dir}/pages/${slug}.json`,
          JSON.stringify(pageData, null, 2)
        );
        console.log(`generated ${dest_dir}/pages/${slug}.json`);
      } catch (error) {
        console.error(`Error processing file ${filename}:`, error);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error);
  }
};

const getSectionFiles = async (directory, isBlog, authorPages) => {
  const dirFiles = fs.readdirSync(path.join(directory));
  const pages = dirFiles.filter(
    (file) => !file.startsWith("_") && file.endsWith(".mdx")
  );

  const returnDirPages = await Promise.all(
    pages.map(async (filename) => {
      const slug = filename.replace(/\.[^/.]+$/, "");
      const filePath = path.join(process.cwd(), directory, filename);
      const dirFileContents = fs.readFileSync(filePath, "utf8");
      const content = dirFileContents.replace(/---[\s\S]+?---/, "").trim();
      const readingStats = readingTime(content);

      const { frontmatter } = await compileMDX({
        source: dirFileContents,
        options: { parseFrontmatter: true },
      });

      if (isBlog && frontmatter.author && authorPages) {
        const author = authorPages.find(
          (a) => a.frontmatter.title === frontmatter.author
        );
        if (author) frontmatter.authorImage = author.frontmatter.image;
        const minutes = Math.ceil(readingStats.minutes);
        frontmatter.readingTime = `${String(minutes).padStart(2, "0")} PHÚT ĐỌC`;
      }

      if (frontmatter.published === false) return null;
      return { slug, frontmatter, content };
    })
  );

  return returnDirPages.filter((entry) => entry !== null).sort(sortByDate);
};

const generateData = async () => {
  try {
    const authorPages = await getSectionFiles("content/author", false, null);
    const blogPages = await getSectionFiles("content/blog", true, authorPages);
    await getPages("content/pages");

    fs.writeFileSync(`${dest_dir}/author.json`, JSON.stringify(authorPages, null, 2));
    console.log(`generated ${dest_dir}/author.json`);
    fs.writeFileSync(`${dest_dir}/posts.json`, JSON.stringify(blogPages, null, 2));
    console.log(`generated ${dest_dir}/posts.json`);
  } catch (error) {
    console.error(`Error generating data:`, error);
  }
};

if (!fs.existsSync(dest_dir)) fs.mkdirSync(dest_dir);
generateData();
