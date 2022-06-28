import React from "react";
import styled from "styled-components";
import Earnings from "./Earnings";
import Navbar from "./Navbar";
import Info from "./Info";
import Projects from "./Projects";
import Invoices from "./Invoices";
import JoinSlack from "./JoinSlack";
import ProjectsRecommendations from "./ProjectsRecommendations";

const MainContent = () => {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Earnings />
            <Info />
          </ColumnOne1>
          <ColumnTwo1>
            <TitleText>Your Projects</TitleText>
            <Projects />
          </ColumnTwo1>
        </SectionOne>
        <SectionTwo>
          <ColumnOne2>
            <InvoicesContainer>
              <TitleText>Recent Invoices</TitleText>
              <Invoices />
            </InvoicesContainer>
            <JoinSlack />
          </ColumnOne2>
          <ColumnTwo2>
            <TitleText>Recommended Projects</TitleText>
            <ProjectsRecommendations />
          </ColumnTwo2>
        </SectionTwo>
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  background: linear-gradient(to bottom right, white 0%right, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    display: flex;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const TitleText = styled.h3`
  height: 20%;
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
const InvoicesContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;
const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default MainContent;
