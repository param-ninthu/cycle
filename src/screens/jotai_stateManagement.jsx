import React from "react";
import { atom, useAtom } from "jotai";
import {
  JotaiBody,
  JotaiContainer,
  JotaiHeader,
} from "../components/jotaiScreenElements";
import { Button } from "react-bootstrap";

const Useatom = () => {
  const [blast, setBlast] = useAtom("");

  return (
    <>
      <JotaiContainer>
        <JotaiHeader>Atom</JotaiHeader>
        <JotaiBody>
          <input
            type="text"
            placeholder="Check Atom !"
            onChange={(e) => setBlast(e.target.value)}
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
          <h1 style={{ color: "white" }}>{blast}</h1>
        </JotaiBody>
      </JotaiContainer>
    </>
  );
};

export default Useatom;
