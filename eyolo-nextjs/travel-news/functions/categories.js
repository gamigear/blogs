import { slugify } from "@/libs/utils/slugify";

export const popularCategories = (posts) => {
  const categoryCount = {};
  const categoryImages = {};

  posts.forEach((post) => {
    const category = post.frontmatter.category;
    if (category) {
      categoryCount[category] = (categoryCount[category] || 0) + 1;
      if (!categoryImages[category] && post.frontmatter.image) {
        categoryImages[category] = post.frontmatter.image;
      }
    }
  });

  return Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({
      name,
      slug: slugify(name),
      count,
      image: categoryImages[name] || "/images/placeholder.jpg",
    }));
};

export const getAllCategories = (posts) => {
  const categories = new Set();
  posts.forEach((post) => {
    if (post.frontmatter.category) {
      categories.add(post.frontmatter.category);
    }
  });
  return Array.from(categories);
};
