import styled from "styled-components";
import { Container, Heading } from "../../ui/UI";
import Service from "./Service";

const Wrapper = styled.div``;

const CardWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-around;
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
    id: 3,
    icon: "fa-solid fa-server",
    title: "Backend Development",
    desc: "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.",
  },
];
const Services = () => {
  return (
    <Container>
      <Heading>Services</Heading>
      <Wrapper>
        <Title style={{ textAlign: "left" }}>What I Provide</Title>
        <CardWrapper>
          {data.map((item) => (
            <Service item={item} key={item.id} />
          ))}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default Services;
