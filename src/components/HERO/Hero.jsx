import React from "react";
import Slider from "react-slick";
import author1 from "../../assets/author1.png";
import author2 from "../../assets/author2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {HeroWrapper,
  Slide,
   ContentWrapper,
   Left,
   Right,
   Title,
   Line,
   Description,
   ButtonRow,
   Button,
   IconBox} from "./Hero.style";


const SlideContent = ({ title1, title2, description, image }) => (
  <Slide>
    <ContentWrapper>
      <Left >
        <Title data-aos="fade-right" data-aos-delay="100">
          <Line>
            <span>{title1}</span> IS MORE
          </Line>
          <Line>{title2}</Line>
        </Title>
        <Description data-aos="fade-up" data-aos-delay="200">{description}</Description>
        <ButtonRow data-aos="zoom-in" data-aos-delay="400">
          <Button>
            GETTING STARTED
            <IconBox>➤</IconBox>
          </Button>
        </ButtonRow>
      </Left>
      <Right data-aos="fade-left" data-aos-delay="300">
        <img src={image} alt="Author" />
      </Right>
    </ContentWrapper>
  </Slide>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentSlide(index); 
    },
  };

  const slidesData = [
      {
        title1: "FRONTEND",
        title2: "CRAFTED WITH PRECISION",
        description: "I design and develop responsive, high-performance websites using React, JavaScript, HTML, CSS, and Tailwind CSS.",
        image: author1,
      },
      {
        title1: "GRAPHIC DESIGN",
        title2: "VISUALS THAT COMMUNICATE",
        description: "From logos to social media designs, I create visually compelling graphics that align with your brand identity and goals.",
        image: author2,
      },
    ];
    

  return (
    <HeroWrapper  id="home">
    
  <Slider {...settings}>
    {slidesData.map((slide, index) => (
      <div key={index}>
        {currentSlide === index && (
          <SlideContent
            key={`slide-${index}-${Date.now()}`}
            title1={slide.title1}
            title2={slide.title2}
            description={slide.description}
            image={slide.image}
          />
        )}
      </div>
    ))}
  </Slider>
</HeroWrapper>

  );
};


export default Hero;
