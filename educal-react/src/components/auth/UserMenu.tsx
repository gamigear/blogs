"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contextApi/AuthContext";
import { toast } from "react-toastify";

const UserMenu = () => {
  const { user, loading, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    toast.success("Đăng xuất thành công!");
    router.push("/");
  };

  if (loading) {
    return <div className="header__btn d-none d-lg-block">...</div>;
  }

  if (!user) {
    return (
      <div className="header__btn d-none d-lg-block">
        <Link href="/sign-in" className="e-btn">
          Đăng nhập
        </Link>
      </div>
    );
  }

  return (
    <div className="header__btn d-none d-lg-block position-relative">
      <button
        className="e-btn"
        onClick={() => setShowDropdown(!showDropdown)}
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <i className="fal fa-user"></i>
        {user.name || user.email}
      </button>
      
      {showDropdown && (
        <div
          className="user-dropdown"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "10px",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            minWidth: "200px",
            zIndex: 1000,
            overflow: "hidden"
          }}
        >
          <div style={{ padding: "15px", borderBottom: "1px solid #eee" }}>
            <p style={{ margin: 0, fontWeight: 600 }}>{user.name}</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{user.email}</p>
            <span style={{ 
              fontSize: "11px", 
              background: user.role === "admin" ? "#ff5722" : "#2196f3",
              color: "#fff",
              padding: "2px 8px",
              borderRadius: "4px",
              marginTop: "5px",
              display: "inline-block"
            }}>
              {user.role === "admin" ? "Admin" : "User"}
            </span>
          </div>
          <div style={{ padding: "10px 0" }}>
            <Link
              href="/profile"
              style={{ display: "block", padding: "10px 15px", color: "#333", textDecoration: "none" }}
              onClick={() => setShowDropdown(false)}
            >
              <i className="fal fa-user" style={{ marginRight: "10px" }}></i>
              Tài khoản
            </Link>
            {user.role === "admin" && (
              <Link
                href="http://localhost:3001"
                target="_blank"
                style={{ display: "block", padding: "10px 15px", color: "#333", textDecoration: "none" }}
                onClick={() => setShowDropdown(false)}
              >
                <i className="fal fa-cog" style={{ marginRight: "10px" }}></i>
                Quản trị
              </Link>
            )}
            <button
              onClick={handleLogout}
              style={{ 
                display: "block", 
                width: "100%", 
                padding: "10px 15px", 
                color: "#e74c3c", 
                background: "none",
                border: "none",
                textAlign: "left",
                cursor: "pointer"
              }}
            >
              <i className="fal fa-sign-out" style={{ marginRight: "10px" }}></i>
              Đăng xuất
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
