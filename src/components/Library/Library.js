import React from "react";
import { LibraryContainer, FlexContainer } from "./Library.styled";

import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
} from "../../image";
import { Copyright } from "../../Styled";

const Library = ({ style }) => {
  const books = [
    {
      image: img1,
      year: "2020",
    },
    {
      image: img2,
      year: "2020",
    },
    {
      image: img3,
      year: "2020",
    },
    {
      image: img4,
      year: "2020",
    },
    {
      image: img5,
      year: "2019",
    },
    {
      image: img6,
      year: "2019",
    },
    {
      image: img7,
      year: "2019",
    },
    {
      image: img8,
      year: "2019",
    },
    {
      image: img9,
      year: "2018",
    },
    {
      image: img10,
      year: "2018",
    },
    {
      image: img11,
      year: "2018",
    },
    {
      image: img12,
      year: "2017",
    },
    {
      image: img13,
      year: "2017",
    },
    {
      image: img14,
      year: "2017",
    },
    {
      image: img15,
      year: "2017",
    },
    {
      image: img16,
      year: "2017",
    },
    {
      image: img17,
      year: "2017",
    },
    {
      image: img18,
      year: "2017",
    },
  ];
  return (
    <div>
      <LibraryContainer>
        <h2>books I've read</h2>

        <div>
          <p>2020</p>
          <FlexContainer>
            {books
              .filter((book) => book.year === "2020")
              .map((book) => (
                <img src={book.image} alt="" />
              ))}
          </FlexContainer>

          <p>2019</p>
          <FlexContainer>
            {books
              .filter((book) => book.year === "2019")
              .map((book) => (
                <img src={book.image} alt="" />
              ))}
          </FlexContainer>

          <p>2018</p>
          <FlexContainer>
            {books
              .filter((book) => book.year === "2018")
              .map((book) => (
                <img src={book.image} alt="" />
              ))}
          </FlexContainer>

          <p>2017</p>
          <FlexContainer>
            {books
              .filter((book) => book.year === "2017")
              .map((book) => (
                <img src={book.image} alt="" />
              ))}
          </FlexContainer>
        </div>
      </LibraryContainer>

      <Copyright>
        <p>Copyright 2021 - Elikem Daniel</p>
      </Copyright>
    </div>
  );
};

export default Library;