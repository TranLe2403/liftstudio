import { useState } from "react";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
`;

const Line = styled.div`
  height: 2px;
  width: 35px;
  background-color: ${props => props.colorButton};
  transition: all 0.2s ease;
  transform: ${props => {
    switch (props.position) {
      case "top":
        return props.open ? "rotate(45deg)" : "none";
      case "middle":
        return props.open ? "translateX(-16)" : "none";
      case "bottom":
        return props.open ? "translateX(-1px) rotate(-45deg)" : "none";
    }
  }};
  transform-origin: ${props => {
    if (props.position === "top" || props.position === "bottom") {
      return "top left";
    }
  }};
  opacity: ${props => {
    if (props.position === "middle") {
      return props.open ? 0 : 1;
    }
  }};
  margin-bottom: ${props => {
    if (props.position === "top") {
      return "10px";
    }
  }};
  margin-top: ${props => {
    if (props.position === "bottom") {
      return "10px";
    }
  }};
`;

export default function MenuButton({ open, color, onClick }) {
  const colorButton = color ? color : "#F1EBEB";
  return (
    <Button onClick={onClick}>
      <Line colorButton={colorButton} open={open} position="top" />
      <Line colorButton={colorButton} open={open} position="middle" />
      <Line colorButton={colorButton} open={open} position="bottom" />
    </Button>
  );
}
