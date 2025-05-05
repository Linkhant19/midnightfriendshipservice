// src/components/Credits.tsx

import Styled from 'styled-components';

const StyledCredits = Styled.img`
  width: 200px;
  height: auto;
  margin: 7% 0% 0% 0%;
`;

export default function Credits() {
  return (
    <StyledCredits src='./credits.jpg' alt='credits' />
  );
}