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

export {
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
};