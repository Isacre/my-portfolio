import React, { useState } from "react";
import styled from "styled-components";
import BR_FLAG from "../../assets/imgs/BR_FLAG.webp";
import EUA_FLAG from "../../assets/imgs/EUA_FLAG.webp";
import useToggle from "../../hooks/useToggle";

const Component = styled.div`
  position: relative;
`;
const Flag = styled.img`
  width: 30px;
  height: 21px;
  cursor: pointer;
`;
const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.4);
  width: 150px;
  height: fit-content;
  padding: 5px;
  right: 0;
`;

const LanguageOption = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

function LanguageDropDown() {
  const [Language, setLanguage] = useState("PTBR");
  const [PickingLanguage, ToggleLanguageModal] = useToggle(false);
  const Languages = [
    {
      name: "Portugues",
      flag: BR_FLAG,
      key: "PTBR",
    },
    {
      name: "English",
      flag: EUA_FLAG,
      key: "EN",
    },
  ];
  return (
    <Component>
      <div data-testid="dropdown" onClick={() => ToggleLanguageModal(PickingLanguage)}>
        {Language === "PTBR" && <Flag src={BR_FLAG} alt="flag" />}
        {Language === "EN" && <Flag src={EUA_FLAG} alt="flag" />}
      </div>
      {PickingLanguage && (
        <Dropdown data-testid="dropdownmenu">
          {Languages.map((language) => {
            return (
              <label htmlFor="language-option" style={{ cursor: "pointer" }} key={language.key}>
                <LanguageOption id="language-option" onClick={() => setLanguage(language.key)}>
                  <Flag src={language.flag} alt={language.key} />
                  <b>{language.name}</b>
                </LanguageOption>
              </label>
            );
          })}
        </Dropdown>
      )}
    </Component>
  );
}

export default LanguageDropDown;
