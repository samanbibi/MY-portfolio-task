import React from "react";
import {
  ExperienceSection,
  Top ,
  Left,
  Right,
  Line,
  CardGrid,
  Card,SkillsProgress,
  SkillItem,
  CircleWrapper,
  CircleBase,
  CircleInner,
  SkillLabel 
}
from "./Experience.style";

const Experience = () => {
  return (
    <ExperienceSection id="experience">
  <Top>
    <Left>
      <p>MY EXPERIENCE</p>
      <h2>
        <Line>
          EXPERIENCE AND <span>SKILL</span>
        </Line>
      </h2>
    </Left>
    <Right>
      I bring a blend of creativity and technical expertise across frontend development, graphic design, and product marketing to build impactful digital experiences.
    </Right>
  </Top>

  <CardGrid>
    <Card>
      <h5>2024 – Present (FRONTEND DEVELOPER)</h5>
      <h3>DEVELOPERHUB CORPORATION</h3>
      <p>
        Building responsive, scalable, and visually appealing web interfaces using React, Tailwind CSS, and JavaScript with a focus on performance and user experience.
      </p>
    </Card>

    <Card>
      <h5>2022 – 2023 (GRAPHIC DESIGNER)</h5>
      <h3>FREELANCE & BRAND PROJECTS</h3>
      <p>
        Designed logos, banners, and social media graphics for clients across multiple industries using tools like Adobe Illustrator and Photoshop.
      </p>
    </Card>

    <Card>
      <h5>2023 – 2024 (PRODUCT MARKETING INTERN)</h5>
      <h3>SUMERA CARPET COMPANY</h3>
      <p>
        Assisted in creating marketing strategies, improving product visuals, and increasing brand reach through design-led digital campaigns and visual storytelling.
      </p>
    </Card>

    <Card>
      <h5>2024 – 2025 (UI DESIGN INTERN)</h5>
      <h3>ELEVATEME PROJECT</h3>
      <p>
        Worked on AI-integrated UI designs including face enhancement, background removal, and image upscaling features using modern web technologies.
      </p>
    </Card>
  </CardGrid>

  <SkillsProgress>
    <SkillItem>
      <CircleWrapper>
        <CircleBase percent={85}>
          <CircleInner>
            <span>85%</span>
          </CircleInner>
        </CircleBase>
      </CircleWrapper>
      <SkillLabel>FRONTEND DEVELOPMENT</SkillLabel>
    </SkillItem>

    <SkillItem>
      <CircleWrapper>
        <CircleBase percent={80}>
          <CircleInner>
            <span>80%</span>
          </CircleInner>
        </CircleBase>
      </CircleWrapper>
      <SkillLabel>GRAPHIC DESIGN</SkillLabel>
    </SkillItem>

    <SkillItem>
      <CircleWrapper>
        <CircleBase percent={75}>
          <CircleInner>
            <span>75%</span>
          </CircleInner>
        </CircleBase>
      </CircleWrapper>
      <SkillLabel>PRODUCT MARKETING</SkillLabel>
    </SkillItem>

    <SkillItem>
      <CircleWrapper>
        <CircleBase percent={70}>
          <CircleInner>
            <span>70%</span>
          </CircleInner>
        </CircleBase>
      </CircleWrapper>
      <SkillLabel>UI/UX DESIGN</SkillLabel>
    </SkillItem>
  </SkillsProgress>
</ExperienceSection>

  );
};

export default Experience;
