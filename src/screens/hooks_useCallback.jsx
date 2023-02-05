import React, { useState, useCallback } from "react";
import {
  HooksContainers,
  HooksHeader,
  HooksDemoBody,
} from "../components/hooksScreenElements";

import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

import Product from "../products/Product";

const HookuseCallback = () => {
  const [product, setProduct] = useState(["1", "2"]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // const addToCart = () => {
  //   setCart(cart + 1);
  // };

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  console.log(count);
  console.log("Cart Items : " + cart);

  return (
    <>
      <HooksContainers>
        <HooksHeader>
          {" "}
          useCallback{" "}
          <Button
            variant="outline-secondary"
            onClick={() => setCount(count + 1)}
            size="lg"
          >
            Click
          </Button>
        </HooksHeader>
        <HooksDemoBody
          style={{
            flexDirection: "row",
            gap: "5px",
            justifyContent: "space-around",
            padding: "10px",
          }}
        >
          {product.map((item, i) => {
            return <Product name={item} key={i} addToCart={addToCart} />;
          })}
        </HooksDemoBody>
      </HooksContainers>
    </>
  );
};

export default HookuseCallback;
