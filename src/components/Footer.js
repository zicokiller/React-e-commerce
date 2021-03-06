import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <h5>&copy; {new Date().getFullYear()}
      <span> e-commerce CMS-</span>
      <span>Powered by LARM-</span>
      </h5>
      <h6>All rights reserved</h6>
      <div className="social">
        <span><FaGithub size={30} /></span>
        <span><FaFacebook size={30} /></span>
        <span><FaTwitter size={30} /></span>
        <span><FaInstagram size={30} /></span>

        
        
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-larm-purple);
  text-align: center;
  span {
    color: var(--clr-larm-darkred);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    span {
      display: grid;
      margin: 0 auto;
      place-items: center;
      margin-left: 15px;
      color: var(--clr-white);
      cursor: pointer;
    }
  }
  @media (min-width: 776px) {
    flex-direction: column;
  }
`;

export default Footer;
