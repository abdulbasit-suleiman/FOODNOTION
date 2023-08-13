import React, { useEffect, useRef } from "react";
import Link from "next/link";
function MobileHeader({ onClose }){
  const mobileMenuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        onClose(); 
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="mobile"  ref={mobileMenuRef}>
      <ul className="menu-list-mobile">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
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
  );
}
export default MobileHeader;
