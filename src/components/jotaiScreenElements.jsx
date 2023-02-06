import styled from "styled-components";

export const JotaiContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #070707;
  display: flex;
  flex-direction: column;
  margin: 20px !important;
`;

export const JotaiHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  background-color: #070707;
  color: #64e688;
  font-family: "Heebo", sans-serif;
  font-size: 35px;
  font-weight: 500;
  padding: 10px;
`;

export const JotaiBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 300px;
  background-color: #070707;
  border: 1px solid #61dbfb;
  border-radius: 10px;
  padding: 5px !important;
`;
