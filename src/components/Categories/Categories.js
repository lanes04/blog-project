import React, { useState } from "react";
import { Container, Copyright, HeadingSec } from "../../Styled";
import posts from "../Array";
import Footer from "../Footer/Footer";
import Post from "../HomeSection/Post";
import { CategoryContainer, Btndv, Button } from "./categories.styled";

const Categories = ({ category }) => {
  const [pagination, setPagination] = useState(6);
  const handlePagination = () => {
    setPagination((num) => num + 3);
  };
  return (
   
    <CategoryContainer>
      <>
        <Container>
          <HeadingSec>{category}</HeadingSec>
          {posts
            .filter((post) => post.category === `${category}`)
            .slice(0, `${pagination}`)
            .map((post) => (
              <Post 
              image={post.image} 
              category={post.category}
              title={post.title}
              date={post.date}
              body={post.body} />
            ))}
        </Container>

        <Btndv>
          <Button onClick={handlePagination}>more articles</Button>
        </Btndv>
      </>
      <div>
        <Footer />
      </div>
      <Copyright>
        <p>Copyright 2021 - Elikem Daniel</p>
      </Copyright>
    </CategoryContainer>
  );
};

export default Categories;