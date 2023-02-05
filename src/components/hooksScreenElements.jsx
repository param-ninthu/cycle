import React from "react";
import styled from "styled-components";

// #070707 -bg
// #64e688 - green
// #61dbfb - blue

export const HooksContainers = styled.div`
  width: 100%;
  height: auto;
  background-color: #070707;
  display: flex;
  flex-direction: column;
  margin: 20px !important;
`;

export const HooksHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  background-color: #070707;
  color: #61dbfb;
  font-family: "Heebo", sans-serif;
  font-size: 35px;
  font-weight: 500;
  padding: 10px;
`;

export const HooksDemoBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 300px;
  background-color: #070707;
  border: 1px solid #64e688;
  border-radius: 10px;
  padding: 5px !important;
`;
