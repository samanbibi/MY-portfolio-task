import React, { useState } from "react";
import styled from "styled-components";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.png";
import pro1 from "../../assets/pro1.png";
import pro2 from "../../assets/pro2.png";
import pro3 from "../../assets/pro3.png";
import pro4 from "../../assets/pro4.png";
import pro5 from "../../assets/pro5.png";
import pro6 from "../../assets/pro6.png";
import tes from "../../assets/TEST1.jpg";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import l1 from "../../assets/01.png";
import l2 from "../../assets/02.png";
import l3 from "../../assets/03.png";
import Slider from "react-slick";
import { PortfolioSection,
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
  ButtonRow,
  Button1 ,
  IconBox ,
  Button2,ButtonWrapper,Newletter,New , Heading ,Form ,Logo ,NavLinks, Copyright  } from "./Portfolio.style";

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
      img: tes,
    },
    {
      name: "Sophia Lee",
      feedback: "Truly creative and professional. Loved the frontend work!",
      img: tes,
    },
    {
      name: "Aamir Raza",
      feedback: "Your designs helped boost our brand image noticeably.",
      img: tes,
    },
  ];

  return (
    <PortfolioSection id="portfolio">
      <Top>
        <Left>
          <p>WHAT I OFFER</p>
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
        <ButtonWrapper>
          <ButtonRow>
            <a href="/review-form" style={{ textDecoration: "none" }}>
              <Button2>
                LEAVE REVIEW
                <IconBox>➤</IconBox>
              </Button2>
            </a>
          </ButtonRow>
        </ButtonWrapper>
      </Cliemttestimonial>
      <Divider />
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      <Paymentoption>
        <PaymentTop>
          <Top>
            <Left>
              <p>HIGHLIGHTS</p>
              <h2>
                <Line>
                  WHY YOU SHOULD <span> CHOOSE ME</span>
                </Line>
              </h2>
            </Left>
            <Right>
              I deliver modern, responsive, and performance-optimized web
              experiences that turn ideas into elegant digital products.
            </Right>
          </Top>

          <PaymentCardGrid>
            <PaymentCard>
              <img src={pic2} alt="icon 1" />
              <h3>CREATIVE DESIGN</h3>
              <h4>Custom-built interfaces</h4>
              <h2>Pixel-perfect UI</h2>
              <ButtonRow>
                <Button1>
                  READ MORE
                  <IconBox>➤</IconBox>
                </Button1>
              </ButtonRow>
            </PaymentCard>

            <PaymentCard alwaysGreen>
              <img src={pic3} alt="icon 2" />
              <h3>CLIENT-FOCUSED</h3>
              <h4>Tailored to your vision</h4>
              <h2>Collaboration First</h2>

              <ButtonRow>
                <Button1>
                  READ MORE
                  <IconBox>➤</IconBox>
                </Button1>
              </ButtonRow>
            </PaymentCard>

            <PaymentCard>
              <img src={pic4} alt="icon 3" />
              <h3>ON-TIME DELIVERY</h3>
              <h4>Efficient & Transparent</h4>
              <h2>Every Time</h2>
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
