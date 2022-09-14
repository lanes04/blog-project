import styled from "styled-components";
import colors from "../../Colors";

export const PostContainer = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 40px;
  &:not(:last-child) {
    border-bottom: 1px solid #ebf2fe;
  }
  & > * {
    font-family: "graphik";
    color: ${colors.navy};
  }
  & > div {
    height: 210px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 100%;
      width: 300px;
    }
    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
    }
  }
`;

export const Textbox = styled.div`
  width: 610px;
  height: 100%;
  padding: 0 0;
  display: flex;
  flex-direction: column;
  & div {
    text-align: left;
  }
  & div a {
    color: ${colors.navy};
    margin-bottom: 7px;
    font-weight: 900;
    font-size: 28px;
    line-height: 130%;
    text-transform: capitalize;
    text-align: left;
    background-color: #fff;
  }
  & > div {
    display: flex;
    gap: 0;
    height: 34px;
    min-width: 252px;
    margin-bottom: 10px;
    span:last-child {
      font-weight: 600;
      background-color: #fff;
    }
    & > * {
      min-width: 126px;
      padding: 8px 12px 10px 12px;
      text-align: center;
      font-weight: 700;
      background-color: ${colors.blue};
      text-transform: uppercase;
      border-radius: 6px 0px 0px 6px;
    }
    & > em {
      font-weight: 700;
    }
  }
`;

export const PostTitle = styled.div`
  color: ${colors.navy};
  margin-bottom: 12px;
  font-weight: 900;
  font-size: 28px;
  line-height: 130%;
  text-transform: capitalize;
  text-align: left;
  background-color: #fff;
`;