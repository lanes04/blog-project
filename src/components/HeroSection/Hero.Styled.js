import styled from "styled-components";
import colors from "../../Colors";

export const HeroSection = styled.div`
  width: 1400px;
  height: 555px;
  background-color: ${colors.navy};
;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 100px;
  box-sizing: inherit;
`;

export const Nav = styled.div`
  width: 1320px;
  margin: 0 auto;
  height: 120px;
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito Sans";
  text-transform: capitalize;
  margin-bottom: 5px;
  box-sizing: border-box;
  `

export const Logo = styled.div`
  img {
    width: 93.93px;
    height: 18px;
  }
`;

export const Category = styled.div`
   display: flex;
   height: 25px;
   width: 483px;
   justify-content: space-between;
   padding: 0;

   li {
    color: #ffff;
    font-size: 1.125rem;
    font-weight: 500;
    list-style: none;
    font-family: "Graphik";
    cursor: pointer;
  }
  li:not(:last-chiild) {
    margin-right: 40px;
  }
`;

export const Subscribe = styled.div`
 display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;
width: 108px;
height: 36px;
left: 1262px;
top: 70px;
background: rgba(255, 255, 255, 0.1);
border-radius: 8px
`

export const TextContainer = styled.div`
  background-color: transparent;
  height: 430px;
  width: 970px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Nunito Sans";
  margin: 0 auto;
  box-sizing: border-box;
  padding-right: 25px;
  h1 {
    font-size: 3.3rem;
    font-weight: 900;
    color: #fff;
    font-family: "graphik";
  }
  & span div {
    font-size: 1.2rem;
    font-family: "graphik";
    font-weight: 600;
    color: #fff;
    border-radius: 6px;
    padding: 8px 12px 10px 12px;
    box-sizing: border-box;
  }
  & > * {
    box-sizing: border-box;
  }
`;