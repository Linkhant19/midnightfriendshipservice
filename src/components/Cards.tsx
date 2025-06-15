// src/components/Cards.tsx

import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import Credits from './Credits';

const StyledTitle = Styled.h1`
    text-align: left;
    color: #08415C;
    margin: 30px 45px 15px 45px;
    font-size: 3em;
`;

const GallaryDiv = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: transparent;
`;

const StyledCardContainer = Styled.div`
    display: flex;
    flex-direction: col;
    justify-content: center;
    width: 290px;
    flex-wrap: wrap;
`;

const StyledCard = Styled.div`
    width: 100%;
    margin: 20px;
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    transition: all 1s ease;
    background-color: transparent;

    &:hover {
        transform: scale(1.005);
        box-shadow: 0 0 20px #08415C;
    }

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            0deg, 
            transparent, 
            transparent 30%, 
            rgba(8, 65, 92, 0.4)
        );
        transform: rotate(-45deg);
        transition: all 0.5s ease;
        opacity: 0;
        pointer-events: none;
    }

    &:hover::before {
        opacity: 1;
        transform: rotate(-45deg) translateY(100%);
    }
`;

const StyledImg = Styled.img`
    width: 100%;
    display: block;
`;

const StyledDesc = Styled.div`
    display: flex;
    flex-direction: column;
    color: #08415C;
    margin-bottom: 25px;

    font-size: .85em;
`;

const StyledSpan = Styled.span`
    font-size: .7em;
    font-style: italic;
    color: #777777;
`;

export default function Cards() {
    // initialize list of cards with images, alt, and poem they belong to
    const cards = [
        {
            img: './cards/card0.png',
            alt: 'card1',
            poem: 'poem1',
            poem_name: 'Distant Minds',
        },
        {
            img: './cards/card1.png',
            alt: 'card1',
            poem: 'poem4',
            poem_name: 'The Laundromat',
        },
        {
            img: './cards/card2.png',
            alt: 'card2',
            poem: 'poem4',
            poem_name: 'The Laundromat',
        },
        {
            img: './cards/card3.png',
            alt: 'card3',
            poem: 'poem6',
            poem_name: 'Swimming',
        },
        {
            img: './cards/card4.png',
            alt: 'card4',
            poem: 'poem6',
            poem_name: 'Coming Soon',
        },
        {
            img: './cards/card5.png',
            alt: 'card5',
            poem: 'poem2',
            poem_name: 'Koreatown',
        },
        {
            img: './cards/card6.png',
            alt: 'card6',
            poem: 'poem3',
            poem_name: 'The Midnight Friendship Service',
        },
        {
            img: './cards/card7.png',
            alt: 'card7',
            poem: 'poem3',
            poem_name: 'The Midnight Friendship Service',
        },
        {
            img: './cards/card8.png',
            alt: 'card8',
            poem: 'poem3',
            poem_name: 'The Midnight Friendship Service',
        },
        {
            img: './cards/card9.png',
            alt: 'card9',
            poem: 'poem3',
            poem_name: 'The Midnight Friendship Service',
        },
        {
            img: './cards/card10.png',
            alt: 'card10',
            poem: 'poem1',
            poem_name: 'Distant Minds',
        },
        {
            img: './cards/card11.png',
            alt: 'card11',
            poem: 'poem2',
            poem_name: 'Koreatown',
        },
        {
            img: './cards/card12.png',
            alt: 'card12',
            poem: 'poem2',
            poem_name: 'Koreatown',
        },
        {
            img: './cards/card13.png',
            alt: 'card13',
            poem: 'poem1',
            poem_name: 'Distant Minds',
        },
        {
            img: './cards/card14.png',
            alt: 'card14',
            poem: 'poem6',
            poem_name: 'Eric',
        },
        {
            img: './cards/card15.png',
            alt: 'card15',
            poem: 'poem3',
            poem_name: 'The Midnight Friendship Service',
        },
        {
            img: './cards/card16.png',
            alt: 'card16',
            poem: 'poem5',
            poem_name: 'The Pilot',
        },
        {
            img: './cards/card17.png',
            alt: 'card17',
            poem: 'poem4',
            poem_name: 'The Laundromat',
        },
        {
            img: './cards/card18.png',
            alt: 'card18',
            poem: 'poem4',
            poem_name: 'The Laundromat',
        },
        {
            img: './cards/card19.png',
            alt: 'card19',
            poem: 'poem6',
            poem_name: 'Swimming',
        },
        {
            img: './cards/card20.png',
            alt: 'card20',
            poem: 'poem1',
            poem_name: 'Distant Minds',
        },
        {
            img: './cards/card21.png',
            alt: 'card21',
            poem: 'poem2',
            poem_name: 'Koreatown',
        }
    ]

    return (
        <div style={{ zIndex: 1, backgroundColor: 'transparent' }}>
            <StyledTitle>Cards Collection</StyledTitle>

            {/* gallery of all cards in cards mapped */}
            <GallaryDiv>
                {cards.map((card) => (
                    <StyledCardContainer>
                        <StyledCard key={card.alt}>
                            <StyledImg src={card.img} alt={card.alt} />
                        </StyledCard>

                        <StyledDesc>
                            {/* <a
                                href={card.img} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#08415C' }}
                            >
                                open image
                            </a> */}
                            <Link to={`/${card.poem}`} style={{ cursor: 'pointer' }}> <StyledSpan>sent from: </StyledSpan>{card.poem_name}</Link>
                        </StyledDesc>    
                    </StyledCardContainer>
                ))}
            </GallaryDiv>

            <Credits />
        </div>
    );
}
