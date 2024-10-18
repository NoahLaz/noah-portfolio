import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Link = styled.a``;

const Icon = styled.i`
  cursor: pointer;
  font-size: 50px;
  color: ${(props) => props.theme.accent};
  -webkit-text-stroke: 1px black;
  &:hover {
    color: ${(props) => props.theme.secondary};
    transform: scale(1.2);
  }
`;
const Socials = () => {
  return (
    <Container>
      <Link href="https://www.linkedin.com/in/noahlaz/">
        <Icon className="fa-brands fa-linkedin"></Icon>
      </Link>
      <Link href="https://www.instagram.com/nslklol/">
        <Icon className="fa-brands fa-instagram"></Icon>
      </Link>
      <Link href="https://github.com/NoahLaz">
        <Icon className="fa-brands fa-github"></Icon>
      </Link>
    </Container>
  );
};

export default Socials;
