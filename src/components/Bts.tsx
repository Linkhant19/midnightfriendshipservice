// src/components/Bts.tsx

import Styled from 'styled-components';

const StyledScene = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    align-items: center;
`;

const StyledTitle = Styled.h1`
    text-align: center;
    color: #08415C;
    margin: 30px 10px;
    font-size: 3.2em;
`;

const StyledSubtitle = Styled.h3`
    text-align: center;
    color: #08415C;
    margin: 30px 10px 10px 10px;
    font-size: 1.2em;
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

export default function Bts() {
    return (
        <>
            <StyledTitle>After Credits</StyledTitle>

            <StyledScene>
                <StyledSubtitle>Epilogue: The Scene</StyledSubtitle>
                <StyledSubtitleEmoji>🎥</StyledSubtitleEmoji>
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
            

            <StyledSubtitle>Letter from the Author</StyledSubtitle>
            <StyledSubtitleEmoji>✉︎</StyledSubtitleEmoji>
            <StyledLetter>
                <StyledText>
                    for the boy who was scared of making friends just to lose them <br />
                </StyledText>
            </StyledLetter>
            
        </>
    );
}