import React from "react";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";

const Component = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 100px;
  background-color: #eeeaea;
  box-shadow: inset 0px 0px 1px rgba(0, 0, 0, 0.2);
  padding: 2px;
  cursor: pointer;
`;

const InnerCircle = styled.div<any>`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 100px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8);
  transition: all 0.2s ease-in-out;
  transform: ${(props) => (props.value === true ? "translateX(20px)" : "translateX(0)")};
`;

const InnerText = styled.div`
  position: absolute;
  top: 0%;
`;

function Toggle() {
  const [languageToggle, toggleLanguage] = useToggle(false);
  return (
    <Component
      onClick={() => {
        toggleLanguage(languageToggle);
      }}
    >
      <InnerCircle value={languageToggle} />
      <InnerText>a</InnerText>
    </Component>
  );
}

export default Toggle;
