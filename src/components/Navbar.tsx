import React, { useState } from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll/modules";
// import logoImage from "./path-to-your-logo-image.png";
import ConnectButtonImg from "../assets/Images/ConnectIcon.png";
import DiscordButton from "../assets/Images/Discord.png";
import TwitterButton from "../assets/Images/Twitter.png";
import Logo from "../assets/Images/Logo.svg";
import Arrow from "../assets/Images/Arrow.svg";
import 'typeface-montserrat';


const NavbarContainer = styled.div`
  ${tw`
    h-20
    w-[100%]
    fixed
    z-50
    `}
`;

const NavbarStyle = styled.div`
  ${tw`
    text-white
    uppercase
    flex
    items-center
    justify-between
    h-full
    text-base
    hover:cursor-pointer
    `}
`;

const LeftGroup = styled.div`
  ${tw`
    flex
    items-center
    ml-[3%]
  `}
`;

const CenterGroup = styled.div`
  ${tw`
    ml-[-14%]
  `}
`;

const RightGroup = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    px-4
    mr-[5%]
  `}
`;

const Button = styled.button`
  ${tw`
    w-40
    opacity-75  // Adjust the opacity value (0 to 100)
    hover:bg-pink-500
    hover:rounded-md
    font-light  // Adjust the font weight as needed
  `}
  font-family: 'Montserrat', sans-serif;
`;

const ConnectButton = styled.button`
  ${tw`
  w-40
    font-extrabold
    hover:rounded-md
  `}
`;

const ConnectButtonImage = styled.img`
  ${tw`
    w-[95%]
    h-10  
    mt-2
  `}
`;

const DiscordLink = styled.a`
  ${tw`
    cursor-pointer
    h-10  
  `}
  background-color: #7289da;  // Discord color
`;

const TwitterLink = styled.a`
  ${tw`
    cursor-pointer
    h-10  
  `}
  background-color: #1da1f2;  // Twitter color
`;

const IconContainer = styled.div`
  ${tw`
  cursor-pointer
  w-10
  h-10  
  mx-2
  mt-2
  `}
`;



export interface INavbarProps {

}

interface NavBarProps {
  accounts: string[]; // Adjust the type as needed
  setAccounts: React.Dispatch<React.SetStateAction<string[]>>; // Adjust the type as needed
  currentPage: string; // Adjust the type as needed
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>; // Adjust the type as needed
}

declare global {
  interface Window {
    ethereum?: any; // 'any' here is used for simplicity, replace it with a more specific type if available
  }
}

const NavBar: React.FC<NavBarProps> = ({ accounts, setAccounts, currentPage, setCurrentPage }) => {

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  const scrollToTop = () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <NavbarContainer>
        <NavbarStyle>
          <LeftGroup>
          <Button >
            <Link activeClass="active" to="mintpage" spy={true} smooth={true} offset={0} duration={500}>
              Mint
            </Link>
          </Button>

          <Button>
          <Link activeClass="active" to="page2" spy={true} smooth={true} offset={0} duration={500}>
            About
          </Link>
          </Button>

          <Button>
          <Link activeClass="active" to="page3" spy={true} smooth={true} offset={50} duration={500}>
            Team
          </Link>
          </Button>

          <Button>
          <Link activeClass="active" to="page4" spy={true} smooth={true} offset={50} duration={500}>
            FAQ
          </Link>
          </Button>
          </LeftGroup>

          <CenterGroup>
          <img src={Logo.src}/>
          </CenterGroup>
          
          <RightGroup>
          <ConnectButton onClick={connectAccount}>
            <ConnectButtonImage src={ConnectButtonImg.src} alt="Connect" />
          </ConnectButton>

          <IconContainer>
            <DiscordLink href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <img src={DiscordButton.src} alt="Discord" />
            </DiscordLink>
          </IconContainer>

          <IconContainer>
            <TwitterLink href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterButton.src} alt="Twitter" />
            </TwitterLink>
          </IconContainer>
          </RightGroup>
           

        </NavbarStyle>
      </NavbarContainer>

            {/* Scroll-to-top button */}
            <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '8%',
          left: '5%',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
        }}
      >
      <img src={Arrow.src} style={{ width: '50%', height: '50%' }} alt="Scroll to Top" />
      </button>
    </>
  );
};

export default NavBar;
