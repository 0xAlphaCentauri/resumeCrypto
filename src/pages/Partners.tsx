import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PartnersSVG from "../assets/Images/PartnersSVG.svg";
import PartnersLogoCloverful from "../assets/Images/PartnersLogoColorful.png";

const PartnersContainer = styled.div`
  ${tw`
    flex
    w-full
    h-screen
    items-center
    justify-center
  `}
  background-color: #1C002D;
`;

const PartnersStyle = styled.div`
  ${tw`
    text-9xl
    text-black
    flex
    flex-col
    items-center
    justify-center
    font-extrabold
    uppercase
    ml-7
  `}
  z-index: 1;
`;

const Image1 = styled.img`
  ${tw`
    mb-4
  `}
  width: 50%;
  height: 10%;
`;
const Image2 = styled.img`
  ${tw`
    mb-4
  `}
  width: 25%;
  height: 10%;
`;

export interface IPartnersProps {}

const Partners: React.FunctionComponent<IPartnersProps> = () => {
  return (
    <>
      <PartnersContainer id="page5">
        <PartnersStyle>
          <Image1 src={PartnersSVG.src} alt="Partners" />
          <Image2 src={PartnersLogoCloverful.src} alt="Partners" />
        </PartnersStyle>
      </PartnersContainer>
    </>
  );
};

export default Partners;
