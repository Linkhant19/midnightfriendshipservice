// src/components/PoemOne.tsx

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
    margin: 30px 0px 30px 15px;
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

const StyledStanzaTwo = Styled.p`
    text-align: right;
    color: #08415C;
    margin-bottom: 30px;
    font-size: .8em;
    font-weight: bold;
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

export default function PoemOne() {
    const cards = [
        {
            img: './cards/card0.png',
            alt: 'card0',
        },
        {
            img: './cards/card10.png',
            alt: 'card10',
        },
        {
            img: './cards/card13.png',
            alt: 'card11',
        },
    ]

    return (
        <StyledDiv>
            <StyledTitle>Distant Minds</StyledTitle>

            <StyledStanza>
                Took a deep breath at the door <br />
                I don’t know what I’m nervous for <br />
                But, this new world that I made a friend <br />
                reeks of something you won’t understand <br />
            </StyledStanza>

            <StyledStanza>
                Green light flashes, memories cross <br />
                all the fights we never resolved <br />
                But, that one dark night you took my hand <br />
                gave me the spirit to pretend <br />
            </StyledStanza>

            <StyledStanza>
                I’m… all… good <br />
                still past, still stranded <br />
                I never meant to <br />
                leave you just hanging <br />
            </StyledStanza>

            <StyledChorus>
                Oh my… my… my… <br />
                dear softest mind <br />
                your pandora worries seeping into your death dreams <br />
                slipped through your fingers but flowing right back into your life stream <br />
                if you would just let me in <br />
            </StyledChorus>

            <StyledStanzaTwo>
                I see you sighing at my door <br />
                hand on the handle, I count to four <br />
                still I need more time to breathe <br />
                remind myself of our friendship topology <br />
            </StyledStanzaTwo>

            <StyledStanzaTwo>
                two lost boys in one strange land <br />
                you cleared my shadows, I took your hand <br />
                but I guess for you it was easy to leave <br />
                till you knocked, still on my knees <br />
            </StyledStanzaTwo>

            <StyledStanzaTwo>
                But, I’m… all… good <br />
                dusted as you left me <br />
                I never meant to <br />
                leave you just standing <br />
            </StyledStanzaTwo>

            <StyledChorus style={{ fontWeight: 'bold' }}>
                Oh my… my… my… <br />
                dear careless mind <br />
                your Sedona friendship seeping into my night dreams <br />
                slipped through my fingers but coming right back into my life stream <br />
                if you would just let me in <br />
            </StyledChorus>

            <StyledChorus>
                So, if I could just ask <br />
            </StyledChorus>

            <StyledChorus style={{ fontWeight: 'bold' }}>
                If I could just ask... <br />
            </StyledChorus>

            <StyledStanza>
                How ripe is the heart <br />
                you surmised <br />
                you’d be marrying? <br />
            </StyledStanza>

            <StyledStanzaTwo>
                How heavy is the world <br />
                you pretend <br />
                you’ve been carrying? <br />
            </StyledStanzaTwo>

            <StyledStanza>
                How ripe is the heart <br />
                (Oh my) <br />
                you’ve been carrying? <br />
            </StyledStanza>

            <StyledStanzaTwo>
                How heavy is the world <br />
                (Oh my) <br />
                you’d be marrying? <br />
            </StyledStanzaTwo>

            <StyledChorus>
                Oh my <br />
                my dearest friend <br />
                my softest mind <br />
                like a careless child <br />
                come into me <br />
            </StyledChorus>

            <StyledChorus>
                Oh my… my… my… <br />
                (Oh my, oh my) <br />
                dear softest mind <br />
                your pandora worries seeping into your death dreams <br />
                slipped through your fingers but flowing right back into your life stream <br />
                the world is broken, still you’ve been carrying <br />
            </StyledChorus>

            <StyledChorus style={{ fontWeight: 'bold' }}>
                Oh my… my… my… <br />
                dear careless mind <br />
                your Sedona friendship seeping into my night dreams <br />
                slipped through my fingers but coming right back into my life stream <br />
                if you would just let me in <br />
            </StyledChorus>

            <StyledChorus>
                Just let me in <br />
            </StyledChorus>

            <StyledStanzaTwo>
                If I open the door in my mind <br />
                would you leave this time? <br />
            </StyledStanzaTwo>

            <StyledStanza>
                Just open your heart one more time <br />
                dear softest mind. <br />
            </StyledStanza>

            <Credits />

            <br />
            <br />
            <hr />

            <StyledSubtitle>Cards Collection for DISTANT MINDS</StyledSubtitle>
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
                <Link to="/poem2">&rarr; 2. Koreatown</Link>
                <Link to="/contents">&rarr; All Contents</Link>
            </StyledFootNav>
 
        </StyledDiv>
    );
}