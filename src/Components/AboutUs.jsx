import React from "react";
import styled from "styled-components";
import { laptop, tablet } from "../utils/Responsive";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { width } from "@fortawesome/free-solid-svg-icons/faQuoteLeft";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding-top: 30px;
  padding-bottom: 80px;
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${tablet({ flexDirection: "column", gap: "20px" })}
  height:100%;
  gap: 30px;
`;

const Left = styled.div`
  flex: 1;
  div {
    width: 100%;
    height: 400px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80%;
      height: 100%;
      object-fit: cover;
      border-radius: 24px;
      /* object-position: 15% 30%; */
      ${tablet({ width: "100%" })}
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h3 {
    font-weight: 500;
  }

  h2 {
    font-size: 48px;
    ${tablet({ fontSize: "32px" })}
  }
`;

const AboutUsAnimation = styled.div`
  display: flex;
  flex-direction: row;
`;

const ArrowDiv = styled.div`
  height: 5px;
  width: 30px;
  background-color: black;
  position: relative;
  border-radius: 5px;
`;

const ArrowLine = styled.div`
  height: 1px;
  width: 60px;
  background-color: black;
  position: absolute;
  top: 50%;
`;

const AboutUs = () => {
  return (
    <Container>
      <Content>
        <Left>
          <Fade damping={0.1} triggerOnce={false}>
            <div>
              <img
                src="/images/Option_1.webp"
                // style={{ transform: "scaleX(-1)" }}
              />
            </div>
          </Fade>
        </Left>
        <Right>
          <Slide damping={0.1} triggerOnce={false} direction="right">
            <AboutUsAnimation>
              <h3>About me</h3>
              <ArrowDiv>
                <ArrowLine></ArrowLine>
              </ArrowDiv>
            </AboutUsAnimation>

            <div>
              <h2>We Are Welcome</h2>
              <div>
                <p>
                  My name is <strong> dr. sheiiral Patharre</strong> . I am a
                  <strong>
                    {" "}
                    doctor by profession with 7 years of clinical practice
                  </strong>
                  ,connected with corporate health organization as consultant
                  along with that I am following my passion as a{" "}
                  <strong>numerologist</strong> . In addition to my medical
                  career, I am also a{" "}
                  <strong>
                    {" "}
                    Numerologist, Motivational speaker, and Life coach
                  </strong>{" "}
                  .
                </p>
                <p>
                  My zeal and passion for <strong>spiritualism</strong> have
                  drawn me to the occult field, where my rational and holistic
                  approach to occult science sets me apart. As a Numerologist, I
                  strive to be a <strong> friend, philosopher</strong>, and
                  guide to those seeking insight and understanding.
                </p>
              </div>
              <h3>
                Contact Me:{" "}
                <span style={{ fontWeight: "bold" }}> 9619656755</span>{" "}
              </h3>
            </div>
          </Slide>
        </Right>
      </Content>
    </Container>
  );
};

export default AboutUs;
