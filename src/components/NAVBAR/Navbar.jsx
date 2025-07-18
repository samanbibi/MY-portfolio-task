import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import {Nav,
  LogoSection,
   NavLinks,
   RightIcons,
   MobileMenu,
   LogoText  } from "./Navbar.style"





const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <Nav>
       <LogoSection>
    <LogoText>SAMAN</LogoText>
  </LogoSection>

        <NavLinks>
        <li><a href="#home">HOME</a></li>
  <li><a href="#about">ABOUT</a></li>
  <li><a href="#experience">EXPERIENCE</a></li>
  <li><a href="#portfolio">PORTFOLIO</a></li>
        </NavLinks>

        <RightIcons>
          <div className="search">
            <FaSearch />
            <span>Search</span>
          </div>
          <div
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </RightIcons>
      </Nav>

      <MobileMenu isOpen={menuOpen}>
        <li onClick={() => setMenuOpen(false)}><li><a href="#home">HOME</a></li></li>
        <li onClick={() => setMenuOpen(false)}><li><a href="#about">ABOUT</a></li></li>
        <li onClick={() => setMenuOpen(false)}><li><a href="#experience">EXPERIENCE</a></li></li>
        <li onClick={() => setMenuOpen(false)}><li><a href="#portfolio">PORTFOLIO</a></li></li>
        
      </MobileMenu>
    </>
  );
};

export default Navbar;
