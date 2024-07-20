import React from "react";
import styled from "styled-components";
import Button from "../Ui Components/Button";
import { mobile } from "../utils/Responsive";
import { Bounce, Fade, Flip, Zoom } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      124deg,
      rgba(39, 13, 52, 0.575) 0%,
      rgba(45, 72, 134, 0.447) 100%
    ),
    url("/images/hero_ng.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 80vh;
`;

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  flex-direction: column;
  text-align: center;
  color: #ffffff;

  h1 {
    font-size: 50px;
    color: #ffffff;
    ${mobile({ fontSize: "32px" })}
  }
  p {
    font-size: 24px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    ${mobile({ fontSize: "14px" })}
  }
`;

function HeroBanner() {
  return (
    <Container>
      <CenterDiv>
        <Fade cascade damping={0.1} triggerOnce={false}>
          <h1>Welcome to</h1>
          <h1>
            THE BEST
            <span style={{ color: "#D07918", fontStyle: "italic" }}>
              {" "}
              NUMEROlLOGY
            </span>
          </h1>
        </Fade>

        <Fade damping={0.1} triggerOnce={false}>
          <p>
            Discover the hidden meaning behind numbers and how they influence
            your life. Unlock the secrets of your personal numerology and find
            insights into your destiny and personality.
          </p>
        </Fade>

        <Zoom damping={0.1} triggerOnce={false}>
          <Button text="Book Appointment" type="mobile" />
        </Zoom>
      </CenterDiv>
    </Container>
  );
}

export default HeroBanner;
