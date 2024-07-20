import React from "react";
import styled from "styled-components";
import { laptop, tablet } from "../utils/Responsive";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

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
`;

const Left = styled.div`
  flex: 1;
  div {
    width: 100%;
    height: 400px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
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
              <img src="/images/my_image.png" />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ultrices ut enim eu efficitur. Proin eget convallis
                  nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar
                  vitae.{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ultrices ut enim eu efficitur. Proin eget convallis
                  nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar
                  vitae.{" "}
                </p>
              </div>
              <h3>
                Contact Me:
                <span style={{ fontWeight: "bold" }}>7738259547</span>{" "}
              </h3>
            </div>
          </Slide>
        </Right>
      </Content>
    </Container>
  );
};

export default AboutUs;
