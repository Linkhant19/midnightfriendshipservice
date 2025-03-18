import Styled from 'styled-components';

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
`;

const DivCol = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImg = Styled.img`
  width: 15vw;
  height: auto;
  margin: 1% 5%;
`;

const StyledTitle = Styled.img`
  width: 45%;
  height: auto;
  margin: 0% 0% 5% 0%;
`;

const StyledSubtitle = Styled.img`
  width: 25%;
  height: auto;
`;

export default function App() {
  return (
    <Wrapper>
      <StyledDiv>
        <StyledTitle src='./title.jpg' alt='main title' />
        <DivRow>
          <DivCol>
            <StyledImg src='./tortured_moon.jpg' alt='tortured moon' />
            <StyledSubtitle src='./poems_title.jpg' alt='poems title' />
          </DivCol>
          
          <DivCol>
            <StyledImg src='./three_ghosts.jpg' alt='three ghosts' />
            <StyledSubtitle src='./prologue_title.jpg' alt='prologue title' />
          </DivCol>
        </DivRow>
      </StyledDiv>
    </Wrapper>
  );
}
