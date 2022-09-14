import React from "react";
import { Container, Copyright, HeadingSec } from "../../Styled";
import posts from "../Array";
import Footer from "../Footer/Footer";
import {
  DetailsContainer,
  Image,
  Photo,
  Paragraph,
  Note,
} from "./Detailspage.styled";
import Post from "../HomeSection/Post";
import { rectangle, rect } from "../../image";

const DetailsPage = ({ data }) => {
  return (
    <>
      <DetailsContainer>
        <Image>
          <img src={data.image} alt="" />
        </Image>

        <div>
          <Paragraph>
            <p>
              Design comps, layouts, wireframes—will your clients accept that
              you go about things the facile way? Authorities in our business
              will tell in no uncertain terms that Lorem Ipsum is that huge,
              huge no no to forswear forever.
              <br />
              <br />
              Not so fast, I'd say, there are some redeeming factors in favor of
              greeking text, as its use is merely the symptom of a worse problem
              to take into consideration.
              <br />
              <br />
              The toppings you may chose for that TV dinner pizza slice when you
              forgot to shop for foods, the paint you may slap on your face to
              impress the new boss is your business. But what about your daily
              bread?
            </p>
          </Paragraph>

          <Photo>
            <img src={rect} alt="" />
            <div>
              <p>image caption or credit</p>
            </div>
          </Photo>
          <>
            <Paragraph>
              <p>
                The toppings you may chose for that TV dinner pizza slice when
                you forgot to shop for foods, the paint you may slap on your
                face to impress the new boss is your business. But what about
                your daily bread? Not so fast, I'd say, there are some redeeming
                factors in favor of greeking text, as its use is merely the
                symptom of a worse problem to take into consideration.
                <br />
                <br />
                Design comps, layouts, wireframes—will your clients accept that
                you go about things the facile way? Authorities in our business
                will tell in no uncertain terms that Lorem Ipsum is that huge,
                huge no no to forswear forever.
              </p>
            </Paragraph>
          </>

          <Note>
            <div>
              <p>
                Design comps, layouts, wireframes—will your clients accept that
                you go about things the facile way? Authorities in our business
                will tell in no uncertain terms that Lorem Ipsum is that huge,
                huge no no to forswear forever.
              </p>
            </div>
          </Note>
          <Paragraph>
            <p>
              Design comps, layouts, wireframes—will your clients accept that
              you go about things the facile way? Authorities in our business
              will tell in no uncertain terms that Lorem Ipsum is that huge,
              huge no no to forswear forever.
              <br />
              <br />
              The toppings you may chose for that TV dinner pizza slice when you
              forgot to shop for foods, the paint you may slap on your face to
              impress the new boss is your business. But what about your daily
              bread? Not so fast, I'd say, there are some redeeming factors in
              favor of greeking text, as its use is merely the symptom of a
              worse problem to take into consideration.
              <br />
              <br />
              Not so fast, I'd say, there are some redeeming factors in favor of
              greeking text, as its use is merely the
              <br />
              <br />
              symptom of a worse problem to take into consideration. Design
              comps, layouts, wireframes—will your clients accept that you go
              about things the facile way? Authorities in our business will tell
              in no uncertain terms that Lorem Ipsum is that huge, huge no no to
              forswear forever.
            </p>
          </Paragraph>
        </div>
      </DetailsContainer>
      <>
        <Container>
          <HeadingSec>other interesting posts</HeadingSec>
          {posts
            .filter((post) => post.category === "weekly updates")
            .slice(0, 3)
            .map((post) => (
              <Post 
              image={post.image} 
              category={post.category}
              title={post.title}
              date={post.date}
              body={post.body}/>
            ))}
        </Container>
      </>
      <div>
        <Footer />
      </div>
      <Copyright>
        <p>Copyright 2021 - Elikem Daniel</p>
      </Copyright>
    </>
  );
};

export default DetailsPage;