import React from "react";
import styled from "styled-components";

const ExperienceSection = styled.section`
  background-color: #0d0d0d;
  color: #fff;
  padding: 20px 8% 10px;  /* 🔽 Reduced from 100px 8% 80px */

  @media (max-width: 768px) {
    padding: 10px 6% 10px;  /* 🔽 Reduced mobile gap */
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;

  p {
    color: #00ffae;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 36px;
    font-weight: 800;
    margin-top: 10px;

    span {
      color: #00ffae;
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  border-left: 3px solid #00ffae;
  padding: 20px;
  color: #ccc;
  font-size: 16px;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    border-left: none;
    border-top: 3px solid #00ffae;
    padding-top: 20px;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #111;
  padding: 24px;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background: #151515;
  }

  h5 {
    color: #999;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  h3 {
    color: #00ffae;
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #ccc;
    line-height: 1.6;
  }
`;

const SkillsProgress = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 60px;
  gap: 30px;
`;

const SkillItem = styled.div`
  flex: 1 1 180px;
  max-width: 220px;
  text-align: center;
  color: #fff;
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const CircleBase = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    #00ffae ${({ percent }) => percent}%,
    #ffffff ${({ percent }) => percent}% 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleInner = styled.div`
  width: 85%;
  height: 85%;
  background: #0d0d0d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

const SkillLabel = styled.div`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

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
