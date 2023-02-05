import { useState } from "react";

//Import routing
import { Routes, Route } from "react-router-dom";

//Import UI
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";

//Import components
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Login from "./pages/Login";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px 90px;
`;

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container className="App">
        <Menu isDark={isDark} setIsDark={setIsDark} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/video">
                <Route path=":id" element={<Video />} />
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
