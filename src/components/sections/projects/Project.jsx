import styled from "styled-components";
import { Button, Text } from "../../ui/UI";
const Container = styled.div`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.text};
  border-radius: 10px;
  width: 45%;
  min-width: 300px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  transition: all 0.5s ease;
  text-align: center;
  background-size: contain;
  width: 100%;
  &:hover {
    scale: 1.2;
  }
`;

const Title = styled.h5`
  font-size: 20px;
`;

const Project = ({ item }) => {
  const handleClick = () => {
    window.location.href = "https://github.com/NoahLaz/";
  };

  return (
    <Container>
      <ImageContainer>
        <Image src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
      </ImageContainer>
      <Wrapper>
        <Title>{item.title}</Title>
        <Text>{item.desc}</Text>
        <Button onClick={handleClick}>Read More!</Button>
      </Wrapper>
    </Container>
  );
};

export default Project;
