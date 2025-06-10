// src/components/Contents.tsx

import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTitle = Styled.h1`
    text-align: center;
    color: #08415C;
    margin: 30px 10px;
    font-size: 3.2em;
`;

const StyledSubtitle = Styled.h2`
    text-align: left;
    color: #08415C;
    margin: 30px 10px 20px 10px;
    font-size: 1.2em;
    font-weight: normal;
`;

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

const StyledLi = Styled.li`
    padding: 0 20px;
    margin-bottom: 10px;
    text-align: left;
    text-decoration: none;
`;

const StyledSpan = Styled.span`
    font-size: .7em;
    font-style: italic;
    color: #777777;
`;

const StyledSubtext = Styled.p`
    text-align: left;
    color: #08415C;
    opacity: .8;
    margin: 0px 10px 30px 10px;
    font-size: .7em;
    font-weight: normal;
    font-style: italic;
`;

export default function Contents() {
    return (
        <StyledDiv>
            <StyledTitle>Contents</StyledTitle>

            <StyledSubtitle><StyledSpan>from: </StyledSpan>THE MIDNIGHT FRIENDSHIP SERVICE collection</StyledSubtitle>

            <StyledLi>
                <Link to='/poem1'>1. Distant Minds</Link>
            </StyledLi>

            <StyledLi>
                <Link to='/poem2'>2. Koreatown</Link>
            </StyledLi>

            <StyledLi>
                <Link to='/poem3'>3. The Midnight Friendship Service</Link>
            </StyledLi>

            <StyledLi>
                <Link to='/poem4'>4. The Laundromat</Link>
            </StyledLi>

            <StyledSubtitle><StyledSpan>from: </StyledSpan>Behind the scenes</StyledSubtitle>
            <StyledLi>
                <Link to='/bts'>* epilogue, extras, and original pages</Link>
            </StyledLi>

            <StyledSubtitle><StyledSpan>from: </StyledSpan>MORE (THAN) FRIENDSHIP SERVICE collection</StyledSubtitle>

            <StyledSubtext>
                These are the poems that did not make the cut for the main collection because they didn't fit the theme or I just wasn't too happy with them.
                However, since they were written around the same time, I still wanted to share them with you. I hope you like them!
            </StyledSubtext>

            <StyledLi>
                <Link to='/poem1'>1. The Pilot</Link>
            </StyledLi>

            <StyledLi>
                <Link to='/poem2'>2. Eric</Link>
            </StyledLi>

            <StyledLi>
                <Link to='/poem3'>3. Title Coming Soon</Link>
            </StyledLi>


        </StyledDiv>
    );
}