import styled from "styled-components";
import { Container, Heading, Button } from "../../ui/UI";
import Service from "./Project";

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

const data = [
  {
    id: 1,
    icon: "fa-solid fa-code",
    title: "Front-End Developement",
    desc: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design user interface design authoring, including standardised code and proprietary software user experience design and search engine",
  },
  {
    id: 2,
    icon: "fa-brands fa-app-store-ios",
    title: "Mobile Application Development",
    desc: "This sections is still in developement, soon we will have dynamic list of all projects that I worked on. For now you can visit my Github.",
  },
  {
    id: 3,
    icon: "fa-solid fa-server",
    title: "Backend Development",
    desc: "This sections is still in developement, soon we will have dynamic list of all projects that I worked on. For now you can visit my Github.",
  },
  {
    id: 4,
    icon: "fa-solid fa-server",
    title: "Backend Development",
    desc: "This sections is still in developement, soon we will have dynamic list of all projects that I worked on. For now you can visit my Github.",
  },
];
const Projects = () => {
  return (
    <Container>
      <Heading>Projects</Heading>
      <Wrapper>
        <Title style={{ textAlign: "left" }}>Projects That I made</Title>
        <CardWrapper>
          {data.map((item) => (
            <Service item={item} key={item.id} />
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
