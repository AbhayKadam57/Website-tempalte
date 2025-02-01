import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Colors from "../utils/Colors";
import { tablet } from "../utils/Responsive";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  ${tablet({ padding: "30px 0px" })}
  width:100%;
  flex-direction: column;
`;
const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 50px;
`;

const ThankSection = () => {
  return (
    <Container>
      <Content>
        <Fade damping={0.1} triggerOnce={false}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "15px",
              textAlign: "center",
            }}
          >
            <h1 style={{ marginBottom: "15px" }}>
              Trusted by
              <span style={{ color: Colors.PRIMARY }}> 500+ </span> Happy
              Clients
            </h1>
            <p>
              Our personalized Numerology and Vastu consultations have empowered
              over 500 individuals to achieve harmony and success in their
              lives. Join our growing family of satisfied clients and experience
              the transformative power of ancient wisdom tailored to your
              journey.
            </p>
          </div>
        </Fade>
      </Content>
    </Container>
  );
};

export default ThankSection;
