import React from "react";
import pic1 from "../../assets/pic1.jpg";
import{Aboutsection,
  Left,
   Right,
   Title ,
   Line,
   Description,
   ButtonRow,
   Button,
   IconBox,
   Divider} from "./About.style"




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
  <a
    href="/SAMAN_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <Button>
      PREVIEW CV
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
