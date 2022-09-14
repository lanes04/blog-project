import styled from "styled-components";
import colors from "./Colors";

export const Container = styled.div`
  width: 970px;
  box-sizing: border-box;
  min-height: 200px;
  margin: 0 auto;
  margin-bottom: 140px;
  &:last-child {
    margin-bottom: 160px;
  }
`;

export const HeadingSec = styled.div`
  color: ${colors.navy};
  font-size: 2.25rem;
  font-weight: 900;
  font-family: "graphik";
  margin-bottom: 63px;
  text-transform: capitalize;
`;

export const Copyright = styled.div`
  width: 970px;
  height: 58px;
  display: flex;
  align-items: end;
  justify-content: center;
  margin: 0 auto;
  font-family: "graphik";
  border-top: 1px solid #efefef;
  margin-bottom: 40px;
  p {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${colors.navy};
  }
`;

export const HomeContainer = styled.div`
  margin-bottom: 160px;
`;