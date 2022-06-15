import React from "react";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import Header from "./index";
import "@testing-library/jest-dom";

describe("Header", () => {
  render(<Header language="PTBR" />);
  it("Should Render the logo", () => {
    const logo = screen.getByAltText("react-logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src");
  });
  it("Should display navbar in portuguese ", () => {
    render(<Header language="PTBR" />);
    const Projetos = screen.getByText("Projetos");
    const Contato = screen.getByText("Contato");
    const Curriculo = screen.getByText("Currículo");
    expect(Projetos).toBeInTheDocument();
    expect(Contato).toBeInTheDocument();
    expect(Curriculo).toBeInTheDocument();
  });
  it("Should display navbar in English ", () => {
    render(<Header language="EN" />);
    const Projects = screen.getByText("Projects");
    const Contact = screen.getByText("Contact");
    const Resume = screen.getByText("Resume");
    expect(Projects).toBeInTheDocument();
    expect(Contact).toBeInTheDocument();
    expect(Resume).toBeInTheDocument();
  });
});
