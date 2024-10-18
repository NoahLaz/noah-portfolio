import styled from "styled-components";
import { Text } from "../../ui/UI";
import Socials from "../../ui/Socials";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const handleBackground = (theme) => {
  return theme === "light" ? "./bg1.png" : "./bg2.png";
};

const Container = styled(motion.div)`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: ${(props) =>
    props.$bg === "light" ? "#38a5ff" : "#214199"};
`;

const MovingBackground = styled(motion.div)`
  width: 400vw;
  background-image: url(${(props) => handleBackground(props.$bg)});
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: repeat-x;
  background-size: auto 100%;
  z-index: 0;
`;

const Wrapper = styled.div`
  z-index: 1;
  max-width: 1000px;
  margin: auto;
  height: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const TextContainer = styled.div`
  z-index: 1;

  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 300px;
`;

const MotionContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 55px;
`;

const Name = styled.h3`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
`;
const JobTitle = styled(motion.h1)`
  font-size: 55px;
  font-weight: bold;
  color: ${(props) => props.theme.accent};
  white-space: nowrap;
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
`;
const Image = styled.img`
  overflow: hidden;
  background-size: cover;
  background-position: bottom;
  width: 400px;
  height: 400px;
  transform: scaleX(-1);
`;

const Button = styled.a`
  text-align: center;
  transition: all 0.5s ease;
  background-color: ${(props) => props.theme.accent};
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.secondary};
    color: black;
  }
`;

const Welcome = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      <Container $bg={theme}>
        <MovingBackground
          $bg={theme}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            x: {
              duration: 180,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            },
          }}
        />
        <Wrapper>
          <TextContainer>
            <Name>Hi, I am Noah</Name>
            <MotionContainer>
              <JobTitle
                initial={{ x: "0%" }}
                animate={{ x: "-300%" }}
                transition={{
                  x: {
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  },
                }}
              >
                Full Stack Developer / Front End Developer / Back End Developer
              </JobTitle>
            </MotionContainer>
            <Text>
              Passionate Full Stack Web Developer with a love for creating
              intuitive and dynamic web applications. Enthusiastic about coding,
              always eager to learn, and excited to contribute to impactful
              projects.
            </Text>
            <Socials />
            <Button type="button" href="#s2">
              Check My CV
            </Button>
          </TextContainer>
          <ImageContainer>
            <Image src="./person.png" />
          </ImageContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Welcome;
