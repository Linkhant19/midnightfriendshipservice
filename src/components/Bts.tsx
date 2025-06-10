// src/components/Bts.tsx

import Styled from 'styled-components';

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

const StyledText = Styled.p`
    text-align: left;
    color: #08415C;
    margin: 30px 10px;
    font-size: .8em;
`;

export default function Bts() {
    return (
        <>
            <StyledTitle>After Credits</StyledTitle>

            <StyledSubtitle>Epilogue: The Scene</StyledSubtitle>
            <StyledSubtitleEmoji>🎥</StyledSubtitleEmoji>
            <StyledText>
                It's 2 a.m. <br />
                We're... <br />
                out drinking. <br />
                out dancing. <br />
                out just being creatures to the moon. <br />
                friends, strangers... all just company. <br />
                <br />
                the journey is undetermined. <br />
                but I tend to get lost <br />
                in what could have beens. <br />
                I call them my midnight scenes. <br />
                <br />
                are we going back home? <br />
                finally reaching destination? <br />
                and when we meet again, <br />
                would the world have turned us into distant minds? <br />
                <br />
                scared of being left alone with just <br />
                me and my dreams, <br />
                I ignited a conversation, <br />
                an invitation <br />
                for a midnight friendship service. <br />
            </StyledText>

            <StyledSubtitle>Letter from the Author</StyledSubtitle>
            <StyledSubtitleEmoji>✉︎</StyledSubtitleEmoji>
            <StyledText>
                for the boy who was scared of making friends just to lose them <br />
            </StyledText>
        </>
    );
}