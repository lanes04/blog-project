import styled from "styled-components";
import colors from "../../Colors";

export const CategoryContainer = styled.div`
  box-sizing: border-box;
  font-family: "graphik";
  min-height: 3vh;
  width: 970px;
  margin: 0 auto;
`;
export const Btndv = styled.div`
  width: 970px;
  height: 40px;
  background-color: transparent;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: -20px;
  margin-bottom: 160px;
`;
export const Button = styled.button`
  height: 40px;
  width: 128px;
  display: inline-block;
  font-family: "graphik";
  font-weight: 600;
  background-color: ${colors.blue};
  border: none;
  border-radius: 8px;
  color: ${colors.navy};
  padding: 10px 20px 10px 20px;
  box-shadow: 0px 0px 0.1px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;