import styled from "styled-components";
import Socials from "../../ui/Socials";

import { Container, Heading, Button, Text } from "../../ui/UI";

const ContentContainer = styled.div`
  color: ${(props) => props.theme.text};
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h3`
  color: ${(props) => props.theme.text};

  text-align: left;
  font-weight: bold;
  font-size: 22px;
  padding: 15px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  gap: 20px;
`;
const Credentials = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 45px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label``;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.accent};
  width: 100%;
  min-width: 300px;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  font-size: 16px;
  color: ${(props) => props.theme.text};
  letter-spacing: 1px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.accent};
  width: 100%;
  min-width: 300px;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  font-size: 16px;
  color: ${(props) => props.theme.text};
  letter-spacing: 1px;
`;

const DataGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
`;
const CredLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const CredValue = styled.span`
  color: ${(props) => props.theme.accent};
  letter-spacing: 1px;
`;
const Email = styled.a`
  color: ${(props) => props.theme.accent};
  letter-spacing: 1px;
`;

const Contact = () => {
  return (
    <Container>
      <Heading>Contact</Heading>
      <TextContainer>
        <Header>Do you Have a Question?</Header>
        <Text>Feel free to contact me if you have any inquiries!</Text>
      </TextContainer>
      <ContentContainer>
        <Form>
          <InputGroup>
            <Label htmlFor="name">Name:</Label>
            <Input type="text" id="name" name="name" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="message">Message:</Label>
            <TextArea id="message" name="message" required />
          </InputGroup>
          <Button type="submit">Submit</Button>
        </Form>
        <Credentials>
          <DataGroup>
            <CredLabel>Email</CredLabel>
            <CredValue>
              <Email href="mailto:nouh.salama@gmail.com">
                nouh.salama@gmail.com
              </Email>
            </CredValue>
          </DataGroup>
          <DataGroup>
            <CredLabel>Address</CredLabel>
            <CredValue>London, United Kindom</CredValue>
          </DataGroup>
          <DataGroup>
            <CredLabel>Socials</CredLabel>
            <CredValue>
              <Socials />
            </CredValue>
          </DataGroup>
        </Credentials>
      </ContentContainer>
    </Container>
  );
};

export default Contact;
