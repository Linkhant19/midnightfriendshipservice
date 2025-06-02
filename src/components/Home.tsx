// src/components/Header.tsx

import Styled from 'styled-components';

const StyledDiv = Styled.div`
  width: 100%;
`;

const StyledImg = Styled.img`
  width: 30%;
  

  @media (max-width: 600px) {
    width: 100%;

  }
`;

export default function Home() {
  return (
    <StyledDiv>
      <StyledImg src='./background.png' alt='main title' />
    </StyledDiv>
  );
}