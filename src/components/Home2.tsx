// src/components/Home2.tsx

import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = Styled.div`
  width: 70%;
  margin: 0 auto;
`;

const StyledDiv = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;

const DivRow = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  max-width: 80%;
`;

const DivCol = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImgMoon = Styled.img`
  width: 15vw;
  height: auto;
  margin: 1% 5%;

  &:hover {
    content: url('./tortured_moon_hover.jpg');
    cursor: pointer;
  }
`;

const StyledImgGhosts = Styled.img`
  width: 15vw;
  height: auto;
  margin: 1% 5%;

  content: url('./three_ghosts.jpg');

  &:hover {
    content: url('./three_ghosts_hover.jpg');
    cursor: pointer;
  }
`

const StyledTitle = Styled.img`
  width: 45%;
  height: auto;
  margin: 0% 0% 7% 0%;
`;

const StyledSubtitle = Styled.img`
  width: 27%;
  height: auto;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const StyledCredits = Styled.img`
  width: 20%;
  height: auto;
  margin: 7% 0% 0% 0%;
`;

export default function Home2() {
  return (
    <Wrapper>
      <StyledDiv>
        <StyledTitle src='./title.jpg' alt='main title' />
        <DivRow>
          <DivCol>
            <StyledImgMoon src='./tortured_moon.jpg' alt='tortured moon' />
            <StyledSubtitle src='./poems_title.jpg' alt='poems title' />
          </DivCol>
          
          <DivCol>
            <Link to='/cards'>
                <StyledImgGhosts alt='three ghosts' />
                <StyledSubtitle src='./prologue_title.jpg' alt='prologue title' />
            </Link>
          </DivCol>
        </DivRow>
        <StyledCredits src='./credits.jpg' alt='credits' />
      </StyledDiv>
    </Wrapper>
  );
}