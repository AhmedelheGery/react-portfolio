import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shop = () => {
  // state
  const [products, setProducts] = useState([]);

  // useEffect
  useEffect(() => {
    // once on initial render
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <section>
      <section className="d-flex flex-wrap justify-content-center">
        {
          products && products.length 
          ?
        products.map((product) => {
          return (
            <Link
              to={`/shop/${product.id}`}
              key={product.id}
              className="product p-1 w-25 mb-2 me-2 border text-start"
            >
              <div className="d-flex justify-content-center mb-2">
                <img className="w-50" src={product.image} alt="" />
              </div>
              <h6>{product.title}</h6>
              <p>Price : {product.price}</p>
              <p>Rating : {product.rating.rate}</p>
            </Link>
          );
        })
        : 
        <Spinner animation="grow" />
      }
      </section>
    </section>
  );
};

export default Shop;
