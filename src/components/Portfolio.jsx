import React, { useState } from 'react';
import styled from "styled-components";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";
import pro5 from "../assets/pro5.png";
import pro6 from "../assets/pro6.png";
import tes from "../assets/TEST1.jpg";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import l1 from "../assets/01.png";
import l2 from "../assets/02.png";
import l3 from "../assets/03.png";
import Slider from "react-slick";

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
  border: ${({ isActive }) => (isActive ? "3px solid #00ffcc" : "2px solid #444")};
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
  align-items: center;
  gap: 10px;
`;

const Button1 = styled.button`
  background-color: #00ffae;
  color: #0d0d0d;
  padding: 10px 30px;
  font-weight: bold;
  font-size: 13px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background 0.3s ease;
  margin-top: 70px;

  &:hover {
    background-color: #00e6a2;
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

const Portfolio = () => {
  const [projectIndex, setProjectIndex] = React.useState(0);
  const [blogIndex, setBlogIndex] = React.useState(0);
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const projectRef = React.useRef(null);
  const blogRef = React.useRef(null);

  const totalProjects = 6;
  const visibleProjectCards = 3;
  const maxProjectIndex = totalProjects - visibleProjectCards;

  const totalBlogs = 6;
  const visibleBlogCards = 3;
  const maxBlogIndex = totalBlogs - visibleBlogCards;

  const cardWidth = 430;
  const handleGenericSlide = (direction, currentIndex, setIndex, maxIndex) => {
    const next =
      direction === "left"
        ? currentIndex === 0
          ? maxIndex
          : currentIndex - 1
        : currentIndex === maxIndex
        ? 0
        : currentIndex + 1;

    setIndex(next);
  };
  React.useEffect(() => {
    if (projectRef.current) {
      projectRef.current.style.transform = `translateX(-${
        projectIndex * cardWidth
      }px)`;
    }
  }, [projectIndex]);

  React.useEffect(() => {
    if (blogRef.current) {
      blogRef.current.style.transform = `translateX(-${
        blogIndex * cardWidth
      }px)`;
    }
  }, [blogIndex]);

 

  // /////////////////////////////////////////////////////////////
  const projectData = [
    {
      img: pro1,
      title: "Portfolio Website",
    },
    {
      img: pro2,
      title: "Ecommerce Dashboard",
    },
    {
      img: pro3,
      title: "Landing Page",
    },
    {
      img: pro4,
      title: "Business Nexus",
    },
    {
      img: pro5,
      title: "AI Image Tool",
    },
    {
      img: pro6,
      title: "Graphic Design Showcase",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  //////////////////////////////////////////////////////////////
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Working with you was fantastic. The site exceeded our expectations.",
      img:tes,
    },
    {
      name: "Sophia Lee",
      feedback: "Truly creative and professional. Loved the frontend work!",
      img:tes,
    },
    {
      name: "Aamir Raza",
      feedback: "Your designs helped boost our brand image noticeably.",
      img:tes,
    },
  ];

  return (
    <PortfolioSection id="portfolio">
      <Top>
        <Left>
          <p>WHAT I DO</p>
          <h2>
            <Line>
              SERVICES <span>SOLUTIONS</span>
            </Line>
          </h2>
        </Left>
        <Right>
          I offer end-to-end solutions in frontend development, graphic design,
          and product marketing that help brands grow and connect with their
          audiences effectively.
        </Right>
      </Top>
      <CardGrid>
        <Card>
          <img src={pic2} alt="frontend icon" />
          <h3>FRONTEND DEVELOPMENT</h3>
          <p>
            Building modern, responsive websites using React, Tailwind CSS, and
            JavaScript to deliver seamless user experiences.
          </p>
        </Card>

        <Card alwaysGreen>
          <img src={pic3} alt="design icon" />
          <h3>GRAPHIC DESIGN</h3>
          <p>
            Creating professional logos, marketing banners, and visual assets
            that align with your brand identity and communicate clearly.
          </p>
        </Card>

        <Card>
          <img src={pic4} alt="marketing icon" />
          <h3>PRODUCT MARKETING</h3>
          <p>
            Enhancing product visibility and audience engagement through
            targeted campaigns, branding, and conversion-driven design.
          </p>
        </Card>
      </CardGrid>

      <Divider />
{/* ///////////////////////////////////////////////////////////////////////////// */}
      <Workingprogress>
        <Top>
          <Left>
            <p>WORKING PROGRESS</p>
            <h2>
              <Line>
                OUR LATEST <span>PROJECTS</span>
              </Line>
            </h2>
          </Left>
          <Right>
            Explore my most recent projects ranging from web development to
            creative design.
          </Right>
        </Top>

        <ProjectSliderWrapper>
          <Slider {...carouselSettings}>
            {projectData.map((project, idx) => (
              <ProjectCard key={idx}>
                <img src={project.img} alt={project.title} />
                <HoverOverlay>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </HoverOverlay>
              </ProjectCard>
            ))}
          </Slider>
        </ProjectSliderWrapper>
      </Workingprogress>
      <Divider />
{/* //////////////////////////////////////////////////////////////////////////// */}
      <Cliemttestimonial>
        <Top>
          <Left>
            <p>TESTIMONIAL</p>
            <h2>
              <Line>
                WHAT OUR <span>CLIENTS SAY</span>
              </Line>
            </h2>
          </Left>
          <Right>
            Click on a client to read their feedback and experience.
          </Right>
        </Top>

        <CircleList>
          {testimonials.map((client, index) => (
            <Circle
              key={index}
              onClick={() => setActiveIndex(index)}
              isActive={index === activeIndex}
            >
              <img src={client.img} alt={client.name} />
            </Circle>
          ))}
        </CircleList>

        <TestimonialCard>
          <h4>"{testimonials[activeIndex].feedback}"</h4>
          <span>— {testimonials[activeIndex].name}</span>
        </TestimonialCard>
      </Cliemttestimonial>
      <Divider />
{/* ////////////////////////////////////////////////////////////////////////////// */}
      <Paymentoption>
        <PaymentTop>
          <Top>
            <Left>
              <p>SPECIFICATION</p>
              <h2>
                <Line>
                  ALL OUR PAYMENT <span>OPTION</span>
                </Line>
              </h2>
            </Left>
            <Right>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint
              Ratione
            </Right>
          </Top>

          <PaymentCardGrid>
            <PaymentCard>
              <img src={pic2} alt="icon 1" />
              <h3>DESIGN PRINCIPLE</h3>
              <h4>For small investor</h4>
              <h2>104$</h2>
              <ButtonRow>
                <Button1>
                  READ MORE
                  <IconBox>➤</IconBox>
                </Button1>
              </ButtonRow>
            </PaymentCard>

            <PaymentCard alwaysGreen>
              <img src={pic3} alt="icon 2" />
              <h3>UNIQUE VALUES</h3>
              <h4>For medium investor</h4>
              <h2>104$</h2>

              <ButtonRow>
                <Button1>
                  READ MORE
                  <IconBox>➤</IconBox>
                </Button1>
              </ButtonRow>
            </PaymentCard>

            <PaymentCard>
              <img src={pic4} alt="icon 3" />
              <h3>STYLE COMPONENT</h3>
              <h4>For premium investor</h4>
              <h2>LETS CHART</h2>
              <ButtonRow>
                <Button1>
                  READ MORE
                  <IconBox>➤</IconBox>
                </Button1>
              </ButtonRow>
            </PaymentCard>
          </PaymentCardGrid>
        </PaymentTop>
      </Paymentoption>
      <Divider />
{/* ////////////////////////////////////////////////////////////////////////////////// */}
      <Newletter>
        <New>
          <p>NEWSLETTER</p>
        </New>
        <Heading>
          <h2>
            STAY UP TO DATE, SUBSCRIBE<br></br>TO THE FREE,
            <span>NEWSLETTER !</span>
          </h2>
        </Heading>
        <Form>
          <input type="email" placeholder="Enter Your Email.." />
          <a href="#" class="subscribe-btn">
            subscribe <i class="fal fa-comments-alt"></i>
          </a>
        </Form>
        <Logo>
          <img src={l1}></img>
          <img src={l2}></img>
          <img src={l3}></img>
          <img src={l1}></img>
          <img src={l2}></img>
        </Logo>
        <NavLinks>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICE</li>
          <li>PORTFOLIO</li>
          <li>PAGES</li>
        </NavLinks>
        <Copyright>
          <p>
            Copyright © 2019 by <span> QuomodoTheme </span> all right reserved
          </p>
        </Copyright>
      </Newletter>
    </PortfolioSection>
  );
};

export default Portfolio;
