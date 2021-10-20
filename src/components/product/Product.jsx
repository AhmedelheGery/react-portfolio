import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Product = ({ match }) => {
    
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductDetails();
  }, []);

  // call api to get single product
  const getProductDetails = () => {
    return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  return (
    <div>
      {product ? (
        <div className="d-flex align-items-center justify-content-center flex-wrap container">
          <div className="w-25 me-4">
            <img className="w-100" src={product.image} alt="" />
          </div>
          <div>
            <h2 className="text-primary">{product.title}</h2>
            <p className="text-danger">{product.category}</p>
            <p className="text-success">{product.price}</p>
            <p className="text-warning">{product.rating.rate}</p>
            <p className="text-secondary">{product.title}</p>
          </div>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Product;
