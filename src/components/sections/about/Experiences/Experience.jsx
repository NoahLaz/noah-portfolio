import styled from "styled-components";
import { Text } from "../../../ui/UI";

const Container = styled.div`
  color: ${(props) => props.theme.text};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 5px;
`;
const EsbName = styled.span`
  font-weight: bold;
`;
const Date = styled.span`
  text-align: end;
`;
const Title = styled.span`
  grid-column: span 2;
  font-weight: 500;
  font-size: 14px;
`;

const Experience = ({ item }) => {
  return (
    <Container>
      <EsbName>{item.company}</EsbName>
      <Date>{item.date}</Date>
      <Title>{item.title}</Title>
      <Text>{item.desc}</Text>
    </Container>
  );
};

export default Experience;
