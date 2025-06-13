// src/components/PoemThree.tsx

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

export default function PoemThree() {
    const cards = [
        {
            img: './cards/card6.png',
            alt: 'card6',
        },
        {
            img: './cards/card7.png',
            alt: 'card7',
        },
        {
            img: './cards/card8.png',
            alt: 'card8',
        },
        {
            img: './cards/card9.png',
            alt: 'card9',
        }
    ]

    return (
        <StyledDiv>
            <StyledTitle>The Midnight Friendship Service</StyledTitle>

            <StyledStanza>
                Moonlight <br />
                dripped on your hood <br />
                I remember my smile that brightened your look <br />
            </StyledStanza>

            <StyledStanza>
                You came <br />
                as with the clouds <br />
                Reminding myself this is where I am now <br />
            </StyledStanza>

            <StyledStanza>
                My blood is polluted in a different way <br />
                We’ve been half-dead, but who’s to say? <br />
            </StyledStanza>

            <StyledChorus>
                Midnights came to me <br />
                I’ve been down, pale, and transformed <br />
                Sunrise never seemed so far <br />
                when I’ve been sucking this blood blue <br />
                The truth is <br />
                I have never met someone like you <br />
                I have never met someone like you <br />
                I have never met someone… <br />
            </StyledChorus>

            <StyledStanza>
                In dark <br />
                we roamed the woods <br />
                A pack of suicidal kids in a quiet neighborhood <br />
            </StyledStanza>

            <StyledStanza>
                Two years <br />
                The curse is clear <br />
                We can’t ever meet in a daylight sphere <br />
            </StyledStanza>

            <StyledStanza>
                Coz my blood is polluted in a different way <br />
                The scars on my neck have stayed since that day <br />
            </StyledStanza>

            <StyledChorus>
                Midnights came to me <br />
                I’ve been down, pale, and transformed <br />
                Sunrise never seemed so far <br />
                when I’ve been sucking this blood blue <br />
                The truth is <br />
                I have never met someone like you <br />
                I have never met someone like you <br />
            </StyledChorus>

            <StyledChorus>
                With you, I dance where hope is, <br />
                pretending that tomorrow is promised. <br />
            </StyledChorus>

            <StyledChorus>
                So, come dressed in the sunset, taunting the blues <br />
                I have never met someone like you <br />
                I have never met someone like you <br />
                I… I… <br />
            </StyledChorus>

            <StyledStanza>
                I am taking you down with me <br />
                baby please <br />
            </StyledStanza>

            <StyledStanza>
                Don't dance this dance with me <br />
                I'm on my knees <br />
            </StyledStanza>

            <StyledStanza>
                I am taking you down with me <br />
                baby please <br />
            </StyledStanza>

            <StyledStanza>
                Don’t dance this dance with me <br />
                I’ve just been <br />
                on my knees <br />
                I don’t know <br />
                what to do <br />
                I don’t like where my mind is <br />
                I don’t like where it’s leading me to <br />
                Standing up on a cliffside <br />
                Wailing like a man wolf <br />
                Taunted with a step forward <br />
                Wondering where down leads to <br />
                But then you showed up <br />
                Holding me like you know me too… well <br />
            </StyledStanza>

            <StyledStanza>
                I screamed <br />
                I am taking you down with me <br />
                Please… please!!! <br />
            </StyledStanza>

            <StyledStanza>
                Don’t do this dance with me <br />
                I begged on my knees <br />
            </StyledStanza>

            <StyledStanza>
                Holding me whole, <br />
                You said, <br />
                “The truth is <br />
                if you can’t meet me at sunrise, <br />
                I will gladly provide <br />
                a midnight friendship service. <br />
                Coz the truth is <br />
                I’ve never met someone like you.” <br />
            </StyledStanza>

            <StyledChorus>
                Oh, I've never met someone like you <br />
                I have never met someone like you <br />
                I have never met... <br />
            </StyledChorus>

            <StyledStanza>
                Moonlight <br />
                dripped on your hood <br />
                I remember my smile that brightened your look <br />
            </StyledStanza>

            <StyledChorus>
                Come dressed in the sunset, taunting the blues <br />
                I have never met someone like you <br />
            </StyledChorus>

            <StyledChorus>
                With you, I dance where hope is, <br />
                pretending that tomorrow is promised. <br />
            </StyledChorus>

            <Credits />

            <br />
            <br />
            <hr />

            <StyledSubtitle><StyledSpan>Cards Collection for: </StyledSpan>The Midnight Friendship Service</StyledSubtitle>
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
                <Link to="/poem4" style={{textAlign: 'left'}}>&rarr; 4. The Laundromat</Link>
                <Link to="/contents" style={{textAlign: 'right'}}>&rarr; All Contents</Link>
            </StyledFootNav>

        </StyledDiv>
    );
}