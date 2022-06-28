import styled from "styled-components";

export const Component = styled.div`
  width: 100%;
  display: flex;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: auto;
  gap: 30px;
`;
export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  align-items: center;
`;
export const Photo = styled.img`
  width: 200px;
`;
export const Text = styled.div`
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
export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: fit-content;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
