import axios from "axios";
import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../components";
import { PRODUCT_COUNT, PRODUCT_ITEM } from "../../utils/constants";
import { getProductFromLocalStorage } from "../../utils/getProductFromLocalStorage";
import styles from "./ProductDetail.module.css";

const ProductDetail = (props) => {
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [addedProduct, setAddedProduct] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setAddedProduct(getProductFromLocalStorage(PRODUCT_ITEM));
    setProductCount(getProductFromLocalStorage(PRODUCT_COUNT, "count"));
  }, []);
  const productId = props.match.params.productId;
  useEffect(() => {
    axios
      .get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`)
      .then((response) => {
        setProductData(response.data);
        setIsLoading(false);
        setImageUrl(response.data.photos[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  const onImageClick = (pos) => {
    setCurrentImage(pos);
    setImageUrl(productData.photos[pos]);
  };
  const addDataIntoList = (productData) => {
    let productCount = getProductFromLocalStorage(PRODUCT_COUNT, "count");
    productCount += 1;
    const newProductData = [...addedProduct];
    if (addedProduct.length === 0) {
      var myObj = {
        id: productData.id,
        title: productData.name,
        count: 1,
        price: productData.price,
        preview: productData.preview,
      };
      newProductData.push(myObj);
    } else if (newProductData.length !== 0) {
      var count = 0;
      for (var i = 0; i < newProductData.length; i++) {
        if (newProductData[i].id === productData.id) {
          newProductData[i].count = parseInt(newProductData[i].count) + 1;
          count += 1;
        }
      }
      if (count === 0) {
        myObj = {
          id: productData.id,
          title: productData.name,
          count: 1,
          price: productData.price,
          preview: productData.preview,
        };
        newProductData.push(myObj);
      }
    }
    setAddedProduct(newProductData);
    setProductCount(productCount);
    // Store The List Into Local Storage
    localStorage.setItem(PRODUCT_ITEM, JSON.stringify(newProductData));
    localStorage.setItem(PRODUCT_COUNT, JSON.stringify(productCount));
  };
  return (
    <div>
      <Header count={productCount} />
      {!isLoading && (
        <div className={styles.Product}>
          <div className={styles.leftColumn}>
            <img src={imageUrl} alt="" />
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.productDescription}>
              <h1>{productData.name}</h1>
              <h4>{productData.brand}</h4>
              <h3>
                Price: Rs <span>{productData.price}</span>
              </h3>
              <div className={styles.description}>
                <h3>Description</h3>
                <p>{productData.description}</p>
              </div>
              <div className={styles.productPreview}>
                <h3>Product Preview</h3>
                <div className={styles.previewImg}>
                  {productData?.photos?.map((item, pos) => {
                    return (
                      <img
                        key={pos}
                        className={[
                          styles.Image,
                          pos === currentImage ? styles.Active : null,
                        ].join(" ")}
                        src={item}
                        alt=""
                        onClick={() => onImageClick(pos)}
                      />
                    );
                  })}
                </div>
              </div>
              <div
                className={styles.btn}
                onClick={() => addDataIntoList(productData)}
              >
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetail;
