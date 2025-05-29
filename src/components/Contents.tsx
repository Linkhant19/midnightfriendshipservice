// src/components/Contents.tsx

import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTitle = Styled.h1`
    text-align: center;
    color: #08415C;
    margin: 30px 10px;
    font-size: 3.2em;
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

export default function Contents() {
    return (
        <StyledDiv>
            <StyledTitle>Contents</StyledTitle>

            {/* link to poem1 */}
            <StyledLi>
                <Link to='/poem1'>1. Distant Minds</Link>
            </StyledLi>

            {/* link to poem2 */}
            <StyledLi>
                <Link to='/poem2'>2. Koreatown</Link>
            </StyledLi>

            {/* link to poem3 */}
            <StyledLi>
                <Link to='/poem3'>3. The Midnight Friendship Service</Link>
            </StyledLi>
        </StyledDiv>
    );
}