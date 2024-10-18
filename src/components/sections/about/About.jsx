import styled from "styled-components";
import Educations from "./Educations/Educations";
import Experiences from "./Experiences/Expertiences";
import Skills from "./skills/Skills";
import { Container, Heading } from "../../ui/UI";
import { useEffect, useState } from "react";
import { child, get, ref } from "firebase/database";
import db from "../../../fireBase";
const Wrapper = styled.div``;

const SummaryWrapper = styled.div``;

const Summary = styled.p`
  color: ${(props) => props.theme.text};
  letter-spacing: 1px;
  font-size: 14px;
`;

const EduContainer = styled.div`
  gap: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  text-align: left;
  font-weight: bold;
  font-size: 22px;
  padding: 15px 0;
  color: ${(props) => props.theme.text};
`;

const About = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const dbRef = ref(db);
    try {
      const snapshot = await get(child(dbRef, `/`));
      if (snapshot.exists()) {
        setData(snapshot.val().about);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Heading>About Me</Heading>
      <Wrapper>
        <SummaryWrapper>
          <Title style={{ textAlign: "left" }}>Summary</Title>
          <Summary>{data?.summary}</Summary>
        </SummaryWrapper>
        <EduContainer>
          <Educations educationData={data?.education} />
          <Experiences experienceData={data?.experience} />
        </EduContainer>
        <Skills skillsData={data?.skills} />
      </Wrapper>
    </Container>
  );
};

export default About;
