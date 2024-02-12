import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import tw from "twin.macro";
import monadianImage from "../assets/Images/Group 311.png";
import Team2Img from "../assets/Images/Team2.png";
import TeamImg from "../assets/Images/combinedImage.png";
import IconBG1 from "../assets/Images/ICONBG1.svg";
import OurTeam from "../assets/Images/OurTeamSVG.svg";
import AboutUs from "../assets/Images/LearnAboutUs.svg";
import BackgroundBlur from "../assets/Images/BackgroundBlur.png";

const GlobalStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${tw`theme[colors.purple.500]`};
    ${tw`antialiased`}
    font-family: 'Monarcha', sans-serif;
  }
`;

const AboutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #1C002D;
  z-index: 0; /* Ensure the background color has the same z-index as AdditionalImageContainer */
`;

const AboutStyle = styled.div`
  ${tw`
    text-4xl
    lg:text-7xl
    w-screen
    h-screen
    text-white
    flex
    flex-col
    lg:flex-row
    items-center
    justify-center
    text-center
    font-extrabold
  `}
    width: 80%;
`;

const PurpleText = styled.span`
  color: purple;
`;

const TextColumn = styled.div`
  width: 20%;
  position: absolute;
  z-index: 0;
  left: 5%;
  text-align: left;
  font-family: Montserrat;
  z-index:5;
`;

const TextColumn2 = styled.div`
  width: 25%;
  position: absolute;
  z-index: 0;
  left: 10%;
  top: 50%;
  text-align: left;
  font-size: small;
  font-family: Montserrat
  z-index:5;
`;

const ImageColumn = styled.div`
  width: 70%;
  position: relative;
  top: 0;
  left: 60%;
  transform: translateX(-30%);
  z-index:5;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  z-index:5;
`;

const PageThreeContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-[100%]
    h-screen
    items-center
    justify-center
    relative
  `}
  background-color: #1C002D;
  z-index: 0;
`;

const TopImagesContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
  z-index:5;
`;

const TopImage = styled.img`
  width: 50%;
  height: auto;
  top:0;
  margin-top: -15%;
  margin-left: 3rem;
  z-index:5;
`;

const CircleImage = styled.img`
  width: 5%;
  height: auto;
  z-index:5;
`;

const SvgImage = styled.img`
  width: 30%;
  height: auto;
  margin-top: 20px;
`;

const TeamImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the container height to 100% of the viewport height */
`;

const TeamImage = styled.img`
  width: 50%;
  height: auto;
  margin-bottom: 10px;
  z-index:5;
`;

const TeamName = styled.div`
  ${tw`
    text-lg
    text-white
    uppercase
  `}
  z-index:5;
`;

const TeamContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    items-center
    justify-center
  `}
    margin-left: 2rem;
    z-index:5;
`;
const TeamLabel = styled.div`
  ${tw`
    text-sm
  `}
  color: #f503b6;
`;
const TeamMember = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    m-4
  `}
`;

const AdditionalImageContainer = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;
`;

const AdditionalImage = styled.img`
width: 100%;
height: auto;
`;

export interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = () => {
  return (
    <>
      <GlobalStyles />
      <AboutContainer id="page2">
        <AboutStyle>
          <TextColumn>
            <img src={AboutUs.src} alt="LearnAboutUs" style={{ marginTop: '-50%', marginLeft: '25%' }} />
          </TextColumn>
          <TextColumn2>
            Welcome to Monadia, a mesmerizing and futuristic planet nestled in the far reaches of the cosmos. Monadia is a
            celestial haven, boasting a diverse ecosystem that supports the coexistence of several unique and intelligent
            species. The Monadians are the planet's dominant froglike species, known for their advanced intellect and
            remarkable technological prowess. Their quirky gadgets and inventions, combined with their casual, stylish
            appearance, are both practical and whimsical. The remaining species will remain secret until the mint. +Read
            More
          </TextColumn2>
          <ImageColumn>
            <Image src={monadianImage.src} alt="Monadian Image" />
          </ImageColumn>
        </AboutStyle>
      </AboutContainer>

      <PageThreeContainer id="page3">   

        <AdditionalImageContainer>
          <AdditionalImage src={BackgroundBlur.src} alt="Additional Image" />
        </AdditionalImageContainer>

        <TopImage src={Team2Img.src} alt="Team Image" />
        <br></br>
        <img src={OurTeam.src} alt="our team" style={{ width: '15%', height: '7%', marginLeft:"2rem"}} />
        <TopImagesContainer>
          <CircleImage src={IconBG1.src} alt="Circle Image" />
        </TopImagesContainer>

        <TeamContainer>
        <TeamMember>
          <TeamImage src={TeamImg.src} alt="Team Member Image" />
          <TeamName>Barry</TeamName>
          <TeamLabel>Founder</TeamLabel>
        </TeamMember>

        <TeamMember>
          <TeamImage src={TeamImg.src} alt="Team Member Image" />
          <TeamName>Matt</TeamName>
          <TeamLabel>Dev</TeamLabel>
        </TeamMember>

        <TeamMember>
          <TeamImage src={TeamImg.src} alt="Team Member Image" />
          <TeamName>Edu</TeamName>
          <TeamLabel>Advisor</TeamLabel>
        </TeamMember>
        </TeamContainer>

      </PageThreeContainer>
    </>
  );
};

export default About;
