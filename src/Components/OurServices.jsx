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
  min-height: 200px;
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

const ServiceList = [
  {
    id: 1,
    icon: faSun,
    title: "Name Fixing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
  },
  {
    id: 2,
    icon: faMobile,
    title: "Mobile Number Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
  },
  {
    id: 3,
    icon: faComment,
    title: "Personal Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
  },
  {
    id: 4,
    icon: faBriefcase,
    title: "Business Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
  },
  {
    id: 5,
    icon: faBuilding,
    title: "Company Name Fixing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
  },
  {
    id: 6,
    icon: faSchool,
    title: "Career Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
  },
  {
    id: 7,
    icon: faRing,
    title: "Marriage Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
  },
  {
    id: 7,
    icon: faPersonBreastfeeding,
    title: "Pregnancy Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
  },
  {
    id: 7,
    icon: faBorderNone,
    title: "Loshu Grid Mastery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ut enim eu efficitur. Proin eget convallis nibh. In sodales imperdiet est, ac vestibulum nisl pulvinar vitae",
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
