import React, { useMemo } from "react";
import { Button } from "react-bootstrap";
import { ProductContainer } from "./productElements";

const Product = React.memo(({ name, addToCart }) => {
  console.log(`${name} re rendered`);
  return (
    <ProductContainer>
      <h1>{name}</h1>
      <Button onClick={addToCart}>+</Button>
    </ProductContainer>
  );
});

export default Product;
