import styled from "styled-components";
import Experience from "./Experience";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Container = styled.div`
  margin-top: 20px;
  min-width: 300px;
  max-width: 400px;
`;
const Title = styled.h3`
  text-align: left;
  font-weight: bold;
  font-size: 22px;
  padding: 15px 0;
  color: ${(props) => props.theme.text};
`;

const Experiences = ({ experienceData }) => {
  return (
    <Container>
      <Title>Experiences</Title>
      <Wrapper>
        {experienceData?.map((item, index) => (
          <Experience item={item} key={index} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Experiences;
