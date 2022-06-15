import React from "react";
import styled from "styled-components";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  gap: 10px;
  padding: 10px 0px;
`;
const Content = styled.div``;
const SectionTitle = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 40px;
`;

interface Props {
  title: string;
  children: React.ReactNode;
}
export default function Section(props: Props) {
  return (
    <Component>
      <SectionTitle>{props.title}</SectionTitle>
      <Content>{props.children}</Content>
    </Component>
  );
}
