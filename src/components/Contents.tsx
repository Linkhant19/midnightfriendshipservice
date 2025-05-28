// src/components/Contents.tsx

import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLi = Styled.li`
    padding: 0 20px;
    text-align: center;
    text-decoration: none;
`;

export default function Contents() {
    return (
        <StyledDiv>
            <h1>Contents</h1>

            {/* link to poem1 */}
            <StyledLi>
                <Link to='/poem1'>Distant Minds</Link>
            </StyledLi>

            {/* link to poem2 */}
            <StyledLi>
                <Link to='/poem2'>Koreatown</Link>
            </StyledLi>

            {/* link to poem3 */}
            <StyledLi>
                <Link to='/poem3'>The Midnight Friendship Service</Link>
            </StyledLi>
        </StyledDiv>
    );
}