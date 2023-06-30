import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h2`
  color: #333;
  font-size: 36px;
  margin-bottom: 10px;
`;

const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  list-style: none;
`;

const ProjectItem = styled.li`
  background-color: #f1f1f1;
  padding: 20px;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Heading>Proyectos Destacados</Heading>
      <ProjectList>
        <ProjectItem>
          <ProjectLink href="https://joelsilvi.github.io/project/">
            Ruta 66
          </ProjectLink>
        </ProjectItem>
        <ProjectItem>
          <ProjectLink href="linkProject-2">Proyecto 2</ProjectLink>
        </ProjectItem>
        <ProjectItem>
          <ProjectLink href="linkProject-3">Proyecto 3</ProjectLink>
        </ProjectItem>
      </ProjectList>
    </ProjectsContainer>
  );
};
export default Projects;
