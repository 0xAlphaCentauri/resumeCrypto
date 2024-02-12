import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import tw from "twin.macro"
import HeroBackground from "../assets/Images/HeroBackground.png";
import HeroIllustration from "../assets/Images/HeroIllustration.png";
import BottomGradient from "../assets/Images/BottomGradient.png";


const GlobalStyles = createGlobalStyle`
  @import url('https://use.typekit.net/eub7sqd.css');

  body {
    font-family: 'Monarcha', sans-serif;
  }
`;

const BackgroundWrapper = styled.div`
    ${tw`
    w-screen
    min-h-screen
    overflow-hidden
    `}
    height: 10%; // Adjust the height as needed
`;

const MintPageContainer = styled.div`
    ${tw`
    flex
    w-[100%]
    h-[100%]
    
    `}
    background-color: #1C002D;
    background-image: url(${HeroBackground.src});
    background-size: cover;  
    background-attachment: fixed;
    overflow-hidden
    max-width: 100%
`

const MintPageStyle = styled.div`
    ${tw`
    text-9xl
    w-screen
    h-screen
    text-black
    flex
    items-center
    justify-center
    text-center
    font-extrabold
    uppercase
    `}
`

const Image = styled.img`
  ${tw`
    absolute
    h-full
    w-full
    overflow-hidden
  `}
  left: 0;
  top: 0;
`;

const Gradient = styled.img`
  ${tw`
    absolute
    z-10
    w-full
    h-auto
    bottom-0
    max-h-64
    mb-[-20px]
    `}
`;

const TextContainer = styled.div`
  ${tw`
    absolute
    top-1/2
    left-3/4
    transform
    -translate-x-1/2
    -translate-y-1/2
    text-center
    text-white
    p-8
    rounded
    text-7xl
    backdrop-filter
    backdrop-blur-lg
  `}
  font-family: 'Montserrat', sans-serif;
`;

const PurpleText = styled.span`
  color: purple; // Set the color for specific text
`;

export interface IMintPageProps {

}

const MintPage: React.FunctionComponent<IMintPageProps> = () => {

    return(
       <>
       <GlobalStyles/>
        <MintPageContainer id="page1">
            <Image src={HeroIllustration.src} alt="Hero"/>
            <MintPageStyle>
                <TextContainer>PIONEERS IN THE <PurpleText>PARALLEL</PurpleText> PLANETARY <PurpleText>SYSTEM</PurpleText></TextContainer>
            </MintPageStyle>
            
            <Gradient src={BottomGradient.src}></Gradient>
        </MintPageContainer>
       </>
    )
}

export default MintPage
