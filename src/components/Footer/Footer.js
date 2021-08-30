import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.footerHeaders}>Online Store</p>
        <a href="/" className={styles.footerLink}>
          Men Clothing
        </a>
        <a href="/" className={styles.footerLink}>
          Women Clothing
        </a>
        <a href="/" className={styles.footerLink}>
          Men Accessories
        </a>
        <a href="/" className={styles.footerLink}>
          Women Accessories
        </a>
      </div>
      <div>
        <p className={styles.footerHeaders}>Helpful Links</p>
        <a href="/" className={styles.footerLink}>
          Home
        </a>
        <a href="/" className={styles.footerLink}>
          About
        </a>
        <a href="/" className={styles.footerLink}>
          Contact
        </a>
      </div>
      <div>
        <p className={styles.footerHeaders}>Partners</p>
        <a href="/" className={styles.footerLink}>
          Zara
        </a>
        <a href="/" className={styles.footerLink}>
          Pantaloons
        </a>
        <a href="/" className={styles.footerLink}>
          Levis
        </a>
        <a href="/" className={styles.footerLink}>
          UCB
        </a>
        <a href="/" className={styles.footerLink}>
          + Many More
        </a>
      </div>
      <div>
        <p className={styles.footerHeaders}>Address</p>
        <p href="/" className={styles.footerLink}>
          Building 101
        </p>
        <p href="/" className={styles.footerLink}>
          Central Avenue
        </p>
        <p href="/" className={styles.footerLink}>
          LA - 902722
        </p>
        <p href="/" className={styles.footerLink}>
          United States
        </p>
      </div>
    </footer>
  );
};

export default Footer;
