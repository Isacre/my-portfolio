import React, { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import ProfilePicture from "../../assets/imgs/picture.png";
import githublogo from "../../assets/imgs/githubicon.png";
import linkedinlogo from "../../assets/imgs/linkedinicon.png";
import SocialMediaLink from "../../components/socialMediaLink";
import Section from "../../components/section";
import Project from "../../components/project";

const Component = styled.div`
  width: 100%;
  display: flex;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: auto;
  gap: 30px;
`;
const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  align-items: center;
`;
const Photo = styled.img`
  width: 200px;
`;
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
const SocialMediaContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: fit-content;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
function MainPage() {
  const [Language, setLanguage] = useState<"EN" | "PTBR">("EN");
  const [Projects, setProjects] = useState([
    {
      name: "Project 1",
      description: "Project 1 description",
      link: {
        github: "dasdasdasd",
        netlify: "dsadasdasda",
      },
      image: "",
      technologies: [],
    },
    {
      name: "Project 1",
      description: "Project 1 description",
      link: {
        github: "dasdasdasd",
        netlify: "dsadasdasda",
      },
      image: "",
      technologies: [],
    },
    {
      name: "Project 1",
      description: "Project 1 description",
      link: {
        github: "dasdasdasd",
        netlify: "dsadasdasda",
      },
      image: "",
      technologies: [],
    },
    {
      name: "Project 1",
      description: "Project 1 description",
      link: {
        github: "dasdasdasd",
        netlify: "dsadasdasda",
      },
      image: "",
      technologies: [],
    },
    {
      name: "Project 1",
      description: "Project 1 description",
      link: {
        github: "dasdasdasd",
        netlify: "dsadasdasda",
      },
      image: "",
      technologies: [],
    },
    {
      name: "Project 1",
      description: "Project 1 description",
      link: {
        github: "dasdasdasd",
        netlify: "dsadasdasda",
      },
      image: "",
      technologies: [],
    },
  ]);
  return (
    <Component>
      <Content>
        <Header language={Language} />
        <AboutMe>
          <Photo src={ProfilePicture} alt="profile" />
          <Text>
            <h2>Oi, sou o Isaac</h2>
            <h1>Sou apaixonado por Front-End e desenvolvo para a web.</h1>
            <p>Um profissional em constante aprendizado </p>
          </Text>
          <SocialMediaContainer>
            <SocialMediaLink image={githublogo} link="https://github.com/Isacre" />
            <SocialMediaLink image={linkedinlogo} link="https://www.linkedin.com/in/isaac-alves-melo-319b45185/" />
          </SocialMediaContainer>
        </AboutMe>
        <Section title="Projetos">
          <ProjectsContainer>
            {Projects.map((project) => (
              <Project project={project} />
            ))}
          </ProjectsContainer>
        </Section>
      </Content>
    </Component>
  );
}

export default MainPage;
