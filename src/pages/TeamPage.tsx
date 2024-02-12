import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import TeamImg from "../assets/Images/Team.png";
import Team2Img from "../assets/Images/Team2.png";
import IconBG1 from "../assets/Images/ICONBG1.svg";

const PageThreeContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-screen
    items-center
    justify-center
  `}
  background-color: #1C002D;
`;

const TopImagesContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const TopImage = styled.img`
  width: 50%;
  height: auto;
`;

const CircleImage = styled.img`
  width: 5%;
  height: auto;
`;

const SvgImage = styled.img`
  width: 30%;
  height: auto;
  margin-top: 20px;
`;

const TeamImage = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 10px;
`;

const TeamName = styled.div`
  ${tw`
    text-lg
    text-white
    font-bold
    uppercase
  `}
`;

const TeamContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
  `}
`;

export interface IPageThreeProps {}

const PageThree: React.FunctionComponent<IPageThreeProps> = () => {
  return (
    <>
      {/* <PageThreeContainer id="page7">
        <TopImagesContainer>
          <TopImage src={Team2Img.src} alt="Team Image" />
          <CircleImage src={IconBG1.src} alt="Circle Image" />
        </TopImagesContainer>
        <SvgImage src="/path-to-your-images/ourTeam.svg" alt="Our Team SVG" />

        <TeamContainer>
          <TeamImage src="/path-to-your-images/Team.png" alt="Team Member Image" />
          <TeamName>Barry</TeamName>

          <TeamImage src="/path-to-your-images/Team.png" alt="Team Member Image" />
          <TeamName>Matt</TeamName>

          <TeamImage src="/path-to-your-images/Team.png" alt="Team Member Image" />
          <TeamName>Edu</TeamName>
        </TeamContainer>
      </PageThreeContainer> */}
    </>
  );
};

export default PageThree;
