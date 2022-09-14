import styled from "styled-components";
import colors from "../../Colors";

export const LibraryContainer = styled.div`
  width: 970px;
  height: 2003.33px;
  font-family: "graphik";
  color: ${colors.navy};
  font-weight: 700;
  text-transform: capitalize;
  font-size: 36px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 120.67px;
  div {
    width: 100%;
    p {
      font-size: 1rem;
      margin-bottom: 40px;
    }
  }
`;

export const FlexContainer = styled.div`
  width: 970px;
  min-height: 283.33px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 80.67px;
  img {
    width: 212.4px;
    height: 283.33px;
  }
`;