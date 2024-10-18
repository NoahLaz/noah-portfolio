import React from "react";
import styled from "styled-components";

const BtnContainer = styled.button`
  transition: all 0.5s ease;
  background-color: ${(props) => props.theme.accent};
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.primary};
  }
`;

const Wrapper = styled.div`
  padding: 30px 10px;
  height: 100%;
  color: ${(props) => props.theme.text};
  max-width: 1000px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 45px;
  text-align: center;
  color: ${(props) => props.theme.primary};
  padding: 20px 0;
`;

const TextContainer = styled.p`
  color: ${(props) => props.theme.text};
  letter-spacing: 1px;
  font-size: 14px;
  grid-column: span 2;
`;

export const Button = ({ children, onClick, type, style }) => {
  return (
    <BtnContainer onClick={onClick} style={style} type={type}>
      {children}
    </BtnContainer>
  );
};

export const Container = ({ children, style }) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

export const Heading = ({ children }) => {
  return <Title>{children}</Title>;
};

export const Text = ({ children }) => {
  return <TextContainer>{children}</TextContainer>;
};
