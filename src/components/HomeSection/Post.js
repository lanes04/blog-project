import React from 'react'
import { PostContainer, PostTitle, Textbox } from './Post.Styled'
import { Link } from 'react-router-dom'


const Post = ({ image, category, title, date, body, passData }) => {
  return (
    <PostContainer>
    <div>
      <Textbox>
        <div>
          <span>{category}</span>
          <span>{date}</span>
        </div>
        <Link to="./postdetails" onClick={passData}>
            <PostTitle>{title}</PostTitle>
        </Link>

        <p>
          {body}
        </p>
      </Textbox>
      <img src={image} alt="post image" />
    </div>
  </PostContainer>
  )
}

export default Post
