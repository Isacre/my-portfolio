import React from "react";
import styled from "styled-components";
import { LanguageSelector } from "../../utils";

const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  margin-bottom: 10px;
  h1 {
    width: 500px;
  }

  p {
    font-weight: 300;
  }

  h2 {
    font-weight: 400;
  }
`;

type Props = {
  language: "PTBR" | "EN";
};
function Description(props: Props) {
  const { language } = props;
  const Content = {
    Introduction: {
      EN: "Hi, I'm Isaac",
      PTBR: "Oi, sou o Isaac",
    },
    About: {
      EN: "I love Front-End and develop websites for the web",
      PTBR: "Sou apaixonado por Front-End e desenvolvo para a web",
    },
    SubHeader: {
      EN: "A Professional that is always learning",
      PTBR: "Um profissional em constante aprendizado",
    },
  };
  return (
    <Text>
      <h2>{LanguageSelector(Content, "Introduction", language)}</h2>
      <h1>{LanguageSelector(Content, "About", language)}</h1>
      <p>{LanguageSelector(Content, "SubHeader", language)}</p>
    </Text>
  );
}

export default Description;
