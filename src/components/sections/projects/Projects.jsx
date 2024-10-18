import styled from "styled-components";
import { Container, Heading, Button } from "../../ui/UI";
import { useEffect, useState } from "react";
import { child, get, ref } from "firebase/database";
import db from "../../../fireBase";
import Project from "./Project";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h3`
  text-align: left;
  font-weight: bold;
  font-size: 22px;
  padding: 15px 0;
  color: ${(props) => props.theme.text};
`;

const Projects = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const dbRef = ref(db);
    try {
      const snapshot = await get(child(dbRef, `/`));
      if (snapshot.exists()) {
        setData(snapshot.val().projects);
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
      <Heading>Projects</Heading>
      <Wrapper>
        <Title style={{ textAlign: "left" }}>Projects That I made</Title>
        <CardWrapper>
          {data?.map((item) => (
            <Project project={item} key={item.id} />
          ))}
        </CardWrapper>
        <Button style={{ alignSelf: "center", marginTop: "50px" }}>
          Show More...
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Projects;
