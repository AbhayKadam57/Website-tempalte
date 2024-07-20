import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <HomePage />
    </Container>
  );
}

export default App;
