import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GrVisa, GrMastercard } from "react-icons/gr";
import { FiMail, FiInfo, FiMapPin } from "react-icons/fi";
import { RiCustomerServiceFill, RiChatCheckFill } from "react-icons/ri";
import { BiNews } from "react-icons/bi";

function Footer() {
  return (
    <div>
      <footer className="flex flex-wrap gap-10 bg-gega-pink p-10 pt-20 mt-10 justify-between">
        <div className="flex flex-col">
          <p className="flex flex-col">
            <p><AiOutlineMail /> </p><p>Email: 1senanmemmedov@gmail.com</p>
          </p>
          <p>
            <AiOutlinePhone /> Phone: +994 (50) 783-2995
          </p>
          <p>
            <AiOutlineHome /> Address: 123 Beauty Ave, City, State, Country
          </p>
        </div>
        <div className="flex flex-col">
          <ul>
            <li className="flex items-center">
              <RiCustomerServiceFill /> <a href="#">FAQ</a>
            </li>
            <li className="flex items-center">
              <IoMdCheckmarkCircle /> <a href="#">Returns &amp; Refunds</a>
            </li>
            <li className="flex items-center">
              <FiMail /> <a href="#">Shipping &amp; Delivery</a>
            </li>
            <li className="flex items-center">
              <FiInfo /> <a href="#">Privacy Policy</a>
            </li>
            <li className="flex items-center">
              <FiMail /> <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul>
            <li className="flex items-center">
              <FaFacebook /> <a href="#">Facebook</a>
            </li>
            <li className="flex items-center">
              <FaInstagram /> <a href="#">Instagram</a>
            </li>
            <li className="flex items-center">
              <FaTwitter /> <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p>
            <BiNews /> Subscribe to Our Newsletter
          </p>
        </div>
        <div className="flex flex-col">
          <p>Accepted Payment Methods:</p>
          <ul>
            <li className="flex items-center">
              <GrVisa /> Visa
            </li>
            <li className="flex items-center">
              <GrMastercard /> Mastercard
            </li>
            <li className="flex items-center">
              <RiChatCheckFill /> PayPal
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p>About Our Store</p>
        </div>
        <div className="flex flex-col">
          <ul>
            <li className="flex items-center">
              <AiOutlineHome /> <a href="#">Home</a>
            </li>
            <li className="flex items-center">
              <IoMdCheckmarkCircle /> <a href="#">Shop</a>
            </li>
            <li className="flex items-center">
              <AiOutlineMail /> <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p>Customer Reviews/Testimonials</p>
        </div>
        <div className="flex flex-col">
          <p>Accessibility Statement</p>
        </div>
        <div className="flex flex-col">
          <p>&copy; 2023 Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
