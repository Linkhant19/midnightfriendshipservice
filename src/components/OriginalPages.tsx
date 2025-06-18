// src/components/OriginalPages.tsx

import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    min-width: 80vw;
`;

const StyledHeader = Styled.h1`
    text-align: center;
    color: #08415C;
    margin: 30px 10px;
    font-size: 3em;
`;

const StyledTitle = Styled.h1`
    text-align: center;
    color: #08415C;
    margin: 30px 10px 10px 10px;
    font-size: 1.2em;
    text-decoration: underline;
    background: transparent;
`;

const StyledImg = Styled.img`
    width: 40%;
    height: auto;
    border: 1px solid #08415C;
    margin: 10px;

    @media (max-width: 900px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        width: 110%;
    }
`;

const StyledFootNav = Styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default function OriginalPages() {
    return (
        <>
            <StyledHeader>Original Pages</StyledHeader>
            <StyledDiv>
                <Link to="/poem1">
                    <StyledTitle>
                        Distant Minds
                    </StyledTitle>
                </Link>
                <StyledImg src='./originals/poem1_3.jpg' alt='poem1_3' />
                <StyledImg src='./originals/poem1_1.jpg' alt='poem1_1' />
                <StyledImg src='./originals/poem1_2.jpg' alt='poem1_2' />
            </StyledDiv>

            <StyledDiv>
                <Link to="/poem2">
                    <StyledTitle>
                        Koreatown
                    </StyledTitle>
                </Link>
                <StyledImg src='./originals/poem2_1.jpg' alt='poem2_1' />
                <StyledImg src='./originals/poem2_2.jpg' alt='poem2_2' />
            </StyledDiv>

            <StyledDiv>
                <Link to="/poem3">
                    <StyledTitle>
                        The Midnight Friendship Service
                    </StyledTitle>
                </Link>
                <StyledImg src='./originals/poem3_1.jpg' alt='poem3_1' />
                <StyledImg src='./originals/poem3_2.jpg' alt='poem3_2' />
            </StyledDiv>

            <StyledDiv>
                <Link to="/poem4">
                    <StyledTitle>
                        The Laundromat
                    </StyledTitle>
                </Link>
                <StyledImg src='./originals/poem4_3.jpg' alt='poem4_3' />
                <StyledImg src='./originals/poem4_1.jpg' alt='poem4_1' />
                <StyledImg src='./originals/poem4_2.jpg' alt='poem4_2' />
                <StyledImg src='./originals/poem4_4.jpg' alt='poem4_4' />
            </StyledDiv>

            <StyledDiv>
                <Link to="/poem6">
                    <StyledTitle>
                        Swimming
                    </StyledTitle>
                </Link>
                <StyledImg src='./originals/poem6_2.jpg' alt='poem6_2' />
                <StyledImg src='./originals/poem6_3.jpg' alt='poem6_3' />
                <StyledImg src='./originals/poem6_1.jpg' alt='poem6_1' />
            </StyledDiv>

            <StyledFootNav>
                <Link to="/contents" style={{textAlign: 'right'}}>&rarr; All Contents</Link>
            </StyledFootNav>
        </>
    );
}