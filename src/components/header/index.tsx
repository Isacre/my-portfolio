import styled from "styled-components";
import reactlogo from "../../assets/imgs/react-logo.png";
import LanguageDropDown from "../languageSelector";
import { LanguageSelector } from "../../utils";
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

  return (
    <Component>
      <ReactLogo src={reactlogo} alt="react-logo" />
      <HeaderNav>
        <ul>
          <li>{LanguageSelector(translation, "projects", language)}</li>
          <li>{LanguageSelector(translation, "contact", language)}</li>
          <li>{LanguageSelector(translation, "resume", language)}</li>
        </ul>
        <LanguageDropDown />
      </HeaderNav>
    </Component>
  );
}

export default Header;
