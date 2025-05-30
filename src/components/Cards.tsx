// src/components/Cards.tsx

import Styled from 'styled-components';

const StyledTitle = Styled.h1`
    text-align: left;
    color: #08415C;
    margin: 50px 45px;
    margin-bottom: 20px;
    font-size: 3em;
`;

const GallaryDiv = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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

    &:hover {
        transform: scale(1.05);
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
`;

export default function Cards() {
    // initialize list of cards with images, alt, and poem they belong to
    const cards = [
        {
            img: './cards/card0.png',
            alt: 'card1',
            poem: 'poem1',
        },
        {
            img: './cards/card1.png',
            alt: 'card1',
            poem: 'poem9',
        },
        {
            img: './cards/card2.png',
            alt: 'card2',
            poem: 'poem4',
        },
        {
            img: './cards/card3.png',
            alt: 'card3',
            poem: 'poem4',
        },
        {
            img: './cards/card4.png',
            alt: 'card4',
            poem: 'poem9',
        },
        {
            img: './cards/card5.png',
            alt: 'card5',
            poem: 'poem2',
        },
        {
            img: './cards/card6.png',
            alt: 'card6',
            poem: 'poem3',
        },
        {
            img: './cards/card7.png',
            alt: 'card7',
            poem: 'poem3',
        },
        {
            img: './cards/card8.png',
            alt: 'card8',
            poem: 'poem3',
        },
        {
            img: './cards/card9.png',
            alt: 'card9',
            poem: 'poem3',
        },
        {
            img: './cards/card10.png',
            alt: 'card10',
            poem: 'poem1',
        }
    ]

    return (
        <div>
            <StyledTitle>Cards Collection</StyledTitle>

            {/* gallery of all cards in cards mapped */}
            <GallaryDiv>
                {cards.map((card) => (
                    <StyledCardContainer>
                        <StyledCard key={card.alt}>
                            <StyledImg src={card.img} alt={card.alt} />
                        </StyledCard>

                        <StyledDesc>
                            <a
                                href={card.img} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#08415C' }}
                            >
                                open image
                            </a>
                            <a href={`/${card.poem}`}>open poem</a>
                        </StyledDesc>    
                    </StyledCardContainer>
                ))}
            </GallaryDiv>
        </div>
    );
}
