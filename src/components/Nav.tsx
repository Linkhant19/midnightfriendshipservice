// src/components/Nav.tsx

import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = Styled.nav`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
`;

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledUl = Styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
`;

const StyledLi = Styled.li`
    padding: 10px;
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <Link to='/'>THE MIDNIGHT FRIENDSHIP SERVICE</Link>
                </StyledLi>

                <StyledDiv>
                    <StyledLi>
                        <Link to='/cards'>Poems</Link>
                    </StyledLi>
                    <StyledLi>
                        <Link to='/cards'>Cards</Link>
                    </StyledLi>
                </StyledDiv>   
            </StyledUl>
        </StyledNav>
    )
}