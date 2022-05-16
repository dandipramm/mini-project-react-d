import React from "react";
import "./FooterStyles.css";
import { FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contain">
        <div className="left">
          <div className="phone">
            <h4>
              <FaPhone size={25} style={{ color: "#ffffff", marginRight: "2rem" }} /> (+62)8561710603
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={25} style={{ color: "#ffffff", marginRight: "2rem" }} /> dandipram12@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Author</h4>
          <p>Orang yang menghasilkan ide dan gagasan untuk sebuah karya, Jadi orang yang menghasilkan ide dan gagasan pada Website ini adalah "Dandi Pramana"</p>
          <div className="social">
            <FaFacebook size={30} style={{ color: "#ffffff", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{ color: "#ffffff", marginRight: "1rem" }} />
            <FaInstagram size={30} style={{ color: "#ffffff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
