import React from "react";
import styled from "styled-components";
import Colors from "../utils/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderNone,
  faBriefcase,
  faBuilding,
  faComment,
  faListNumeric,
  faMobile,
  faPersonBreastfeeding,
  faRing,
  faSchool,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { mobile, tablet } from "../utils/Responsive";
import { Fade, Hinge, Zoom } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 50px; */
  padding-top: 30px;
  padding-bottom: 80px;
  /* ${tablet({ padding: "100px 0px" })} */
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  gap: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
  gap: 20px;
  ${tablet({ gridTemplateColumns: "auto" })}
`;

const GridBox = styled.div`
  /* border: 1px solid red; */
  min-height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  padding: 30px;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s linear;

  div {
    display: flex;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

// const ServiceList = [
//   {
//     id: 1,
//     icon: faSun,
//     title: "Name Fixing",
//     desc: "Name fixing is a specialized service that involves analyzing and adjusting the spelling or composition of names to enhance their vibrational energy and alignment with an individual's personal and professional aspirations. By leveraging principles of numerology and other esoteric sciences, name fixing aims to improve fortune, success, and overall well-being.",
//   },
//   {
//     id: 2,
//     icon: faMobile,
//     title: "Mobile Number Consultation",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
//   },
//   {
//     id: 3,
//     icon: faComment,
//     title: "Personal Consultation",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
//   },
//   {
//     id: 4,
//     icon: faBriefcase,
//     title: "Business Consultation",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
//   },
//   {
//     id: 5,
//     icon: faBuilding,
//     title: "Company Name Fixing",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
//   },
//   {
//     id: 6,
//     icon: faSchool,
//     title: "Career Consultation",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
//   },
//   {
//     id: 7,
//     icon: faRing,
//     title: "Marriage Consultation",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
//   },
//   {
//     id: 7,
//     icon: faPersonBreastfeeding,
//     title: "Pregnancy Consultation",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
//   },
//   {
//     id: 7,
//     icon: faBorderNone,
//     title: "Loshu Grid Mastery",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
//   },
// ];

const ServiceList = [
  {
    id: 1,
    icon: faSun,
    title: "Name Fixing",
    desc: "Name fixing utilizes numerology to analyze and adjust your name, enhancing its vibrational energy to align with your personal and professional goals. This service aims to attract success, prosperity, and overall well-being.",
  },
  {
    id: 2,
    icon: faMobile,
    title: "Mobile Number Consultation",
    desc: "Mobile number consultation uses numerology to determine the most favorable mobile number for you. This service helps enhance your personal and professional communication, attracting positive interactions and opportunities.",
  },
  {
    id: 3,
    icon: faComment,
    title: "Personal Consultation",
    desc: "Personal consultation leverages numerology to provide tailored advice on various life aspects. This service helps you understand your strengths, overcome challenges, and make informed decisions to achieve your goals.",
  },
  {
    id: 4,
    icon: faBriefcase,
    title: "Business Consultation",
    desc: "Business consultation applies numerological principles to your business strategy. This service aims to improve business performance, attract prosperity, and ensure long-term success by aligning business activities with favorable numbers.",
  },
  {
    id: 5,
    icon: faBuilding,
    title: "Company Name Fixing",
    desc: "Company name fixing uses numerology to optimize your business name. This service helps enhance your brand's vibrational energy, attracting clients, boosting reputation, and fostering business growth.",
  },
  {
    id: 6,
    icon: faSchool,
    title: "Career Consultation",
    desc: "Career consultation employs numerology to guide your professional journey. This service helps identify the best career paths, advancement opportunities, and strategies for overcoming professional challenges.",
  },
  {
    id: 7,
    icon: faRing,
    title: "Marriage Consultation",
    desc: "Marriage consultation uses numerology to analyze relationship compatibility and harmony. This service provides insights to strengthen your marital bond, fostering a fulfilling and balanced partnership.",
  },
  {
    id: 8,
    icon: faPersonBreastfeeding,
    title: "Pregnancy Consultation",
    desc: "Pregnancy consultation applies numerological insights to support expectant mothers. This service aims to ensure a positive and harmonious pregnancy experience, promoting well-being for both mother and child.",
  },
  {
    id: 9,
    icon: faBorderNone,
    title: "Loshu Grid Mastery",
    desc: "Loshu Grid Mastery delves into the ancient numerological system of the Loshu Grid. This service helps you understand your personality and life path, achieving balance and personal growth through numerological insights.",
  },
];

function OurServices() {
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
            <h1>
              Our <span style={{ color: Colors.PRIMARY }}>Services</span>
            </h1>
            <p>
              Get Solutions for all your problems whether
              Financial,Personal,Professional
            </p>
          </div>
        </Fade>

        <Grid>
          {ServiceList &&
            ServiceList?.map((service, index) => (
              <Zoom>
                <GridBox key={index}>
                  <div>
                    <FontAwesomeIcon
                      icon={service.icon}
                      style={{ color: Colors.PRIMARY, fontSize: "4rem" }}
                    />
                  </div>
                  <h2 style={{ color: Colors.LIGHTBLACK }}>{service.title}</h2>
                  <p>{service.desc}</p>
                </GridBox>
              </Zoom>
            ))}
        </Grid>
      </Content>
    </Container>
  );
}

export default OurServices;
