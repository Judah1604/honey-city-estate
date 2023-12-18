import React from "react";
import HeroSection from "./HeroSection";
import Values from "./Values";
import Clients from "./Clients";
import Estate from "../components/Estate";

function Home() {
    return (
        <>
            <HeroSection />
            <Values />      
            <Estate />
            <Clients />
        </>
    );
}

export default Home;
