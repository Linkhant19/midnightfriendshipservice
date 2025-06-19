// src/components/PoemSix.tsx

import Styled from 'styled-components';
import Credits from './Credits';
import { Link } from 'react-router-dom';
import Form from './Form';

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

export default function PoemSix() {
    const cards = [
        {
            img: './cards/card3.png',
            alt: 'card3',
        },
        {
            img: './cards/card4.png',
            alt: 'card4',
        },
        {
            img: './cards/card19.png',
            alt: 'card19',
        }
    ]

    return (
        <StyledDiv>
            <StyledTitle> Swimming </StyledTitle>

            <StyledStanza>
                I don’t know what’s wrong <br />
                I just know it hurts <br />
                all began in small waves <br />
                now propagandizing drowning as a way of art. <br />
            </StyledStanza>

            <StyledChorus>
                How does everything come back rushing in <br />
                when I am alone in the water? <br />
                I could sink… but, right now, I am just swimming. <br />
                <br />
                ♫♪♫♪♫
            </StyledChorus>

            <StyledStanza>
                I feel like an invasive pest <br />
                in the place I call home. <br />
                This is where my heart is <br />
                but am I in love with someone <br />
                who wants me gone? <br />
                I don’t recognize this land anymore. <br />
            </StyledStanza>

            <StyledChorus>
                When did all my dreamings of just existing <br />
                become obsolete? <br />
                I could cry… but, right now, I am just swimming. <br />
                <br />
                ♫♪♫♪♫
            </StyledChorus>

            <StyledStanza>
                When it became clear <br />
                I was not welcome here <br />
                anymore <br />
                I looked back with tears <br />
                “Mother, <br />
                please take me back in!” <br />
                but instead, she shattered <br />
                the earth where she stood, <br />
                crumbling down <br />
                everything I used to call home. <br />
                I don’t recognize her anymore. <br />
            </StyledStanza>

            <StyledChorus>
                I could scream… but, right now, I am just swimming. <br />
            </StyledChorus>

            <StyledStanza>
                So, I turned to my friend <br />
                the only family I had <br />
                only one I trusted. <br />
                A few days later, <br />
                he said <br />
                my pain was overflowing onto him <br />
                and that we needed a break <br />
                oh………... how my heart ached <br />
                retracted my hand <br />
                reaching out for someone <br />
                above the surface. <br />
                If I can’t breathe, <br />
                just let me be. <br />
                I don’t recognize myself anymore. <br />
            </StyledStanza>

            <StyledChorus>
                How did I push a good friend into saying <br />
                he was losing love for me? <br />
                I could die… but, right now, I am just swimming. <br />
                <br />
                ♫♪♫♪♫
            </StyledChorus>

            <StyledStanza>
                I… <br />
                just… <br />
                want… <br />
                to… <br />
                live. <br />
                <br />
                ♫♪♫♪♫
            </StyledStanza>

            <StyledStanza>
                I… <br />
                just… <br />
                want… <br />
                to… <br />
                live. <br />
                <br />
                ♫♪♫♪♫
            </StyledStanza>

            <StyledStanza>
                through all these demands… <br />
                <br />
                They said I will be okay <br />
                as long as I stayed out of this institution. <br />
                <br />
                She said I will be okay <br />
                as long as I don’t come back to her land. <br />
                <br />
                He said we will be okay <br />
                as long as we stayed apart after graduation. <br />
                <br />
                Oh how the heart breaks <br />
                I felt it squeeze itself into a space <br />
                I don’t feel okay <br />
                but we are all… the mature ones <br />
                So, I pretend… to understand. <br />
                <br />
                all these demands… <br />
            </StyledStanza>

            <StyledStanza>
                I… <br />
                just… <br />
                want… <br />
                to… <br />
                live. <br />
                <br />
                ♫♪♫♪♫
            </StyledStanza>

            <StyledStanza>
                I… <br />
                just… <br />
                want… <br />
                to… <br />
                live. <br />
                <br />
                ♫♪♫♪♫
            </StyledStanza>

            <StyledChorus>
                How does everything come back rushing <br />
                when I am alone in the water? <br />
                I could die… but, right now, <br />
                this moment now, <br />
                I am just swimming. <br />
                <br />
                ♫♪♫♪♫
            </StyledChorus>

            <Credits />

            <br />
            <br />
            <hr />

            <StyledSubtitle><StyledSpan>Cards Collection for: </StyledSpan>Swimming</StyledSubtitle>
            <CardCollection>
                {cards.map((card) => (
                    <StyledCard key={card.alt}>
                        <StyledImg src={card.img} alt={card.alt} />
                    </StyledCard>
                ))}
            </CardCollection>

            <br />
            <br />

            <StyledSubtitle><StyledSpan>send a private message/comment:</StyledSpan></StyledSubtitle>
            <Form poem='Swimming'/>

            <br />
            <br />
            <hr />

            <StyledFootNav>
                <Link to="/bts" style={{textAlign: 'left'}}>&rarr; Epilogue</Link>
                <Link to="/contents" style={{textAlign: 'right'}}>&rarr; All Contents</Link>
            </StyledFootNav>

        </StyledDiv>
  );
}