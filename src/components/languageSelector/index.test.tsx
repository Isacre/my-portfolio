import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import LanguageSelector from "./index";
import "@testing-library/jest-dom";
import { renderutils } from "../../utils/testingutils";

describe("LanguageDropDown", () => {
  it("Should show an image for each language", () => {
    renderutils(<LanguageSelector />);
    const dropdown = screen.getByRole("img");
    expect(dropdown).toHaveAttribute("src");
  });
  it("Should Open and close the language selector on click", () => {
    renderutils(<LanguageSelector />);
    const dropdown = screen.getByTestId("dropdown");
    fireEvent.click(dropdown);
    const dropdownmenu = screen.getByTestId("dropdownmenu");
    expect(dropdownmenu).toBeInTheDocument();
    fireEvent.click(dropdown);
    expect(dropdownmenu).not.toBeInTheDocument();
  });
});
