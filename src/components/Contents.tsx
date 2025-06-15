// src/components/Contents.tsx

import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import Credits from './Credits';

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    z-index: 1;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const StyledTitleDiv = Styled.div`
    width: 30%;
`;

const StyledTitle = Styled.h1`
    text-align: center;
    color: #08415C;
    margin: 30px 5px;
    font-size: 3.2em;
    background-color: transparent;
`;

const StyledSubtitle = Styled.h2`
    text-align: left;
    color: #08415C;
    margin: 30px 10px 20px 10px;
    font-size: 1.2em;
    font-weight: normal;
    background-color: transparent;
`;

const StyledLi = Styled.li`
    padding: 0 20px;
    margin-bottom: 10px;
    text-align: left;
    text-decoration: none;
    background-color: transparent;
`;

const StyledSpan = Styled.span`
    font-size: .7em;
    font-style: italic;
    color: #777777;
    background-color: transparent;
`;

const StyledSubtext = Styled.p`
    text-align: left;
    color: #08415C;
    opacity: .8;
    margin: 0px 10px 30px 10px;
    font-size: .7em;
    font-weight: normal;
    font-style: italic;
    background-color: transparent;
`;

const StyledBackgroundImg = Styled.img`
    position: fixed;
    top: 15%;
    left: 60%;
    width: 90px;
    height: auto;
    object-fit: cover;
    z-index: -1;

    @media (max-width: 600px) {
        top: 17%;
        left: 69%;
        opacity: .4;
    }
`;

const StyledBackgroundImg2 = Styled.img`
    position: fixed;
    top: 35%;
    left: 10%;
    width: 90px;
    height: auto;
    object-fit: cover;
    z-index: -1;

    @media (max-width: 600px) {
        top: 50%;
        left: 5%;
        opacity: .4;
    }
`;

const StyledBackgroundImg3 = Styled.img`
    position: fixed;
    top: 75%;
    left: 80%;
    width: 65px;
    height: auto;
    object-fit: cover;
    z-index: -1;

    @media (max-width: 600px) {
        top: 80%;
        left: 80%;
        opacity: .4;
    }
`;

export default function Contents() {
    return (
        <StyledDiv>
            <StyledTitleDiv>
                <StyledTitle>Contents</StyledTitle>
            </StyledTitleDiv>

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

            <StyledSubtitle><StyledSpan>from: </StyledSpan>MORE <StyledSpan>(than)</StyledSpan> FRIENDSHIP SERVICE collection</StyledSubtitle>

            <StyledSubtext>
                These are the poems that did not make the cut for the main collection because they didn't fit the theme or I just wasn't too happy with them.
                However, since they were written around the same time, I still wanted to share them with you. I hope you like them!
            </StyledSubtext>

            <StyledLi>
                <Link to='/poem5'>5. The Pilot</Link>
            </StyledLi>

            <StyledLi>
                <Link to='/poem7'>6. Alex</Link>
            </StyledLi>

            <StyledLi>
                <Link to='/poem6'>7. Swimming</Link>
            </StyledLi>

            <StyledBackgroundImg src='./hw2.jpg' alt='background' />
            <StyledBackgroundImg2 src='./hw3.jpg' alt='background' />
            <StyledBackgroundImg3 src='./hw4.jpg' alt='background' />

            <Credits />
        </StyledDiv>
    );
}