// src/components/Header.tsx

import { useState } from 'react';
import Styled from 'styled-components';

const StyledDiv = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 30px auto;
`;

const FlipContainer = Styled.div<{ $flipped: boolean }>`
  width: 30%;
  height: auto;
  transition: transform .3s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.$flipped ? "translateY(-1%)" : "translateY(0%), rotateY(0deg), translateX(0%)")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledImg = Styled.img`
  width: 100%;
  backface-visibility: hidden;
`;

const StyledText = Styled.h1`
  text-align: center;
  color: #08415C;
  margin-top: 10px;
  font-size: 3em;
  transition: .2s ease-in;

  &:hover {
    color: #AAAAAA;
  }
`;

export default function Home() {
  const images = ['./cover3.png', './cover4.png', './cover2.png', './contents1.png'];
  const [index, setIndex] = useState(0);

  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(true); 
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length); 
      setFlipped(false);
    }, 100);
  };

  return (
    <StyledDiv>
      <FlipContainer $flipped={flipped}>
        <StyledImg src={images[index]} alt='main title' />
      </FlipContainer>
      <StyledText onClick={handleClick}>◉</StyledText>
    </StyledDiv>
  );
}


