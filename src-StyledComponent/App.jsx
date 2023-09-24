// import MoonIcon from "./components/icons/MoonIcon";
import { styled, ThemeProvider } from "styled-components";
import MoonIcon from "./components/Icons/MoonIcon";
import SunIcon from "./components/Icons/SunIcon";
import Switch from "./components/Switch";
import { useState } from "react";

const StyledDiv = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${(props) => props.theme.body};
`;

const Title = styled.h1`
  margin: 1rem;
  color: ${(props) => props.theme.title};
`;

const Desc = styled.p`
  margin: 1rem;
  color: ${(props) => props.theme.desc};
`;

const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  desc: "#b6b6b6",
  icon: "#b6b6b6",
};

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  desc: "#333",
  icon: "#1c1c1c",
};

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledDiv>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} />
        <MoonIcon />
        <Title>Toggle Theme</Title>
          <Desc>Lib: Styled Componenets</Desc>
      </StyledDiv>
    </ThemeProvider>
  );
}

export default App;
