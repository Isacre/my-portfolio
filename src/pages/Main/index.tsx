import Header from "../../components/header";
import ProfilePicture from "../../assets/imgs/picture.png";
import githublogo from "../../assets/imgs/githubicon.png";
import linkedinlogo from "../../assets/imgs/linkedinicon.png";
import SocialMediaLink from "../../components/socialMediaLink";
import Section from "../../components/section";
import Project from "../../components/project";
import { Projects } from "../../data/projects";
import { ProjectType } from "../../data/projects";
import * as S from "./styles";
import { useAppSelector } from "../../store/hooks";

function MainPage() {
  const Language = useAppSelector((state) => state.language.data.language);
  return (
    <S.Component>
      <S.Content>
        <Header language={Language} />
        <S.AboutMe>
          <S.Photo src={ProfilePicture} alt="profile" />
          <S.Text>
            <h2>Oi, sou o Isaac</h2>
            <h1>Sou apaixonado por Front-End e desenvolvo para a web.</h1>
            <p>Um profissional em constante aprendizado </p>
          </S.Text>
          <S.SocialMediaContainer>
            <SocialMediaLink image={githublogo} link="https://github.com/Isacre" />
            <SocialMediaLink image={linkedinlogo} link="https://www.linkedin.com/in/isaac-alves-melo-319b45185/" />
          </S.SocialMediaContainer>
        </S.AboutMe>
        <Section title="Projetos">
          <S.ProjectsContainer>
            {Projects.map((project: ProjectType) => (
              <Project key={project.title} project={project} />
            ))}
          </S.ProjectsContainer>
        </Section>
      </S.Content>
    </S.Component>
  );
}

export default MainPage;
