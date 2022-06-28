import { useDispatch } from "react-redux";
import styled from "styled-components";
import BR_FLAG from "../../assets/imgs/BR_FLAG.webp";
import EUA_FLAG from "../../assets/imgs/EUA_FLAG.webp";
import useToggle from "../../hooks/useToggle";
import { useAppSelector } from "../../store/hooks";
import { changeLanguage } from "../../store/language";

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
  const dispatch = useDispatch();
  const [PickingLanguage, ToggleLanguageModal] = useToggle(false);
  const Language = useAppSelector((state) => state.language.data.language);
  const Languages = useAppSelector((state) => state.language.data.languages);

  function pickLanguage(language: typeof Language) {
    dispatch(changeLanguage(language));
    ToggleLanguageModal(false);
  }

  return (
    <Component onBlur={() => ToggleLanguageModal(false)}>
      <div data-testid="dropdown" onClick={() => ToggleLanguageModal(PickingLanguage)}>
        {Language === "PTBR" && <Flag src={BR_FLAG} alt="flag" />}
        {Language === "EN" && <Flag src={EUA_FLAG} alt="flag" />}
      </div>
      {PickingLanguage && (
        <Dropdown data-testid="dropdownmenu">
          {Languages.map((language) => {
            return (
              <label htmlFor="language-option" style={{ cursor: "pointer" }} key={language.key}>
                <LanguageOption id="language-option" onClick={() => pickLanguage(language.key)}>
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
