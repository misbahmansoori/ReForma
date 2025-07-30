import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-light">
      <div className="footer-content">
        <div className="footer-left">
          <h3>ReForma</h3>
          <p>Crafting beauty from the old.</p>
        </div>

        <div className="footer-center">
          <a href="/">Home</a>
          <a href="/about">Journey</a>
          <a href="/products">Products</a>
         
        </div>

        <div className="footer-right">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaPinterestP /></a>
        </div>
      </div>

      <div className="footer-note">
        <p>&copy; {new Date().getFullYear()} ReForma. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
