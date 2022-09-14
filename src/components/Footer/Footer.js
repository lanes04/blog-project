import React from "react";
import { FooterBox } from "./Footer.Styled";

const Footer = () => {
  return (
    <FooterBox>
      <div></div>
      <img src="" alt="" />
      <h2>Subscribe to my blog</h2>
      <p>I post fresh content every week.</p>

      <form>
        <input type="text" placeholder="Email address" />
        <button>subscribe</button>
      </form>
    </FooterBox>

    
  );
};

export default Footer;