import styled from "styled-components";
import colors from "../../Colors";

export const DetailsContainer = styled.div`
  width: 100%;
  margin-bottom: 172px;
  & > * {
    color: ${colors.navy};
  }
`;

export const Image = styled.div`
  width: 1520px;
  margin: 0 auto;
  margin-top: -100px;
  height: 740px;
  margin-bottom: 100px;
  & > * {
    box-sizing: border-box;
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const Paragraph = styled.div`
  width: 680px;
  margin: 0 auto;
  margin-bottom: 40px;
  p {
    font-size: 1.125rem;
    color: ${colors.navy};
    font-family: "graphik";
    line-height: 27px;
    font-weight: 500;
  }
`;

export const Photo = styled.div`
  margin: 0 auto;
  height: 536px;
  width: 780px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  img {
    height: 490px;
  }
  div {
    height: 46px;
    background-color: ${colors.blue};
    border-radius: 0 0 10px 10px;
    padding-left: 20px;
    font-family: "graphik";
    font-weight: 500;
    color: ${colors.navy};
    text-transform: uppercase;
    font-size: 0.75rem;
    width: 780px;
    box-sizing: border-box;
  }
`;

export const Note = styled.div`
  width: 780px;
  height: 235px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: end;
  justify-content: center;
  background-color: #1d54c0;
  border-radius: 10px;
  margin-bottom: 70px;
  div {
    width: 780px;
    background-color: ${colors.blue};
    height: 232px;
    border-radius: 10px 10px 5px 5px;
    padding: 50px;
    box-sizing: border-box;
    padding-top: 30px;
  }
  & div p {
    font-size: 1.375rem;
    font-family: "graphik";
    font-weight: 600;
    color: ${colors.navy};
    line-height: 33px;
  }
`;