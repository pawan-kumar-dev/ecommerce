import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ count }) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <h4>
          <Link to="/">
            {" "}
            <span>SHOP</span>LANE
          </Link>
        </h4>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Clothings</li>
        <li>Accessories</li>
      </ul>
      <div className={styles.icons}>
        <i className="fa fa-search"></i>
        <div className={styles.cart}>
          <Link to="/checkout">
            <i className="fa fa-shopping-cart">
              <span className="cartCount">{count}</span>
            </i>
          </Link>
        </div>
        <i className="fa fa-user-circle-o"></i>
        <div className={styles.burger}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
