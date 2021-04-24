import React from "react";
import styled from "styled-components";

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
  background-color: rgb(185, 173, 173);
`;
const H1 = styled.h1`
  font-family: "Oswald", sans-serif;
  margin-bottom: 1rem;
`;
const Heading = () => {
  return (
    <Header>
      <H1>Photo Feed</H1>
    </Header>
  );
};

export default Heading;
