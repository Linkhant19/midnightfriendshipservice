// src/components/Nav.tsx

import Styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const StyledNav = Styled.nav`
    width: 100%;
    height: 10vh;
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
    text-align: left;
`;

const StyledLiMid = Styled.li`
    padding: 0 20px;
    text-align: left;
`;

export default function Nav() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <StyledNav>
            <StyledUl>
                {!isHome && <StyledLi>
                    <Link to='/'>THE MIDNIGHT FRIENDSHIP SERVICE</Link>
                </StyledLi>}

                {isHome && <StyledLi>
                    <Link to='/'> </Link>
                </StyledLi>}

                <StyledDiv>
                    <StyledLiMid>
                        <Link to='/contents'>Poems</Link>
                    </StyledLiMid>
                    <StyledLi>
                        <Link to='/cards'>Cards</Link>
                    </StyledLi>
                </StyledDiv>   
            </StyledUl>
        </StyledNav>
    )
}