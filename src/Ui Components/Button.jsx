import React from "react";
import styled from "styled-components";

const ButtonDiv = styled.button`
  background-color: #fb6f92;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
`;

function Button({ text, type }) {
  return (
    <ButtonDiv type={type}>
      <a href="https://wa.me/918369070266" target="_blank">
        {text}
      </a>
    </ButtonDiv>
  );
}

export default Button;
