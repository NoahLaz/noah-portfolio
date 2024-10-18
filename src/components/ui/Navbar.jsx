import styled from "styled-components";

import { icons } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: auto;
  height: 60px;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0px 1px 10px -5px ${(props) => props.theme.primary};
  z-index: 99;
`;
const Wrapper = styled.div`
  max-width: 1366px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;
const LogoContainer = styled.div``;

const Logo = styled.a`
  color: ${(props) => props.theme.text};
  font-size: 30px;
  font-weight: bold;
`;
const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;
const ListItem = styled.li`
  transition: all 0.5s ease;
  font-size: 18px;
  color: ${(props) => (props.$active ? "white" : props.theme.text)};
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? (props) => props.theme.accent : ""};

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;

const Link = styled.a``;

const ThemeButtonContainer = styled.div``;

const Icon = styled.i`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-size: 20px;
`;

const Navbar = ({ activeTab }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);

    window.scrollTo({
      top: section.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo href="#welcome">NL</Logo>
        </LogoContainer>
        <NavList>
          <ListItem $active={activeTab === "s1" ? true : false}>
            <Link onClick={(e) => handleScroll(e, "s1")} href="#s1">
              Home
            </Link>
          </ListItem>
          <ListItem $active={activeTab === "s2" ? true : false}>
            <Link onClick={(e) => handleScroll(e, "s2")} href="#s2">
              About
            </Link>
          </ListItem>
          <ListItem $active={activeTab === "s3" ? true : false}>
            <Link onClick={(e) => handleScroll(e, "s3")} href="#s3">
              Sevices
            </Link>
          </ListItem>
          <ListItem $active={activeTab === "s4" ? true : false}>
            <Link onClick={(e) => handleScroll(e, "s4")} href="#s4">
              Projects
            </Link>
          </ListItem>
          <ListItem $active={activeTab === "s5" ? true : false}>
            <Link onClick={(e) => handleScroll(e, "s5")} href="#s5">
              Contact
            </Link>
          </ListItem>
        </NavList>
        <ThemeButtonContainer>
          <Icon
            onClick={() => dispatch(toggleTheme())}
            className={theme === "light" ? icons.darkTheme : icons.lightTheme}
          ></Icon>
        </ThemeButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
