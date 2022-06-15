import React from "react";
import kanbandnd from "../../assets/imgs/kanbandnd.png";
import memememo from "../../assets/imgs/memememo.png";
import chiqdparis from "../../assets/imgs/chiqdparis.png";

export const Projects = [
  {
    title: "KanbanDND",
    description: {
      PTBR: "Um projeto de Kanban utilizando o Drag and Drop para organizar as tarefas.",
      EN: "A project of Kanban using Drag and Drop to organize tasks.",
    },
    image: kanbandnd,
    githublink: "",
    url: "",
    tech: ["React", "Redux", "Javascript", "Styled-components"],
  },
  {
    title: "ChiqDparis Store",
    description: {
      PTBR: "Projeto pessoal de um e-commerce para a loja ChiqDparis.",
      EN: "Personal project of an e-commerce for ChiqDparis.",
    },
    image: chiqdparis,
    githublink: "",
    url: "",
    tech: ["React", "Redux", "TypeScript", "Styled-components"],
  },
];
