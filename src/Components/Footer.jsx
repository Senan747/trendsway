import React from "react";

function Footer() {
  return (
    <div>
      <footer className="flex flex-row flex-wrap gap-10 bg-gega-pink p-10 pt-20 mt-10 justify-between">
        <div class="contact-info">
          <p>Email: 1senanmemmedov@gmail.com</p>
          <p>Phone: +994 (50) 783-2995</p>
          <p>Address: 123 Beauty Ave, City, State, Country</p>
        </div>
        <div class="customer-service">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Returns &amp; Refunds</a>
            </li>
            <li>
              <a href="#">Shipping &amp; Delivery</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div class="social-media">
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
        <div class="newsletter">
          <p>Subscribe to Our Newsletter</p>
        </div>
        <div class="payment-methods">
          <p>Accepted Payment Methods:</p>
          <ul>
            <li>Visa</li>
            <li>Mastercard</li>
            <li>PayPal</li>
          </ul>
        </div>
        <div class="about-us">
          <p>About Our Store</p>
        </div>
        <div class="site-map">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="customer-reviews">
          <p>Customer Reviews/Testimonials</p>
        </div>
        <div class="accessibility">
          <p>Accessibility Statement</p>
        </div>
        <div class="copyright">
          <p>Copyright © 2023 Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
