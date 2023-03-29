import React, { useState, useEffect } from "react";
import {
  Card,
  CardWrapper,
  Container,
  CTop,
  Wrapper,
  Logo,
  CTopText,
  CTopTitle,
  Description,
  Shoes,
  ShoeOne,
  ShoeTwo,
} from "./styled";
import Brand from "./assets/logo.png";
import Shoe_1 from "./assets/nike-adapt-bb.png";
import Shoe_2 from "./assets/nike-air-red.png";
import CardBottomContent from "./Components/CardBottomContent";
import { useMotionValue, useTransform } from "framer-motion";
import Preloader from "./Components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentColor, setCurrentColor] = useState(1);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  useEffect(() => {
    // Simulate a delay to demonstrate the preloader
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // show animate
  const varients = {
    default: {
      translateX: 0,
      rotateZ: -45,
    },

    firstSHowAnimation: {
      translateX: -700,
      rotateZ: 45,
    },

    secondShowAnimation: {
      translateX: -400,
      rotateZ: -45,
    },
  };
  return (
    <>
    {loading ? (
        <Preloader />
      ) : (
     <Wrapper>
      <Container>
        <CardWrapper
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragElastic={0.2}
          whileTap={{ cursor: "grabbing" }}
        >
          <Card>
            <CTop currentColor={currentColor}>
              <Logo src={Brand} alt="logo" />
              <CTopText>
                <CTopTitle>TOPG NIKE</CTopTitle>
                <Description>
                  Nike is global brand which is one of most valueable brands in
                  the World. Nike is global brand which is one of most valueable
                </Description>
              </CTopText>
              <Shoes style={{ x, y, rotateX, rotateY, z: 100000 }}>
                <ShoeOne
                  src={Shoe_1}
                  alt="shoe-one"
                  className=""
                  animate={
                    currentColor === 2
                      ? varients.firstSHowAnimation
                      : varients.default
                  }
                  variants={varients}
                />
                <ShoeTwo
                  src={Shoe_2}
                  alt="shoe-two"
                  className=""
                  animate={
                    currentColor === 2
                      ? varients.secondShowAnimation
                      : varients.default
                  }
                  varients={varients}
                />
              </Shoes>
            </CTop>

            <CardBottomContent
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
          </Card>
        </CardWrapper>
      </Container>
    </Wrapper>
  )}
    </>
  );
};

export default App;
