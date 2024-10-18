import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => props.theme.secondary};
  padding: 10px 20px;
  border-radius: 5px;
`;
const Icon = styled.i`
  font-size: 35px;
  color: ${(props) => props.theme.primary};
`;

const Title = styled.span``;

const Skill = ({ item }) => {
  return (
    <Container>
      <Icon className={item.icon}></Icon>
      <Title>{item.name}</Title>
    </Container>
  );
};

export default Skill;
