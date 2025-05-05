// src/components/Header.tsx

import Styled from 'styled-components';

const StyledImg = Styled.img`
  width: 30%;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <StyledImg src='./background.png' alt='main title' />
    </div>
  );
}