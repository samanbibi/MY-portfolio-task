import React from "react";
import styled from "styled-components";
import pic1 from "../assets/pic1.jpg";

const Aboutsection = styled.section`
  background-color: #0d0d0d;
  color: #fff;
  padding: 100px 8% 80px;
  display: flex;
  align-items: center;
  justify-content: center;  
  gap: 60px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 6% 60px;
  }
`;


const Left = styled.div`
  position: relative;
  flex: 1;
  max-width: 500px;
  min-width: 280px;

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 8px;

    @media (max-width: 480px) {
      height: 300px;
    }
  }

  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #00ffae;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &::after {
      content: "▶";
      color: #fff;
      font-size: 20px;
      margin-left: 4px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Right = styled.div`
  flex: 1;
  max-width: 600px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;


const Title = styled.h2`
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  line-height: 1.4;

  span {
    color: #00ffae;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Line = styled.div`
  display: block;
  white-space: nowrap;
  text-align: left;

  span {
    color: #00ffae;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    white-space: normal;
    text-align: center;
  }
`;

const Description = styled.p`
  color: #ccc;
  font-size: 16px;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #00ffae, #00c891);
  color: #0d0d0d;
  padding: 14px 28px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 255, 174, 0.35);

  &:hover {
    background: linear-gradient(135deg, #00ffae, #00b885);
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 8px 24px rgba(0, 255, 174, 0.45);
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 12px 22px;
  }
`;



const IconBox = styled.div`
  background-color: #fff;
  color: #00ffae;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  transition: transform 0.3s ease;

  ${Button}:hover & {
    transform: rotate(45deg);
    box-shadow: 0 0 8px #00ffae;
  }
`;


const Divider = styled.div`
  width: 100%;
  height: 30px;
  margin: 20px 0;
  box-shadow: 0 -20px 30px -10px rgba(0, 255, 174, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const About = () => {
  return (
    <Aboutsection id="about">
      <Left>
        <img src={pic1} alt="About" />
        <div className="play-button" />
      </Left>
      <Right>
        <Title>
          <Line>DESIGNING INTERFACES THAT BRING</Line>
          <Line>
            <span>VISIONS TO LIFE</span>
          </Line>
        </Title>
        <Description>
          I'm a Frontend Developer with a passion for creating clean,
          responsive, and interactive web interfaces using React, HTML, CSS,
          JavaScript, and Tailwind CSS. I help businesses and individuals build
          a strong online presence with user-focused websites that not only look
          great but also perform flawlessly across all devices.
        </Description>
        <ButtonRow>
          <a href="/SAMAN_CV.pdf" download style={{ textDecoration: "none" }}>
            <Button>
              DOWNLOAD CV
              <IconBox>➤</IconBox>
            </Button>
          </a>
        </ButtonRow>
      </Right>
      <Divider />
    </Aboutsection>
  );
};

export default About;
