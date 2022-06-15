import React, { useState } from "react";
import styled from "styled-components";
import reactlogo from "../../assets/imgs/react-logo.png";
import LanguageDropDown from "../languageSelector";

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 65px;
`;

const ReactLogo = styled.img`
  height: 60%;
`;

const HeaderNav = styled.div`
  display: flex;
  gap: 5px;
  ul {
    display: flex;
    gap: 20px;

    li {
      cursor: pointer;
      list-style: none;
    }
  }
`;

interface Props {
  language: "EN" | "PTBR";
}
function Header(props: Props) {
  const { language } = props;
  const translation = {
    projects: {
      EN: "Projects",
      PTBR: "Projetos",
    },
    contact: {
      EN: "Contact",
      PTBR: "Contato",
    },
    resume: {
      EN: "Resume",
      PTBR: "Currículo",
    },
    language: {
      EN: "English",
      PTBR: "Portugues",
    },
  };

  function LanguageSelector(key: "projects" | "contact" | "resume" | "language", language: "EN" | "PTBR") {
    return translation[key][language];
  }
  return (
    <Component>
      <ReactLogo src={reactlogo} alt="react-logo" />
      <HeaderNav>
        <ul>
          <li>{LanguageSelector("projects", language)}</li>
          <li>{LanguageSelector("contact", language)}</li>
          <li>{LanguageSelector("resume", language)}</li>
        </ul>
        <LanguageDropDown />
      </HeaderNav>
    </Component>
  );
}

export default Header;
