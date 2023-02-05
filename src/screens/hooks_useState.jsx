import React, { useState } from "react";
import {
  HooksContainers,
  HooksHeader,
  HooksDemoBody,
} from "../components/hooksScreenElements";

const HooksuseState = () => {
  const [name, setName] = useState("");
  return (
    <>
      <HooksContainers>
        <HooksHeader> useState</HooksHeader>
        <HooksDemoBody>
          <input
            type="text"
            placeholder="Type Something !"
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "50%",
              height: "50px",
              fontSize: "20px",
              margin: "10px",
            }}
          />

          <h1 style={{ color: "white" }}>{name}</h1>
        </HooksDemoBody>
      </HooksContainers>
    </>
  );
};

export default HooksuseState;
