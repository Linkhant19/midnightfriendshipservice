// src/components/PoemSeven.tsx

import Styled from 'styled-components';
import Credits from './Credits';
import { Link } from 'react-router-dom';

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

const StyledTitle = Styled.h1`
    text-align: right;
    color: #08415C;
    margin: 30px 0px;
    font-size: 3.2em;
`;

const StyledSubtitle = Styled.h2`
    text-align: left;
    color: #08415C;
    margin: 30px 10px;
    font-size: 1.2em;
`;

const StyledStanza = Styled.p`
    text-align: left;
    color: #08415C;
    margin-bottom: 30px;
    font-size: .8em;
`;

const StyledChorus = Styled.p`
    text-align: middle;
    color: #08415C;
    margin-bottom: 30px;
    font-size: .8em;
`;

const CardCollection = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledCard = Styled.div`
    width: 200px;
    margin: 20px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

`;

const StyledImg = Styled.img`
    width: 100%;
    display: block;
`;

const StyledFootNav = Styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledSpan = Styled.span`
    font-size: .7em;
    font-style: italic;
    color: #777777;
`;

export default function PoemSeven() {
    const cards = [
        {
            img: './cards/card23.png',
            alt: 'card23',
        },
        {
            img: './cards/card14.png',
            alt: 'card14',
        }
    ]

    return (
        <StyledDiv>
            <StyledTitle> Alex </StyledTitle>

            <StyledChorus>
                I just want to get to know you, <br />
                I just want to get to know you a little bit better. <br />
                <br />
                ♫♪♫♪♫
            </StyledChorus>

            <StyledStanza>
                I got back home <br />
                just to travel to a daydream <br />
                where you showed up at my door <br />
                and tell me you felt it too <br />
                and say, “I just want to get to know you.” <br />
            </StyledStanza>

            <StyledStanza>
                I took my phone <br />
                wrote down a dream scene <br />
                where you took my hand <br />
                and I leaned into you <br />
                you whispered, “I just want to get to know you.” <br />
            </StyledStanza>

            <StyledStanza>
                Unfortunate… you got me reading into our friendship dialect <br />
                The truth is… I am just intrigued by your dreamy intellect <br />
            </StyledStanza>

            <StyledChorus>
                But, <br />
                I just want to get to know you, <br />
                I just want to get to know you a little bit better. <br />
                You occupy my mind and what-ifs <br />
                What are you doing here, Alex? <br />
                I wish I just knew you a little bit better. <br />
                <br />
                ♫♪♫♪♫
            </StyledChorus>

            <StyledStanza>
                If we meet again, <br />
                maybe I'll take my chance. <br />
                <br />
                If we speak again, <br />
                maybe I'll take my chance. <br />
                <br />
                If you’re reading this poem, <br />
                maybe you should let me know <br />
                <br />
                if my sources are a hoax <br />
                or if you entertain this show. <br />
                <br />
                Maybe I just like taking my friendships a little bit deeper. <br />
                Maybe I just have a thing for setting up <br />
                people I am interested in <br />
                with my friends. <br />
            </StyledStanza>

            <StyledChorus>
                I just want to get to know you, <br />
                I just want to get to know you, <br />
                I just want to get to know you a little bit better. <br />
                <br />
                I just want to get to know you, <br />
                I just want to get to know you a little bit better. <br />
                <br />
                ♫♪♫♪♫
            </StyledChorus>

            <StyledStanza>
                I got back home <br />
                I took my phone <br />
                wrote down a dream scene. <br />
            </StyledStanza>

            <StyledChorus>
                What are you doing here, Alex? <br />
            </StyledChorus>

            <Credits />

            <br />
            <br />
            <hr />

            <StyledSubtitle><StyledSpan>Cards Collection for: </StyledSpan>Alex</StyledSubtitle>
            <CardCollection>
                {cards.map((card) => (
                    <StyledCard key={card.alt}>
                        <StyledImg src={card.img} alt={card.alt} />
                    </StyledCard>
                ))}
            </CardCollection>

            <br />
            <br />
            <hr />

            <StyledFootNav>
                <Link to="/poem6" style={{textAlign: 'left'}}>&rarr; (Extra) 7. Swimming</Link>
                <Link to="/contents" style={{textAlign: 'right'}}>&rarr; All Contents</Link>
            </StyledFootNav>

        </StyledDiv>
  );
}