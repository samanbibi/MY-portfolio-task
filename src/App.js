
import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/NAVBAR/Navbar";
import Hero from "./components/HERO/Hero";
import About from "./components/ABOUT/About";
import Experience from "./components/EXPERIENCE/Experience";
import Portfolio from "./components/PORTFOLIO/Portfolio";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
    
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
      <Portfolio/>
    </>
  );
}

export default App;
