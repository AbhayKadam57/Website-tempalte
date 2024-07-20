import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import HeroBanner from "../Components/HeroBanner";
import AboutUs from "../Components/AboutUs";
import OurServices from "../Components/OurServices";
import Testimonils from "../Components/Testimonils";
import Footer from "../Components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <HeroBanner />
      <AboutUs />
      <OurServices />
      <Testimonils />
      <Footer />
    </Container>
  );
};

export default HomePage;
