import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import FAQLogo from "../assets/Images/FAQLogo.svg";
import SwirlImage from "../assets/Images/SwirlImage.svg";
import BackgroundBlur from "../assets/Images/BackgroundBlur.png";
import Spaceship from "../assets/Images/Spaceship.png";
import MonadiansLogo from "../assets/Images/MonadiansLogoCirc.svg";
import BottomImage from "../assets/Images/BottomImage.png";

const PageFourContainer = styled.div`
  ${tw`
    flex
    w-full
    h-screen
    items-center
    justify-center
    relative
  `}
  z-index: 1;
  background-color: #1C002D; 
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${BackgroundBlur.src}), url(${BottomImage.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(100%); // Adjust the percentage value as needed
  }
`;

const PageFourStyle = styled.div`
  ${tw`
    w-screen
    h-screen
    text-black
    flex
    flex-col
    items-center
    justify-center
    text-center
    font-extrabold
    uppercase
  `}
`;

const FAQWrapper = styled.div`
  ${tw`
    flex
    justify-center
    items-start
    mt-8
  `}
`;

const FAQColumn = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    mx-4
  `}
`;

const FAQButton = styled.button`
  ${tw`
    mb-4
    p-2
    rounded-md
    hover:bg-gray-500
    text-white
  `}
  
    background-color: #503B60;
`;

const FAQContent = styled.div`
  ${tw`
    bg-gray-300
    p-4
    rounded-md
    opacity-80
    hidden
  `}
`;

const FAQLogoImage = styled.img`
  ${tw`
    mb-8
  `}
`;


const AdditionalImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const AdditionalImage = styled.img`
width: 100%;
height: auto;
`;

const SpaceshipImage = styled.img`
  ${tw`
    absolute
    bottom-0
    right-0
    mb-4
    mr-4
  `}
  width: 100px; /* Adjust the width as needed */
  height: auto;
`;

const PageFour: React.FunctionComponent = () => {
  const [isContentVisible1, setContentVisible1] = useState(false);
  const [isContentVisible2, setContentVisible2] = useState(false);

  const toggleContentVisibility = (faqNumber: number) => {
    if (faqNumber === 1) {
      setContentVisible1(!isContentVisible1);
      setContentVisible2(false);
    } else if (faqNumber === 2) {
      setContentVisible2(!isContentVisible2);
      setContentVisible1(false);
    }
  };

  return (
    <PageFourContainer id="page4">    
            <AdditionalImageContainer>
        </AdditionalImageContainer>    
      <PageFourStyle>
        <FAQLogoImage src={FAQLogo.src} alt="FAQ" />

        <FAQWrapper>
          <FAQColumn>
            <FAQButton onClick={() => toggleContentVisibility(1)}>Why yo momma like NFTs</FAQButton>
            <FAQContent style={{ display: isContentVisible1 ? "block" : "none" }}>
              Because I'm yo daddy
            </FAQContent>
          </FAQColumn>

          <FAQColumn>
            <FAQButton onClick={() => toggleContentVisibility(2)}>Money please?</FAQButton>
            <FAQContent style={{ display: isContentVisible2 ? "block" : "none" }}>
              yes
            </FAQContent>
          </FAQColumn>
        </FAQWrapper>
        <img src={Spaceship.src} alt="spaceship" style={{ marginRight: "-59.5rem", width: "50%"}} />
        <img src={MonadiansLogo.src} alt="swirl"  style={{ width: "5%" }} />
      </PageFourStyle>
    </PageFourContainer>
  );
};

export default PageFour;
