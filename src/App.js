
import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";


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
