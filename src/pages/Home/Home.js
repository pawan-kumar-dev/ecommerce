import axios from "axios";
import React, { useEffect, useState } from "react";
import { Footer, Header, Loader, ProductCard } from "../../components";
import { PRODUCT_ITEM } from "../../utils/constants";
import { getProductFromLocalStorage } from "../../utils/getProductFromLocalStorage";

const Home = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setIsFetching(true);
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((response) => {
        setProductList(response.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getProductView = (type) => {
    if (type === "cloth") {
      return productList.map(
        (item) =>
          !item.isAccessory && (
            <ProductCard
              key={item.id}
              id={item.id}
              preview={item.preview}
              title={item.name}
              brand={item.brand}
              price={item.price}
            />
          )
      );
    } else {
      return productList.map((item) => {
        return (
          item.isAccessory && (
            <ProductCard
              key={item.id}
              id={item.id}
              preview={item.preview}
              title={item.name}
              brand={item.brand}
              price={item.price}
            />
          )
        );
      });
    }
  };
  return (
    <>
      <Header count={getProductFromLocalStorage(PRODUCT_ITEM).length} />
      <h2 className="sectionHeading">Clothings for Men and Women</h2>
      <div className="cardConatiner">
        {isFetching ? <Loader /> : getProductView("cloth")}
      </div>
      <h2 className="sectionHeading">Accessory for Men and Women</h2>
      <div className="cardConatiner">
        {isFetching ? <Loader /> : getProductView()}
      </div>
      <Footer />
    </>
  );
};

export default Home;
