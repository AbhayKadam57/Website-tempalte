import React from "react";
import styled from "styled-components";
import { tablet } from "../utils/Responsive";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../utils/Colors";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons/faQuoteLeft";
import { Fade, Zoom } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  ${tablet({ padding: "30px 0px" })}
  width:100%;
  flex-direction: column;
`;

const ContentSlider = styled.div`
  width: 80%;

  .slick-arrow {
    z-index: 100;
    /* color: red; */
    position: absolute;
    top: 10px;
    background-color: red;
  }
`;

const TestimonialCard = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 400px;
  text-align: center;
  gap: 20px;
  padding: 30px;

  div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Arrow = ({ className, style, onClick, icon, type }) => (
  <FontAwesomeIcon
    icon={icon}
    onClick={onClick}
    style={{
      ...style,
      display: "block",
      background: "transparent",
      color: `${Colors.PRIMARY}`,
      position: "absolute",
      top: "50%",
      left: `${type === "left" && 0} `,
      right: `${type === "right" && 0} `,
      fontSize: "32px",
      cursor: "pointer",
    }}
  />
);

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  nextArrow: <Arrow icon={faChevronCircleRight} type="right" />,
  prevArrow: <Arrow icon={faChevronCircleLeft} type="left" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

function Testimonials() {
  return (
    <Container>
      <Fade style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "15px" }}>
          What Clients <span style={{ color: Colors.PRIMARY }}>Are Saying</span>
        </h1>
      </Fade>

      <ContentSlider>
        <Slider {...settings}>
          <Zoom>
            <TestimonialCard>
              <div>
                <img src="/images/my_image.jpg" alt="" />
              </div>
              <h2>Abhay Kadam</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultrices ut enim eu efficitur. Proin eget convallis
                nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar
                vitae
              </p>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: Colors.GRAY, fontSize: "3rem" }}
              />
            </TestimonialCard>
          </Zoom>
          <Zoom>
            <TestimonialCard>
              <div>
                <img src="/images/my_image.jpg" alt="" />
              </div>
              <h2>Abhay Kadam</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultrices ut enim eu efficitur. Proin eget convallis
                nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar
                vitae
              </p>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: Colors.GRAY, fontSize: "3rem" }}
              />
            </TestimonialCard>
          </Zoom>
          <Zoom>
            <TestimonialCard>
              <div>
                <img src="/images/my_image.jpg" alt="" />
              </div>
              <h2>Abhay Kadam</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultrices ut enim eu efficitur. Proin eget convallis
                nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar
                vitae
              </p>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: Colors.GRAY, fontSize: "3rem" }}
              />
            </TestimonialCard>
          </Zoom>
        </Slider>
      </ContentSlider>
    </Container>
  );
}

export default Testimonials;
