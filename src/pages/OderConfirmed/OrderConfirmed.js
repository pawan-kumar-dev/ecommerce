import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../components";
import { PRODUCT_COUNT } from "../../utils/constants";
import { getProductFromLocalStorage } from "../../utils/getProductFromLocalStorage";
import styles from "./OrderConfirmed.module.css";

const OrderConfirmed = () => {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProductCount(getProductFromLocalStorage(PRODUCT_COUNT, "count"));
  }, []);
  return (
    <>
      <Header count={productCount} />
      <div className={styles.confirmed}>
        <img src="https://i.imgur.com/Q9C8ExU.png" alt="" />
        <h3>Order Placed Successfully!!</h3>
      </div>
      <Footer />
    </>
  );
};

export default OrderConfirmed;
