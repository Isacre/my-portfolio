import kanbandnd from "../../assets/imgs/kanbandnd.png";
import memememo from "../../assets/imgs/memememo.png";
import chiqdparis from "../../assets/imgs/chiqdparis.png";

export interface ProjectType {
  title: string;
  description: {
    PTBR: string;
    EN: string;
  };
  image: string;
  link: {
    github: string;
    netlify: string;
  };
  tech: string[];
}

export const Projects: ProjectType[] = [
  {
    title: "KanbanDND",
    description: {
      PTBR: "Um projeto de Kanban utilizando o Drag and Drop para organizar as tarefas.",
      EN: "A project of Kanban using Drag and Drop to organize tasks.",
    },
    image: kanbandnd,
    link: {
      github: "",
      netlify: "",
    },
    tech: ["React", "Redux", "Javascript", "Styled-components"],
  },
  {
    title: "ChiqDparis Store",
    description: {
      PTBR: "Projeto pessoal de um e-commerce para a loja ChiqDparis.",
      EN: "Personal project of an e-commerce for ChiqDparis.",
    },
    image: chiqdparis,
    link: {
      github: "",
      netlify: "",
    },
    tech: ["React", "Redux", "TypeScript", "Styled-components"],
  },
  {
    title: "MemeMemo",
    description: {
      PTBR: "Projeto pessoal de um jogo de memoria.",
      EN: "Personal project of a memory game",
    },
    image: memememo,
    link: {
      github: "",
      netlify: "",
    },
    tech: ["React", "Redux", "TypeScript", "Styled-components"],
  },
];
