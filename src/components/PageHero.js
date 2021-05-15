import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Accueil</Link>
          {product && <Link to="/products">/Produits</Link>}/{title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-larm-purple);
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;

  a {
    color: var(--clr-white);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-larm-darkred);
  }
`;

export default PageHero;
