import React from "react";
import LandingPage from "@/pages/LandingPage";
import About from "@/pages/About";
import TeamPage from "@/pages/TeamPage";
import FAQPage from "@/pages/FAQPage";
import Partners from "@/pages/Partners";
import Navbar from "@/components/Navbar";
import GlobalStyles from "@/components/GlobalStyles";
export interface IindexProps {

}

const index: React.FunctionComponent<IindexProps> = () => {

    return(
       <>
       <GlobalStyles />
         <Navbar />
         <LandingPage />
         <About />
         <TeamPage />
         <Partners />
         <FAQPage />
       </>
    )
}

export default index
