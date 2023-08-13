import React, { useState, useEffect, useRef } from "react";
import MobileHeader from "./MobileHeader";
import Link from "next/link";

function Header() {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <div className="header-container">
      <div className="logo">
        <img src="/asset/doughnuts.jpg" className="footer-img" alt="doughnut" />
        <span className="header-logo">
          Foodn<span style={{ color: "red" }}>o</span>tion
        </span>
      </div>
      <div className="right-logo">
        <div className="menu">
          <ul className="menu-list">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li >
              <Link href="#products">Products</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="#contactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
        <input type="text" className="header-search" placeholder="search" />
        <p className="cart">U</p>
      </div>
      <div className="bar">
        <img
          src="/asset/menu.png"
          className="menu-icon"
          onClick={() => setShowMenu(true)}
        />
      </div>
      {showMenu && <MobileHeader onClose={() => setShowMenu(false)} />}
    </div>
  );
}
export default Header;
