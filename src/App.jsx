import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import { ReviewContext } from "./Context/ReviewContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [testiMonials, setTestiMonils] = useState([]);

  return (
    <ReviewContext.Provider value={{ testiMonials, setTestiMonils }}>
      <Container>
        <HomePage />
      </Container>
    </ReviewContext.Provider>
  );
}

export default App;
