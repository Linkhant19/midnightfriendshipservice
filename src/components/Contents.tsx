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
    margin: 30px 10px;
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
    text-align: left;
    text-decoration: none;
`;

const StyledSpan = Styled.span`
    font-size: .7em;
    font-style: italic;
    color: #777777;
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
                <Link to='/poem3'>4. Title Coming Soon</Link>
            </StyledLi>

            <StyledSubtitle><StyledSpan>from: </StyledSpan>LIN - extras and behind the scenes</StyledSubtitle>
            <StyledLi>
                <Link to='/poem1'>* Letter From The Author</Link>
            </StyledLi>

            <StyledLi>
                <Link to='/poem2'>* Behind The Scenes: Cards Collection</Link>
            </StyledLi>

            <StyledLi>
                <Link to='/poem3'>* Distant Minds - Original Pages</Link>
            </StyledLi>

            <StyledLi>
                <Link to='/poem3'>* The Midnight Friendship Service - Original Pages</Link>
            </StyledLi>

            <StyledSubtitle><StyledSpan>from: </StyledSpan>MORE (THAN) FRIENDSHIP SERVICE collection</StyledSubtitle>
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