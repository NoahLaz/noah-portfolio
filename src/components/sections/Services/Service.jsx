import styled from "styled-components";
import { Text } from "../../ui/UI";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  flex-basis: 300px;
  box-shadow: 0px 0px 3px ${(props) => props.theme.primary};
  padding: 20px;
`;
const Icon = styled.i`
  font-size: 50px;
  text-align: center;
  color: ${(props) => props.theme.primary};
`;

const Title = styled.h4``;

const Service = ({ item }) => {
  return (
    <Wrapper>
      <Icon className={item.icon}></Icon>
      <Title>{item.title}</Title>
      <Text>{item.desc}</Text>
    </Wrapper>
  );
};

export default Service;
