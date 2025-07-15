import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";



const Nav = styled.nav`
  width: 100%;
  padding: 20px 80px;
  position: fixed;
  top: 0;
  left: 0;
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  @media (max-width: 992px) {
    padding: 15px 40px;
  }

  @media (max-width: 768px) {
    padding: 15px 24px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 36px;

    @media (max-width: 480px) {
      height: 30px;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 28px;
  list-style: none;

  li {
    position: relative;
    font-size: 15px;
    font-weight: 500;
    color: #ccc;
    cursor: pointer;
    transition: color 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 0%;
      height: 2px;
      background-color: #00ffae;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  .search {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #ccc;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 20px;
    min-width: 160px;
    justify-content: center;
    transition: 0.3s ease;

    svg {
      color: #00ffae;
    }

    @media (max-width: 768px) {
      min-width: auto;
      padding: 6px 10px;
      span {
        display: none;
      }
    }
  }

  .menu-grid {
    font-size: 22px;
    color: #00ffae;
    cursor: pointer;
  }

  .hamburger {
    display: none;
    font-size: 22px;
    color: #00ffae;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const MobileMenu = styled.ul`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 20px;
    list-style: none;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: #0d0d0d;
    padding: 20px 30px;
    z-index: 999;

    li {
      font-size: 16px;
      font-weight: 500;
      color: #ccc;
      cursor: pointer;
      padding: 10px 0;
      border-bottom: 1px solid #1f1f1f;
    }

    li:last-child {
      border-bottom: none;
    }
  }
`;
const LogoText = styled.h1`
  font-size: 32px;
  font-weight: 900;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 4px;
  background: linear-gradient(90deg, #00ffae, #00c5a1, #00ffae);
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: shine 4s linear infinite;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 24px;
    letter-spacing: 2px;
  }

  @keyframes shine {
    0% { background-position: 0% }
    100% { background-position: 200% }
  }
`;



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
