import React from "react";
import styled from "styled-components";
import { tablet } from "../utils/Responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faEnvelope, faMailReply } from "@fortawesome/free-solid-svg-icons";
import {
  faLetterboxd,
  faSquareLetterboxd,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  ${tablet({ padding: " 30px 0px" })}
  background-color:#222222;
  color: #ffffff;
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: start;
  justify-content: center;
  height: 100%;
  gap: 30px;
  ${tablet({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
const Logo = styled.div`
  width: 80px;
  height: 60px;
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

function Footer() {
  return (
    <Container>
      <Content>
        <Left>
          <Logo>
            <img src="/images/logo.webp" />
          </Logo>
          <h3>Follow us on</h3>
          <div style={{ display: "flex", alignItems: "cente", gap: "20px" }}>
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "28px" }} />
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "28px" }} />
            <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "28px" }} />
          </div>
          <small>&#169; Copyright 2024 by shital kadam</small>
        </Left>
        <Right>
          <h3>Contact Info</h3>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>kadamabhay40@gmail.com</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FontAwesomeIcon icon={faPhone} />
              <p>+91 7738259547</p>
            </div>
          </div>
        </Right>
      </Content>
    </Container>
  );
}

export default Footer;
