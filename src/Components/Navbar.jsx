import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faHamburger,
  faLocation,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../utils/Colors";
import Button from "../Ui Components/Button";
import { laptop, mobile, tablet } from "../utils/Responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.1);
  position: sticky;
`;

const NavContainer = styled.div`
  width: 80%;
  display: flex;

  height: 100%;
`;

const Links = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  ${tablet({ display: "none" })}
`;

const Logo = styled.div`
  width: 100%;
  height: 60px;
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  gap: 20px;
`;

const ContactDivLeft = styled.div`
  flex: 1;
`;

const ContactDivRight = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => (props.type === "mobile" ? "16px" : "1rem")};
`;

const HamBurger = styled.div`
  flex: 1;
  display: none;
  ${tablet({ display: "flex", alignItems: "center", justifyContent: "end" })}
`;

const SideMenu = styled.div`
  width: 80%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: ${(props) => (props.status === true ? "0" : "-100%")};
  z-index: 999;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);
  /* display: ${(props) => (props.status === true ? "flex" : "none")}; */
  flex-direction: column;
  padding: 20px;
  background-color: white;
  transition: right 0.5s linear;
`;

const SideMenuTop = styled.div`
  display: flex;
  justify-content: end;
`;

const SideMenuBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideMenuLinks = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

function Navbar() {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const handleOpenSideMenu = () => {
    setOpenSideMenu(!openSideMenu);
    console.log("clickend");
  };

  return (
    <Container>
      <NavContainer>
        <Logo>
          <img src="/images/logo.webp" />
        </Logo>
        <Links>
          <ContactDiv>
            <ContactDivLeft>
              <FontAwesomeIcon
                icon={faMapLocation}
                style={{ color: Colors.GRAY, fontSize: "2rem" }}
              />
            </ContactDivLeft>
            <ContactDivRight>
              <h4>Reach Us</h4>
              <p>601,Ram Nagar Niwas</p>
            </ContactDivRight>
          </ContactDiv>
        </Links>
        <Links>
          <ContactDiv>
            <ContactDivLeft>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: Colors.GRAY, fontSize: "2rem" }}
              />
            </ContactDivLeft>
            <ContactDivRight>
              <h4>Talk to Me</h4>
              <p>+91 123234567</p>
            </ContactDivRight>
          </ContactDiv>
        </Links>
        <Links>
          <Button text="Book Appointment" type="mobile" />
        </Links>
        <HamBurger>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: Colors.GRAY, fontSize: "2rem" }}
            onClick={handleOpenSideMenu}
          />
        </HamBurger>
      </NavContainer>
      <SideMenu status={openSideMenu}>
        <SideMenuTop>
          <FontAwesomeIcon
            icon={faClose}
            style={{ color: Colors.GRAY, fontSize: "2rem" }}
            onClick={handleOpenSideMenu}
          />
        </SideMenuTop>
        <SideMenuBottom>
          <SideMenuLinks>
            <ContactDiv>
              <ContactDivLeft>
                <FontAwesomeIcon
                  icon={faMapLocation}
                  style={{ color: Colors.GRAY, fontSize: "20px" }}
                />
              </ContactDivLeft>
              <ContactDivRight type={"mobile"}>
                <h4>Reach Us</h4>
                <p>601,Ram Nagar Niwas</p>
              </ContactDivRight>
            </ContactDiv>
          </SideMenuLinks>
          <SideMenuLinks>
            <ContactDiv>
              <ContactDivLeft>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: Colors.GRAY, fontSize: "20px" }}
                />
              </ContactDivLeft>
              <ContactDivRight type={"mobile"}>
                <h4>Talk to Me</h4>
                <p>+91 123234567</p>
              </ContactDivRight>
            </ContactDiv>
          </SideMenuLinks>
          <SideMenuLinks>
            <Button text="Book Appointment" type="mobile" />
          </SideMenuLinks>
        </SideMenuBottom>
      </SideMenu>
    </Container>
  );
}

export default Navbar;
