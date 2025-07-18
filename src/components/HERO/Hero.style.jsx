import styled from "styled-components";

const HeroWrapper = styled.section`
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  background-color: #0d0d0d;
  color: #fff;
  background: linear-gradient(-45deg, #0d0d0d, #002f2f, #0d0d0d);
  background-size: 600% 600%;
  animation: gradientMove 20s ease infinite;

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }


  .slick-slider,
  .slick-list {
    overflow: hidden !important;
  }

  .slick-track {
    display: flex !important;
    max-width: 100vw !important;
    margin: 0 !important;
  }

  .slick-slide {
    padding: 0 !important;
    margin: 0 !important;
  }

  .slick-slide > div {
    width: 100vw !important;
  }

  .slick-dots {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    display: flex !important;
    flex-direction: column;
    gap: 12px;

    li button:before {
      font-size: 14px;
      color: #00ffae;
    }

    li.slick-active button:before {
      color: #fff;
    }
      

    @media (max-width: 480px) {
      right: 10px;
      gap: 8px;
    }
  }
`;

const Slide = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url("https://quomodosoft.com/html/glint/images/hero-bg.jpg")
    no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 60px;
  padding: 80px 40px 0;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
    padding: 40px 20px 0;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding: 30px 10px 0;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    img {
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 220px;
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 1.3;
  text-transform: uppercase;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 22px;
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
  max-width: 500px;
  font-size: 15px;
  color: #ccc;
  margin-bottom: 30px;
  border-left: 3px solid #00ffae;
  padding-left: 14px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    padding-left: 10px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
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
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
`;
export {HeroWrapper,
  Slide,
   ContentWrapper,
   Left,
   Right,
   Title,
   Line,
   Description,
   ButtonRow,
   Button,
   IconBox};