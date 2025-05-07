// src/components/PoemTwo.tsx

import Styled from 'styled-components';
import Credits from './Credits';

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
    margin: 30px 10px;
    font-size: 3.2em;
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

export default function PoemTwo() {
  return (
    <StyledDiv>
        <StyledTitle> Koreatown </StyledTitle>

        <StyledStanza>
            He said, “We discovered a new biome!” <br />
            as you landed in New York City. <br />
            No point in longing for home <br />
            when you've got some restless company. <br />
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

        <StyledChorus>
            Koreatown! <br />
            Asking yourself… are you living now? <br />
            Singing along to… some shitty pop songs. <br />
            Lost in the night smoke… as lovers hound. <br />
            Just you and him… and Koreatown. <br />
            Are you living now? <br />
        </StyledChorus>

        <Credits />
    </StyledDiv>
  );
}