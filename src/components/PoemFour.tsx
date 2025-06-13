// src/components/PoemFour.tsx

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

const StyledStanzaTwo = Styled.p`
    text-align: right;
    color: #08415C;
    margin-bottom: 40px;
    margin-top: -30px;
    font-size: .8em;
    font-style: italic;
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

export default function PoemFour() {
    const cards = [
        {
            img: './cards/card1.png',
            alt: 'card5',
        },
        {
            img: './cards/card2.png',
            alt: 'card2',
        },
        {
            img: './cards/card17.png',
            alt: 'card17',
        },
        {
            img: './cards/card18.png',
            alt: 'card18',
        }
    ]

    return (
        <StyledDiv>
            <StyledTitle> The Laundromat </StyledTitle>

            <StyledStanza>
                Found myself across the room <br />
                in dim warm light, 1:52 <br />
                How did midnight fly quietly by? <br />
                How are you still here? <br />

            </StyledStanza>

            <StyledStanza>
                Sitting in circle and the mess <br />
                My tongue crawled inside my head <br />
                It’s too late to stop sharing now <br />
                So, just don’t slip a tear. <br />

            </StyledStanza>

            <StyledStanza>
                Please… don’t… leave <br />
                for I am one for bad dreams. <br />
            </StyledStanza>

            <StyledStanza>
                You… imitate… me <br />
                with your misfortuned life scene. <br />
            </StyledStanza>

            <StyledStanza>
                And, in my mind… I was wishing…
            </StyledStanza>

            <StyledChorus>
                We were nineteen, <br />
                drunk, and dancing in a laundromat. <br />
                It’s a night scene <br />
                with a lawyer, a dreamer, and an architect. <br />
                Pastel color walls, a vintage song <br />
                I grabbed a pen and wrote it down, <br />
                “Here’s to holding on for forever long.” <br />
                <br />
                ♫♪♫♪♫
            </StyledChorus>

            <StyledStanza>
                Drifted back into the room <br />
                all eyes on me, it was my move <br />
                I rolled the dice, locked my arms <br />
                What do I do here? <br />
            </StyledStanza>

            <StyledStanza>
                Hours passed like the wild of West <br />
                My head’s now laid in his chest <br />
                The conversation hadn’t faded now <br />
                I could paint a scene forever. <br />
            </StyledStanza>

            <StyledStanza>
                It’s… just… fair <br />
                I adopt you into my dreams. <br />
            </StyledStanza>

            <StyledStanza>
                I… don’t… care <br />
                whoever you turn out to be. <br />
            </StyledStanza>

            <StyledStanza>
                But, in my mind… I was wishing… <br />
            </StyledStanza>

            <StyledChorus>
                We were nineteen, <br />
                drunk, and dancing in a laundromat. <br />
                It’s a night scene <br />
                with a lawyer, a dreamer, and an architect. <br />
                Pastel color walls, a vintage song <br />
                I grabbed a pen and wrote it down, <br />
                “Here’s to holding on for forever long.” <br />
                <br />
                We were nineteen, <br />
                high, and stumbling down an alleyway. <br />
                Drew a night scene <br />
                in tomorrow for those who couldn’t stay. <br />
                Comic book pages, smoke-filled air. <br />
                With my hand around your shoulder, I declared, <br />
                “I’ll be the first to die, but I’ll wait for you all there.” <br />
                <br />
                ♫♪♫♪♫
            </StyledChorus>

            <StyledStanza>
                Is this the life? <br />
                All the things we could have done if we just met <br />
                a bit earlier <br />
            </StyledStanza>

            <StyledStanzaTwo>
                in the laundromat. <br />
                But, I just found you. <br />
            </StyledStanzaTwo>

            <StyledStanza>
                Is this the life? <br />
                All the things we could have done if we just had <br />
                a bit more time <br />
            </StyledStanza>

            <StyledStanzaTwo>
                in the laundromat. <br />
                But, I just found you. <br />
            </StyledStanzaTwo>

            <StyledStanza>
                Is this the life… <br />
                I would have wanted <br />
                if I met you in another universe, <br />
                and I was rich, better off, but haunted <br />
                by all that could have been, the little things, <br />
                and a million what-ifs? <br />
                <br />
                In that universe, I would have said, conflicted, <br />
            </StyledStanza>

            <StyledStanzaTwo>
                “Is that the life <br />
                that I wanted? <br />
                Because if I am being honest, <br />
                I still don’t know what life really is. <br />
                I wish I knew the pain of <br />
                having roommates, <br />
                doing dishes, <br />
                planning events, <br />
                and crying after hosting them because I think everyone hated <br />
                me. <br />
                I dream of what life really is <br />
                breaking down at midnight, <br />
                being held up only by a friendship service. <br />
                I know it’s just like a movie, but <br />
                in another life, <br />
                I would have really enjoyed <br />
                just having deep conversations <br />
                and playing board games with you.” <br />
            </StyledStanzaTwo>

            <StyledStanza>
                Because I do. <br />
                I knew <br />
                as a dreamer, <br />
                even when I was visiting different universes in my mind, <br />
                I knew <br />
                I would have always wanted this with you. <br />
                <br />
                We are not nineteen, we are not dramatically dancing in a laundromat, <br />
                but, we are here. <br />
            </StyledStanza>

            <StyledChorus>
                ♫♪♫♪♫ <br />
                <br />
                So, I find myself across the room <br />
                in a warm light, next to you. <br />
                I opened my notes app and wrote down <br />
                all the scenes, and this song. <br />
            </StyledChorus>

            <Credits />

            <br />
            <br />
            <hr />

            <StyledSubtitle><StyledSpan>Cards Collection for: </StyledSpan>The Laundromat</StyledSubtitle>
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
                <Link to="/poem3" style={{textAlign: 'left'}}>&rarr; Extra 1. The Pilot</Link>
                <Link to="/contents" style={{textAlign: 'right'}}>&rarr; All Contents</Link>
            </StyledFootNav>

        </StyledDiv>
  );
}