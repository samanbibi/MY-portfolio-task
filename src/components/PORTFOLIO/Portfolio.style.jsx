import styled from "styled-components";
const PortfolioSection = styled.section`
  background-color: #0d0d0d;
  color: #fff;
  padding: 100px 8% 80px;

  @media (max-width: 768px) {
    padding: 60px 6% 60px;
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
    gap: 20px;
  }
`;

const Left = styled.div`
  flex: 1;

  p {
    color: #00ffae;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
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
  padding: 19px 2% 20px;
  color: #ccc;
  font-size: 16px;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    border-left: none;
    padding: 0;
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
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  background-color: ${({ alwaysGreen }) => (alwaysGreen ? "#09c75f" : "#111")};
  padding: 40px 50px;
  border-radius: 8px;
  color: #fff;
  flex: 1;
  min-width: 280px;
  max-width: 340px;
  transition: background-color 0.3s ease;
  text-align: center;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 30px;

    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  }

  h3 {
    font-size: 20px;
    margin-bottom: 12px;
    color: ${({ alwaysGreen }) => (alwaysGreen ? "#fff" : "#00ffae")};

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 14px;
    color: ${({ alwaysGreen }) => (alwaysGreen ? "#fff" : "#ccc")};
  }

  &:hover {
    background-color: #09c75f;

    h3,
    p {
      color: #fff;
    }
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 255, 174, 0.9);
  color: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
`;
const Divider = styled.div`
  width: 100%;
  height: 30px;
  margin: 60px 0 40px;
  box-shadow: 0 -20px 30px -10px rgba(0, 255, 174, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const Workingprogress = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    justify-content: center;
    gap: 10px;
  }
`;

const ProjectSliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  margin-top: 40px;
`;

const SliderInner = styled.div`
  display: flex;
  gap: 30px;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    gap: 20px;
  }
`;

const ProjectCard = styled.div`
  flex: 0 0 400px;
  background-color: #111;
  border-radius: 8px;
  padding: 25px;
  text-align: center;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 15px;
  }

  &:hover ${HoverOverlay} {
    opacity: 1;
  }

  @media (max-width: 480px) {
    flex: 0 0 300px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #00ffae;
  color: #00ffae;
  width: 55px;
  height: 45px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: #00ffae;
    color: #0d0d0d;
  }
`;

const Cliemttestimonial = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const TestimonialCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #111;
  padding: 30px;
  border-radius: 8px;
  max-width: 700px;
  margin: 0 auto;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #00ffae;
  }

  div {
    h4 {
      font-size: 18px;
      font-style: italic;
      margin-bottom: 10px;
      color: #ccc;
    }

    span {
      font-size: 16px;
      font-weight: bold;
      color: #00ffae;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    img {
      margin-bottom: 15px;
    }
  }
`;
const CircleList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
`;

const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: ${({ isActive }) =>
    isActive ? "3px solid #00ffcc" : "2px solid #444"};
  box-shadow: ${({ isActive }) =>
    isActive ? "0 0 20px rgba(0, 255, 204, 0.5)" : "none"};
  transition: 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Paymentoption = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  @media (max-width: 480px) {
    margin-top: 40px;
  }
`;

const PaymentTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const PaymentCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const PaymentCard = styled.div`
  background-color: ${({ alwaysGreen }) => (alwaysGreen ? "#09c75f" : "#111")};
  padding: 40px 50px;
  border-radius: 8px;
  color: #fff;
  flex: 1;
  min-width: 280px;
  max-width: 340px;
  text-align: center;
  transition: background-color 0.3s ease;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    object-fit: contain;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 8px;
    color: ${({ alwaysGreen }) => (alwaysGreen ? "#fff" : "#00ffae")};
  }

  h4 {
    font-size: 14px;
    color: #aaa;
    margin-bottom: 12px;
    font-weight: 500;
    line-height: 1.6;
  }

  h2 {
    margin-top: 40px;
    font-weight: bold;
    border-top: 1px solid #00ffae;
    padding-top: 20px;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: ${({ alwaysGreen }) => (alwaysGreen ? "#fff" : "#ccc")};
  }

  &:hover {
    background-color: #09c75f;

    h3,
    p,
    h4 {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 30px 24px;
  }

  @media (max-width: 480px) {
    padding: 24px 18px;

    h3 {
      font-size: 18px;
    }

    h4,
    p {
      font-size: 13px;
    }

    h2 {
      font-size: 16px;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center;     /* center vertically if needed */
  margin-top: 30px;
`;

const Button1 = styled.button`
  background: linear-gradient(135deg, #00ffae, #00c891);
  color: #0d0d0d;
  padding: 14px 28px;
  font-weight: 700;
  font-size: 13px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 255, 174, 0.35);
  margin-top: 70px;
   &:hover {
    background: linear-gradient(135deg, #00ffae, #00b885);
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 8px 24px rgba(0, 255, 174, 0.45);
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
const Button2 = styled.button`
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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const Newletter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding: 0 5%;
`;

const New = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #08d665;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  text-align: center;

  h2 {
    font-size: 36px;
    font-weight: 800;
    line-height: 1.4;

    span {
      color: #08d665;
    }

    @media (max-width: 768px) {
      font-size: 26px;
    }

    @media (max-width: 480px) {
      font-size: 22px;
    }
  }
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 20px;

  input {
    background: #32383a;
    padding: 14px 15px;
    border: 1px solid #22cd6f;
    border-radius: 5px;
    color: #fff;
    width: 300px;
    max-width: 100%;
  }

  a {
    background: #22cd6f;
    border-radius: 5px;
    padding: 15px 60px 15px 30px;
    color: #fff;
    text-transform: uppercase;
    border: 1px solid transparent;
    font-size: 15px;
    transition: 0.3s;
    text-decoration: none;
  }
`;

const Logo = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  filter: brightness(40);
  opacity: 0.3;

  img {
    max-width: 100px;
    height: auto;

    @media (max-width: 480px) {
      max-width: 70px;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  li {
    font-size: 15px;
    font-weight: bold;
    color: #ccc;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #08d665;
    }
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  text-align: center;
  padding: 0 10%;
  text-transform: uppercase;
  color: #474747;
  font-size: 12px;
  font-weight: bold;

  span {
    font-weight: bold;
    color: #08d665;
  }
`;
export { PortfolioSection,
  Top,
  Left,
  Right,
  Line,
  CardGrid,
  Card,
  HoverOverlay,
  Divider ,
  Workingprogress,
  ButtonGroup,
  ProjectSliderWrapper,
  SliderInner ,
  ProjectCard ,
  Cliemttestimonial,
  TestimonialCard,
  CircleList ,
  Circle,
  Paymentoption ,
  PaymentTop,
  PaymentCardGrid,
  PaymentCard,
  ButtonRow,Button1 ,IconBox ,Button2,ButtonWrapper,Newletter,New , Heading ,Form ,Logo ,NavLinks, Copyright  };
