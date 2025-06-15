// src/components/Bts.tsx

import Styled from 'styled-components';

const StyledScene = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    background: transparent;
`;

const StyledTitle = Styled.h1`
    text-align: center;
    color: #08415C;
    margin: 30px 10px;
    font-size: 3.2em;
    background: transparent;
`;

const StyledSubtitle = Styled.h3`
    text-align: center;
    color: #08415C;
    margin: 30px 10px 10px 10px;
    font-size: 1.2em;
    background: transparent;
`;

const StyledSubtitleEmoji = Styled.h3`
    text-align: center;
    color: #08415C;
    margin: 0px 10px 10px 10px;
    font-size: 1.2em;
`;

const StyledLetter = Styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    border: 1px solid #08415C;
`;

const StyledText = Styled.p`
    text-align: left;
    color: #08415C;
    margin: 30px 10px;
    padding: 0px 10px;
    font-size: .8em;
`;

const StyledCharacterContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
`;

const StyledCharacters = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const StyledCharacterImg = Styled.img`
    width: auto;
    height: 200px;
    margin: 0 3%;

    @media (max-width: 600px) {
        width: auto;
        height: 120px;
        margin: 0 3%;
    }
`;

const StyledCharacter = Styled.div`
    margin: 10px 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CharacterText = Styled.p`
    text-align: center;
    font-family: cursive;
    font-weight: bold;
    font-size: 1em;
    color: #08415C;
    margin-top: 10px;
    background: transparent;

    @media (max-width: 600px) {
        font-size: .7em;
    }
`;

const StyledBackgroundImg = Styled.img`
    width: 60px;
    height: auto;
    object-fit: cover;
    z-index: -1;
`;

export default function Bts() {
    return (
        <div style={{zIndex: 1}}>
            <StyledTitle>After Credits</StyledTitle>

            <StyledScene>
                <StyledSubtitle>Epilogue: The Scene</StyledSubtitle>
                <StyledBackgroundImg src='./hw5.jpg' alt='background' />
                <StyledText>
                    It's 2 a.m. <br />
                    We're... <br />
                    <span style={{marginLeft: '30px'}}>out drinking. <br /> </span>
                    <span style={{marginLeft: '30px'}}>out dancing. <br /> </span>
                    <span style={{marginLeft: '30px'}}>out just being creatures to the moon. <br /></span>
                    friends, strangers... all just company. <br />
                    <br />
                    the journey is undetermined <br />
                    and I tend to get lost <br />
                    in what could have beens. <br />
                    I call them my <span style={{fontStyle: 'italic'}}>midnight scenes. <br /></span>
                    <br />
                    <span style={{marginLeft: '30px'}}></span>are we going back home? <br />
                    finally reaching destination? <br />
                    <span style={{marginLeft: '30px'}}></span>and when we meet again, <br />
                    would the world have turned us back into distant minds? <br />
                    <br />
                    scared of being left alone with just <br />
                    <span style={{marginLeft: '50px'}}></span>me and my dreams, <br />
                    <span style={{marginLeft: '60px'}}></span>I ignited a conversation, <br />
                    <span style={{marginLeft: '70px'}}></span>an invitation <br />
                    <span style={{marginLeft: '80px'}}></span>for a midnight friendship service. <br />
                </StyledText>
            </StyledScene>

            <StyledCharacterContainer>
                <StyledSubtitle>The Characters</StyledSubtitle>
                <StyledCharacters>
                    <StyledCharacter>
                        <StyledCharacterImg src='./hw2.jpg' alt='background' />
                        <CharacterText>The Lawyers</CharacterText>
                    </StyledCharacter>
                    
                    <StyledCharacter>
                        <StyledCharacterImg src='./hw3.jpg' alt='background' />
                        <CharacterText>The Dreamers</CharacterText>
                    </StyledCharacter>

                    <StyledCharacter>
                        <StyledCharacterImg src='./hw4.jpg' alt='background' />
                        <CharacterText>The Architects</CharacterText>
                    </StyledCharacter>
                </StyledCharacters>
            </StyledCharacterContainer>

            <StyledSubtitle>Letter from the Author</StyledSubtitle>
            <StyledSubtitleEmoji>✉︎</StyledSubtitleEmoji>
            <StyledLetter>
                <StyledText>
                    for the boy who was scared of making friends just to lose them <br />
                </StyledText>
            </StyledLetter>
            
        </div>
    );
}