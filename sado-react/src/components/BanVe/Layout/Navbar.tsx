"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkAndLightMode from "@/components/Layout/DarkAndLightMode";

import Image from "next/image";

import blackLogo from "/public/images/logo.svg";
import whiteLogo from "/public/images/white-logo.svg";

interface MenuItem {
  id: number;
  title: string;
  url: string;
  target: string;
  icon: string | null;
  children?: MenuItem[];
}

interface MenuData {
  id: number;
  name: string;
  location: string;
  items: MenuItem[];
}

const Navbar: React.FC = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  const currentRoute = usePathname();

  const [menu, setMenu] = useState<boolean>(true);
  const [menuData, setMenuData] = useState<MenuData | null>(null);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    // Fetch menu from database
    const fetchMenu = async () => {
      try {
        const res = await fetch('/api/menus/?location=main');
        const data = await res.json();
        if (data && data.items) {
          setMenuData(data);
        }
      } catch (error) {
        console.error('Failed to fetch menu:', error);
      }
    };
    fetchMenu();

    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        elementId?.classList.add("sticky");
      } else {
        elementId?.classList.remove("sticky");
      }
    });
  }, []);

  const classOne: string = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo: string = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-color-f3f4f6" id="navbar">
        <div className="container-fluid mw-1640">
          <Link className="navbar-brand" href="/">
            <Image src={blackLogo} className="main-logo" alt="Black logo" />
            <Image
              src={whiteLogo}
              className="white-logo d-none"
              alt="White logo"
            />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-70">
              {menuData && menuData.items.map((item) => (
                <li key={item.id} className={`nav-item ${item.children && item.children.length > 0 ? 'dropdown' : ''}`}>
                  {item.children && item.children.length > 0 ? (
                    <>
                      <Link
                        className="nav-link dropdown-toggle"
                        href={item.url}
                        onClick={(e) => e.preventDefault()}
                      >
                        {item.icon && <i className={item.icon}></i>} {item.title}
                      </Link>
                      <ul className="dropdown-menu">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <Link
                              href={child.url}
                              target={child.target}
                              className={`dropdown-item ${currentRoute === child.url ? 'active' : ''}`}
                            >
                              {child.icon && <i className={child.icon}></i>} {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      className={`nav-link ${currentRoute === item.url ? 'active' : ''}`}
                      href={item.url}
                      target={item.target}
                    >
                      {item.icon && <i className={item.icon}></i>} {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="others-options">
            <ul className="d-flex align-items-center">
              <li>
                <button
                  className="search-icon border-0 bg-transparent p-0"
                  onClick={handleToggleSearchModal}
                >
                  <i className="flaticon-loupe"></i>
                </button>
              </li>
              <li>
                <Link
                  href="/authentication/"
                  className="default-btn active d-none d-lg-block"
                >
                  Đăng Nhập
                </Link>
                <Link href="/authentication/" className="d-lg-none account">
                  <i className="flaticon-account"></i>
                </Link>
              </li>
              <li>
                <DarkAndLightMode />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div 
        className={`offcanvas offcanvas-top src-form-wrapper ${
          isActive ? "show" : ""
        }`} 
      >
        <div className="container">
          <div className="offcanvas-body small">
            <form className="src-form">
              <input type="text" className="form-control" placeholder="Tìm kiếm tại đây..." />
              <button type="submit" className="src-btn">
                <i className="ri-search-line"></i>
              </button>
            </form>
          </div>
        </div>

        <button type="button" className="btn-close" onClick={handleToggleSearchModal}>
          <i className="ri-close-line"></i>
        </button>
      </div>
    </>
  );
};

export default Navbar;
