// src/components/PoemTwo.tsx

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

export default function PoemTwo() {
    const cards = [
        {
            img: './cards/card5.png',
            alt: 'card5',
        },
        {
            img: './cards/card11.png',
            alt: 'card11',
        },
        {
            img: './cards/card12.png',
            alt: 'card12',
        },
        {
            img: './cards/card21.png',
            alt: 'card21',
        },
    ]

    return (
        <StyledDiv>
            <StyledTitle> Koreatown </StyledTitle>

            <StyledStanza>
                He said, “We discovered a new biome!” <br />
                as you landed in New York City. <br />
                No point in longing for home <br />
                when you've already got restless company. <br />
            </StyledStanza>

            <StyledStanza>
                He said his head is in a cyclone <br />
                “Even you can’t save me.” <br />
                Photos that lingered in your phone <br />
                began to smell like family. <br />
            </StyledStanza>

            <StyledStanza>
                Three drunk nights in Manhattan <br />
                forever in a scene <br />
                He tells you, “Keep your eyes open,” <br />
                as he leads you into a dream… <br />
            </StyledStanza>

            <StyledChorus>
                Koreatown! <br />
                Asking yourself… are you living now? <br />
                Singing along to… some shitty pop songs. <br />
                Lost in the night smoke… as lovers hound. <br />
                Just you and him… and Koreatown. <br />
                Are you living now? <br />
            </StyledChorus>

            <StyledStanza>
                He acted like a child running through wheat fields <br />
                and he also dreamed like one. <br />
                He took life a bit too hard and on his knees <br />
                and with some daring demands. <br />
            </StyledStanza>

            <StyledStanza>
                He pointed out the balcony smoke. <br />
                He communicated in poems. <br />
                You learned to love the glimmer of hope <br />
                as you followed his plans. <br />
            </StyledStanza>

            <StyledStanza>
                Three tired nights in Manhattan <br />
                forever in a scene <br />
                He tells you, “Keep your eyes open,” <br />
                as he leads you into a dream… <br />
            </StyledStanza>

            <StyledChorus>
                Koreatown! <br />
                Asking yourself… are you living now? <br />
                Singing along to… some shitty pop songs. <br />
                Lost in the night smoke… as lovers hound. <br />
                Just you and him… and Koreatown. <br />
                Are you living now? <br />
            </StyledChorus>

            <StyledChorus>
                Midnight dreams! <br />
                Telling yourself… you are seventeen. <br />
                Painting this life… a comic scene. <br />
                Getting caught up in… the ‘you and me’. <br />
                He smiles at you… in your midnight dreams. <br />
                And suddenly, You are seventeen. <br />
            </StyledChorus>

            <StyledStanza>
                Oh oh oh… <br />
            </StyledStanza>

            <StyledStanza>
                Oh oh oh… <br />
            </StyledStanza>

            <StyledStanza>
                This was the time <br />
                you felt like a child <br />
                you got addicted to <br />
                watching him smile <br />
                he dragged you through crowds <br />
                you walked the miles <br />
                the moment you felt it <br />
                you just knew it’s life. <br />
            </StyledStanza>

            <StyledStanza>
                Oh how he wanted to <br />
                run on those roofs <br />
                you said maybe next time <br />
                and blamed it on the shoes <br />
                the moon is watching <br />
                taming your blues <br />
                he has some midnight demons <br />
                but wouldn’t dare burden you. <br />
            </StyledStanza>

            <StyledStanza>
                This is the time <br />
                oh you feel like a child <br />
                maybe next time <br />
                you will finally bring <br />
                your bestest shoes. <br />
            </StyledStanza>

            <StyledStanza>
                In your brightest blues, <br />
                he knew you. <br />
            </StyledStanza>

            <Credits />

            <br />
            <br />
            <hr />

            <StyledSubtitle><StyledSpan>Cards Collection for: </StyledSpan>Koreatown</StyledSubtitle>
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