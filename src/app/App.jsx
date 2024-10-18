import "../global.scss";

import Navbar from "../components/ui/Navbar";
import Welcome from "../components/sections/welcome/Welcome";
import About from "../components/sections/about/About";
import Services from "../components/sections/Services/Services";
import Projects from "../components/sections/projects/Projects";
import Contact from "../components/sections/contact/Contact";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/ui/Footer";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../themes/colors";
import { useSelector } from "react-redux";

const sections = [
  {
    id: "s1",
    label: "Welcome",
    component: <Welcome />,
  },
  {
    id: "s2",
    label: "About",
    component: <About />,
  },
  {
    id: "s3",
    label: "Services",
    component: <Services />,
  },
  {
    id: "s4",
    label: "Projects",
    component: <Projects />,
  },
  {
    id: "s5",
    label: "Contact",
    component: <Contact />,
  },
];

const Section = styled.section`
  background-color: ${(props) => props.theme.background};
`;

function App() {
  const theme = useSelector((state) => state.theme.theme);

  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Navbar activeTab={activeSection} />
      {sections.map((item, index) => (
        <Section
          id={item.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="section"
          key={item.id}
        >
          {item.component}
        </Section>
      ))}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
