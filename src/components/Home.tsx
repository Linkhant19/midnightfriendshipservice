// src/components/Header.tsx

import { useState } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 30px auto;
  z-index: 1;

  @media (max-width: 900px) {
    margin: 70px auto;
    width: 62%;
  }

  @media (max-width: 600px) {
    margin: 30px auto;
    width: 100%;
  }
`;

const StyledImg = Styled.img<{ $fade: boolean }>`
  width: 100%;
  height: auto;
  background-color: transparent;
  opacity: ${(props) => (props.$fade ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
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

const StyledBackgroundImg = Styled.img`
  position: fixed;
  top: 75%;
  left: 54%;
  width: 200px;
  height: auto;
  object-fit: cover;
  z-index: -1;

  @media (max-width: 900px) {
    left: 70%;
  }

  @media (max-width: 600px) {
    top: 80%;
    left: 54%;
  }
`;

export default function Home() {
  const images = ['./cover10.png', 'contents5.png', './cover8.png', './cover4.png', './cover13.png', './cover9.png', './cover12.png'];
  const [index, setIndex] = useState(0);

  const [fade, setFade] = useState(false);

  const handleClick = () => {
    setFade(true); 
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(false); 
    }, 250); 
  };

  return (
    <StyledDiv>
      <Link to='/contents' style={{ cursor: 'pointer' }}>
        <StyledImg src={images[index]} alt='main title' $fade={fade} />
      </Link>
      <StyledText onClick={handleClick} style={{ cursor: 'pointer' }}>◉</StyledText>

      <StyledBackgroundImg src='./hw1.jpg' alt='background' />
    </StyledDiv>
  );
}


