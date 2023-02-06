import React from "react";
import { atom, useAtom } from "jotai";
import {
  JotaiBody,
  JotaiContainer,
  JotaiHeader,
} from "../components/jotaiScreenElements";
import { Button } from "react-bootstrap";

const Useatom = () => {
  return (
    <>
      <JotaiContainer>
        <JotaiHeader>Atom</JotaiHeader>
        <JotaiBody>
          <input
            type="text"
            placeholder="Check Atom !"
            style={{
              width: "50%",
              height: "45px",
              fontSize: "20px",
              margin: "10px",
            }}
          />
          <Button variant="outline-success" size="lg">
            {" "}
            Blast{" "}
          </Button>
        </JotaiBody>
      </JotaiContainer>
    </>
  );
};

export default Useatom;
