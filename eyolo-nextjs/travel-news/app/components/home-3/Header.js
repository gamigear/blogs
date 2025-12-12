"use client";

import Menu from "@/components/Menu";
import config from "@/config/site.config.json";
import { slugify } from "@/libs/utils/slugify";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = ({ hasCategory, categories }) => {
  const logoWhite = config.logoWhite;
  const logoText = config.logoText;

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header
        className={`bg-secondary ${
          !hasCategory ? "border-b border-[#495c52]" : ""
        }`}
      >
        <div className="container px-5 sm:px-3">
          <div className="row items-center flex-wrap">
            {/* menu toggle */}
            <div className="col-2 md:col-4">
              <div className="flex items-center gap-x-8">
                <button
                  className="w-8 cursor-pointer [&>span]:has-transition [&>span]:h-[2.5px] [&>span]:block [&>span]:bg-white [&>span]:rounded focus:outline-none"
                  role="button"
                  onClick={toggleMenu}
                  aria-label="Toggle Navigation Menu"
                >
                  <span
                    className={`w-1/2 mb-2 ${
                      menuOpen
                        ? "-rotate-45 translate-x-[3px] translate-y-[15.5px]"
                        : ""
                    }`}
                  ></span>
                  <span
                    className={`w-full mb-2 ${
                      menuOpen ? "rotate-45 scale-x-[0.95]" : ""
                    }`}
                  ></span>
                  <span
                    className={`w-1/2 ml-auto ${
                      menuOpen
                        ? "-rotate-45 translate-x-[-3px] translate-y-[-15.5px]"
                        : ""
                    }`}
                  ></span>
                </button>
              </div>
            </div>

            {/* logo */}
            <div className="col-8 md:col-4 text-center">
              <Link
                href="/"
                className="py-4 sm:py-5 inline-block focus:outline-none"
              >
                <span className="text-2xl sm:text-3xl text-white font-primary">{logoText}</span>
              </Link>
            </div>

            {/* nav actions */}
            <div className="col-2 md:col-4">
              <div className="flex items-center justify-end gap-x-6">
                <Link
                  href="/contact"
                  className="flex items-center uppercase text-sm text-white py-2 focus:outline-none"
                >
                  <span className="hidden sm:inline">Liên hệ</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* menu */}
        <Menu
          menuOpen={menuOpen}
          className="top-[64px] sm:top-[71px]"
          menuDark={true}
        />
      </header>

      {hasCategory && (
        <div className="bg-secondary overflow-x-auto scrollbar-vertical">
          <ul className="text-center [&>li]:inline-block whitespace-nowrap bg-[#54675b] [&>li]:bg-[#54675b]">
            {categories.slice(0, 9).map((category, key) => (
              <li key={key}>
                <Link
                  className="text-[#BBC5BE] hover:text-white hover:underline py-2 sm:py-4 px-4 sm:px-6 block transition-all capitalize"
                  href={`/category/${slugify(category.name)}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Header;
