import React from "react";
import styled from "styled-components";
import webicon from "../../assets/imgs/web.webp";
import githubicon from "../../assets/imgs/githubicon.png";

const Component = styled.div`
  position: relative;
  width: calc(1000px / 3 - 15px);
  height: 200px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: grid;
  padding: 15px;
`;
const Content = styled.div`
  position: absolute;
  width: calc(1000px / 3 - 15px);
  height: 200px;
  background-color: rgba(206, 0, 0, 0.5);
  border-radius: 5px;
  display: grid;
  padding: 15px;
  opacity: 0%;
  transition: all 0.5s ease-in-out;
  :hover {
    opacity: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 5px;
  float: right;
  position: absolute;
  right: 10px;
  top: 10px;
  img {
    width: 20px;
    cursor: pointer;
    filter: invert(100%);
    :hover {
      transition: all 0.2s ease-in-out;
      filter: invert(0%);
    }
  }
`;
export default function Project(props: any) {
  return (
    <Component>
      <Content>
        <Links>
          <a target="_blank" href={props.project.link.github}>
            <img src={githubicon} alt={"git"} />
          </a>
          <a target="_blank" href={props.project.link.netlify}>
            {" "}
            <img src={webicon} alt={"web"} />
          </a>
        </Links>
      </Content>
    </Component>
  );
}
