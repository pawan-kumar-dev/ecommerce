import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={styles.card} id={props.id}>
      <Link to={`/product-detail/${props.id}`}>
        <div className={styles.img}>
          <img src={props.preview} alt="" />
        </div>
        <div className={styles.details}>
          <h3>{props.title}</h3>
          <h4>{props.brand}</h4>
          <h5>{props.price}</h5>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
