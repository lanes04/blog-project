import React from 'react'
import Hero from './components/HeroSection/Hero'
import Post from './components/HomeSection/Post'
import posts from './components/Array'
import { Container, Copyright, HeadingSec, HomeContainer } from './Styled'
import Footer from './components/Footer/Footer'
import GlobalStyle from './Global'
import DetailsPage from './components/Details/DetailsPage'
import { useState,useEffect } from 'react'
import Library from './components/Library/Library'
import Categories from './components/Categories/Categories'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postlist from './posts.json'



const App = () => {

  const [pageData, setPageData] = useState({});

  const [category, setCategory] = useState('');

  const handleNavigateCategory = (e) => {
    setCategory(e.target.textContent);
  };
  
  useEffect(() => {
    console.log(category)
   }, [category]);

  const handlePassData = (id) => {
  const pageInfo = posts;

  pageInfo.forEach((post) => {
    if (post.id === id) {
      setPageData({ ...post });
    }
  });
};


  return (
    <div>
      <GlobalStyle />

     <BrowserRouter>

       <Hero navigateCategory={(e) => handleNavigateCategory(e)} category={category} />

     <Routes>

     <Route
            path="/"
            element={
              <>
            
      <HomeContainer>
      <Container>
                    <HeadingSec>Design Tools</HeadingSec>
                    {Postlist
                      .map((post) => (
                        <Post image={post.image} 
                              category={post.category}
                              title={post.title}
                              date={post.date}
                              body={post.body}
                        />
                      ))}
      </Container>

      <Container>
                    <HeadingSec>weekly updates</HeadingSec>
                    {Postlist
                      
                      .map((post) => (
                        <Post image={post.image} category={post.category}
                            title={post.title}
                            date={post.date}
                            body={post.body}
                        />
                      ))}
                  </Container>
                  <Container>
                    <HeadingSec>tutorials</HeadingSec>
                    {Postlist
                      
                      .map((post) => (
                        <Post
                          title={post.title}
                          date={post.date}
                          body={post.body}
                          image={post.image}
                          category={post.category}
                          passData={() => handlePassData(post.id)}
                        />
                      ))}
              
                  </Container>
                </HomeContainer>

               <div>
                <Footer />
              </div>

               <Copyright>
                  <p>Copyright 2021 - Elikem Daniel</p>
                </Copyright>
                </>
            }
          />      

                <Route path="/library" element={<Library />} />

                <Route
                   path="/category"
                   element={<Categories category={category} />}
                />
                

                <Route
                   path="/postdetails"
                   element={<DetailsPage data={pageData} />}
                />

        </Routes>
      </BrowserRouter>             
    </div>
  )
}

export default App
