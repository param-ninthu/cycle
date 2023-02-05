import React from "react";
import styled from "styled-components";

// #070707 -bg
// #64e688 - green
// #61dbfb - blue

export const HomeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100% !important;
  height: auto !important;
  background-color: #070707;
  padding: 5px !important;
  padding-bottom: 50px !important;
`;

export const HomeScreenHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  background-color: #070707;
  color: #64e688;
  font-family: "Heebo", sans-serif;
  font-size: 40px;
  font-weight: 500;
  border-bottom: #64e688 2px solid;
  padding-bottom: 10px;
`;

export const HomeScreenBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  background-color: #070707;
  padding: 5px !important;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 40px;
  width: 100%;
  font-size: 50px;
  background-color: #070707;
  color: #61dbfb;
  font-weight: 800;
`;

export const ContentImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HomeScreenFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
`;

export const DemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70% !important;
  margin-top: 50px;
`;

export const DemoButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px !important;
`;

export const DemoOutputContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  border: 1px solid #61dbfb;
  border-radius: 10px;
`;

export const TheEndButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 50px;
  background-color: #070707;
  border: 3px solid #61dbfb;
  color: #64e688;
  cursor: pointer;
  font-family: "Heebo", sans-serif;
  font-size: 20px;
  font-weight: 900;
  border-radius: 5px;

  &:hover {
    background-color: #64e688;
    color: #070707;
    border: none;
  }
`;
