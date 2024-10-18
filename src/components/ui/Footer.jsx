import styled from "styled-components";
import { Container } from "./UI";

const Section = styled.div`
  background-color: ${(props) => props.theme.primary};
`;
const Text = styled.span`
  font-size: 18px;
  color: white;
  text-align: center;
  width: 100%;
`;
const Footer = () => {
  return (
    <Section>
      <Container style={{ textAlign: "center", padding: "15px" }}>
        <Text>Made By Noah!</Text>
      </Container>
    </Section>
  );
};

export default Footer;
