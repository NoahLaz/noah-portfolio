import styled from "styled-components";
import Skill from "./Skill";
import { resume } from "../../../../data/data";

const Container = styled.div`
  color: ${(props) => props.theme.text};
`;

const Title = styled.h3`
  text-align: left;
  font-weight: bold;
  font-size: 22px;
  padding: 15px 0;
`;

const Desc = styled.p`
  letter-spacing: 1px;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Skills = ({ skillsData }) => {
  return (
    <Container>
      <Title>What Im Good At</Title>
      <Desc>
        Using a combination of cutting-edge technologies and reliable
        open-source software I build user-focused, performant apps and websites
        for smartphones, tablets, and desktops.
      </Desc>
      <Wrapper>
        {skillsData?.map((item, index) => (
          <Skill item={item} key={index} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Skills;
