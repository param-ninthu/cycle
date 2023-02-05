import React, { useState, useReducer } from "react";
import {
  HooksContainers,
  HooksHeader,
  HooksDemoBody,
} from "../components/hooksScreenElements";

import { Button } from "react-bootstrap";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_count": {
      return {
        name: state.name,
        count: state.count + 1,
      };
    }
    case "changed_name": {
      return {
        name: "Ninthu",
        count: state.count,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

const HooksuseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 42, name: "Kesan" });
  return (
    <>
      <HooksContainers>
        <HooksHeader> useReducer</HooksHeader>
        <HooksDemoBody
          style={{ flexDirection: "row", justifyContent: "space-around" }}
        >
          <div style={{ color: "white" }}>
            <Button
              size="lg"
              variant="outline-light"
              onClick={() => {
                dispatch({ type: "incremented_count" });
              }}
            >
              {" "}
              Increment{" "}
            </Button>
            <h1> {state.count}</h1>
          </div>
          <div style={{ color: "#64e688" }}>
            <Button
              size="lg"
              variant="outline-success"
              onClick={() => {
                dispatch({ type: "changed_name" });
              }}
            >
              Change name
            </Button>
            <h1>{state.name}</h1>
          </div>
        </HooksDemoBody>
      </HooksContainers>
    </>
  );
};

export default HooksuseReducer;
