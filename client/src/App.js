import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";

//Import components
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: #181818;
`;

const Wrapper = styled.div``;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container className="App">
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
