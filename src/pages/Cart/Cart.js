import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Header } from "../../components";
import { PRODUCT_COUNT, PRODUCT_ITEM } from "../../utils/constants";
import { getProductFromLocalStorage } from "../../utils/getProductFromLocalStorage";
import styles from "./Cart.module.css";

const Cart = () => {
  const [addedProduct, setAddedProduct] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setAddedProduct(getProductFromLocalStorage(PRODUCT_ITEM));
    setProductCount(getProductFromLocalStorage(PRODUCT_COUNT, "count"));
  }, []);
  const placeOrder = () => {
    setAddedProduct([]);
    setProductCount(0);
    localStorage.removeItem(PRODUCT_ITEM);
    localStorage.removeItem(PRODUCT_COUNT);
  };

  var cost = 0;
  for (let i = 0; i < addedProduct.length; i++) {
    cost += parseInt(addedProduct[i].count) * parseInt(addedProduct[i].price);
  }

  return (
    <>
      <Header count={productCount} />
      <div className={styles.cart}>
        <h1>Checkout</h1>
        <div className={styles.cartContainer}>
          <div className={styles.leftSide}>
            <p>
              Total Items: <span>{addedProduct.length}</span>
            </p>
            <div className={styles.cartItems}>
              {addedProduct.map((item, pos) => (
                <div className={styles.item} key={pos}>
                  <img src={item.preview} alt="" />
                  <div className={styles.detail}>
                    <h3>{item.title}</h3>
                    <p>x{item.count}</p>
                    <p>Amount: {item.price * item.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.totalAmount}>
              <h2>Total Amount</h2>
              <p>
                Total Amount: Rs <span>{cost}</span>
              </p>
              <Link to="/order-placed">
                <button onClick={placeOrder}>Place Order</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
