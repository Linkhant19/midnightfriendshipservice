// src/components/PoemFive.tsx

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

export default function PoemFive() {
    const cards = [
        {
            img: './cards/card16.png',
            alt: 'card16',
        },
    ]

    return (
        <StyledDiv>
            <StyledTitle> The Pilot </StyledTitle>

            <StyledStanza>
                What do friends do <br />
                when friends fall in love? <br />
            </StyledStanza>

            <StyledStanza>
                I take my chances <br />
                only in the dark <br />
            </StyledStanza>

            <StyledStanza>
                Naturally, I would not dare pilot the plane through foreign terrain <br />
                But, you got me flying headfirst through this treacherous refrain <br />
            </StyledStanza>

            <StyledChorus>
                You got me... setting all my lights to dim, <br />
                tracing through blue dreams, <br />
                I am locking in <br />
                racing for your chest <br />
                gliding through my breath <br />
                taking this dream of us… <br />
                on a flight test <br />
                lever in my hand, I am coming in demand. <br />
            </StyledChorus>

            <StyledStanza>
                In a writing class, <br />
                where do we fly? What should I say? <br />
            </StyledStanza>

            <StyledStanza>
                I won’t make a show <br />
                but I’ll put you in one of my plays. <br />
            </StyledStanza>

            <StyledStanza>
                If you just let me know that you don’t hate me, <br />
                I’m down to trade my innocence for a cup of coffee. <br />
            </StyledStanza>

            <StyledChorus>
                You got me... setting all my lights to dim, <br />
                tracing through blue dreams, <br />
                I am locking in <br />
                racing for your chest <br />
                gliding through my breath <br />
                taking this dream of us… <br />
                oh on a flight test <br />
                lever in my hand, I am coming in demand. <br />
            </StyledChorus>

            <StyledStanza>
                I trace through the curves and soul, <br />
                dream of taking your universe <br />
                and swallowing it whole. <br />
                <br />
                I move in a tornado <br />
                building up to a cyclone <br />
                lever in my hand, <br />
                I could use a copilot… oh, you are in demand. <br />
            </StyledStanza>

            <StyledChorus>
                You got me... setting all my lights to dim, <br />
                tracing through blue dreams, <br />
                I am locking in <br />
                racing for your chest <br />
                gliding through my breath <br />
                taking this dream of us… <br />
                on a flight test <br />
                lever in my hand, I am coming...<br />
                Oh, I am coming... <br />
                I am coming in demand. <br />
            </StyledChorus>

            <StyledStanza>
                What do friends do? <br />
                ... <br />
                Friends fall in love. <br />
            </StyledStanza>

            <Credits />

            <br />
            <br />
            <hr />

            <StyledSubtitle><StyledSpan>Cards Collection for: </StyledSpan>The Pilot</StyledSubtitle>
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
                <Link to="/poem3" style={{textAlign: 'left'}}>&rarr; 3. The Midnight Friendship Service</Link>
                <Link to="/contents" style={{textAlign: 'right'}}>&rarr; All Contents</Link>
            </StyledFootNav>

        </StyledDiv>
  );
}