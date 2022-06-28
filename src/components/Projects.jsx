import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import AvatarImage1 from "../assets/AvatarImage1.jpg";
import AvatarImage2 from "../assets/AvatarImage2.jpg";

const Projects = () => {
  return (
    <YourProjects>
      <Project>
        <Avatar>
          <img src={AvatarImage1} />
        </Avatar>
        <Detail>
          <Title>Logo design for bakery</Title>
          <SubTitle>1 day remaining</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={AvatarImage2} />
        </Avatar>
        <Detail>
          <Title>Personal branding projects</Title>
          <SubTitle>5 days remaining</SubTitle>
        </Detail>
      </Project>
      <AllProjects>See all projects</AllProjects>
    </YourProjects>
  );
};

const YourProjects = styled.div`
  height: 70%;
  width: 29.5vw;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width:320px) and (max-width:1080px){
    width:75%;
    height:max-content;
    margin-top:1rem;
  }
`;
const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width:320px) and (max-width:1080px){
   font-size:1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default Projects;
