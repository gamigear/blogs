import React from "react";
import { Link } from "@inertiajs/react";

export default function BaseLink({ children, className = "",href, onClick }) {
  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault(); // Stop navigation
        if (onClick) onClick(e); // Call your custom click logic
      }}
    >
      {children}
    </Link>
  );
}
