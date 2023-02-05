import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  HooksContainers,
  HooksHeader,
  HooksDemoBody,
} from "../components/hooksScreenElements";

const HooksuseEffect = () => {
  const [resource, setResource] = useState("posts");
  const [items, setItems] = useState([]);
  const [effect, setEffect] = useState("false");

  const updateEffect = () => {
    setEffect("true");
  };

  useEffect(() => {
    if (effect === "true") {
      fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    }
  });

  return (
    <>
      <HooksContainers>
        <HooksHeader> useEffect</HooksHeader>
        <HooksDemoBody>
          <Button size="lg" onClick={() => updateEffect()}>
            {" "}
            Click here{" "}
          </Button>
          {items.map((item) => {
            return <div style={{ color: "white" }}>{item.title}</div>;
          })}
        </HooksDemoBody>
      </HooksContainers>
    </>
  );
};

export default HooksuseEffect;
