import React from "react";
import "../App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import ShoeBox from "../components/ShoeBox";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const ShoeList = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <ShoeBox
              key={product._id}
              name={product.name}
              description={product.msg}
              imageUrl={product.photo}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ShoeList;
