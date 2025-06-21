// src/components/Bts.tsx

import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledScene = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    background: transparent;
`;

const StyledTitle = Styled.h1`
    text-align: center;
    color: #08415C;
    margin: 30px 10px;
    font-size: 3.2em;
    background: transparent;
`;

const StyledSubtitle = Styled.h3`
    text-align: center;
    color: #08415C;
    margin: 30px 10px 10px 10px;
    font-size: 1.2em;
    background: transparent;
`;

const StyledLetter = Styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 40px auto;
    border: 3px solid #08415C;
    border-style: none none none solid;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 900px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const StyledText = Styled.p`
    text-align: left;
    color: #08415C;
    margin: 30px 10px;
    padding: 0px 10px;
    font-size: .8em;
`;

const StyledCharacterContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
`;

const StyledCharacters = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const StyledCharacterImg = Styled.img`
    width: auto;
    height: 200px;
    margin: 0 3%;

    @media (max-width: 600px) {
        width: auto;
        height: 120px;
        margin: 0 3%;
    }
`;

const StyledCharacter = Styled.div`
    margin: 10px 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CharacterText = Styled.p`
    text-align: center;
    font-style: italic;
    font-size: 1em;
    color: #08415C;
    margin-top: 10px;
    background: transparent;

    @media (max-width: 600px) {
        font-size: .7em;
    }
`;

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px auto 15px auto;
    align-items: center;
`;

const StyledBackgroundImg = Styled.img`
    width: 60px;
    height: auto;
    margin: 0 20px;
    object-fit: cover;
`;

const StyledFootNav = Styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default function Bts() {
    return (
        <div style={{zIndex: 1}}>
            <StyledTitle>After Credits</StyledTitle>

            <StyledScene>
                <StyledSubtitle>Epilogue: The Scene</StyledSubtitle>
                <StyledBackgroundImg src='./hw5.jpg' alt='background' />
                <StyledText>
                    It's 2 a.m. <br />
                    We're... <br />
                    <span style={{marginLeft: '30px'}}>out drinking. <br /> </span>
                    <span style={{marginLeft: '30px'}}>out dancing. <br /> </span>
                    <span style={{marginLeft: '30px'}}>out just being creatures to the moon. <br /></span>
                    friends, strangers... all just company. <br />
                    <br />
                    the journey is undetermined <br />
                    and I tend to get lost <br />
                    in what could have beens. <br />
                    I call them my <span style={{fontStyle: 'italic'}}>midnight scenes. <br /></span>
                    <br />
                    <span style={{marginLeft: '30px'}}></span>are we going back home? <br />
                    finally reaching destination? <br />
                    <span style={{marginLeft: '30px'}}></span>and when we meet again, <br />
                    would the world have turned us back into distant minds? <br />
                    <br />
                    scared of being left alone with just <br />
                    <span style={{marginLeft: '50px'}}></span>me and my dreams, <br />
                    <span style={{marginLeft: '60px'}}></span>I ignited a conversation, <br />
                    <span style={{marginLeft: '70px'}}></span>an invitation <br />
                    <span style={{marginLeft: '80px'}}></span>for a midnight friendship service. <br />
                </StyledText>
            </StyledScene>

            <StyledCharacterContainer>
                <StyledSubtitle>The Characters</StyledSubtitle>
                <StyledCharacters>
                    <StyledCharacter>
                        <StyledCharacterImg src='./hw2.jpg' alt='background' />
                        <CharacterText>The Lawyers</CharacterText>
                    </StyledCharacter>
                    
                    <StyledCharacter>
                        <StyledCharacterImg src='./hw3.jpg' alt='background' />
                        <CharacterText>The Dreamers</CharacterText>
                    </StyledCharacter>

                    <StyledCharacter>
                        <StyledCharacterImg src='./hw4.jpg' alt='background' />
                        <CharacterText>The Architects</CharacterText>
                    </StyledCharacter>
                </StyledCharacters>
            </StyledCharacterContainer>
            
            <StyledLetter>
                <StyledSubtitle style={{marginTop: '20px'}}>Letter from the Author</StyledSubtitle>
                <StyledDiv>
                    <StyledBackgroundImg src='./hw6.jpg' alt='background' />
                </StyledDiv>
                <StyledText style={{lineHeight: '2em', margin: '0px 5px'}}>
                    I wrote this collection on the road. I had a vision of myself being dragged away from the grand ballroom as the ticking clock marched toward twelve, fading moments before everything mystical turned back to dirt. Through talking to myself and having honest conversations, I discovered that my words were not special nor magic. But... they were just real enough to stand across the changing of time. So, right before all my coachmen transformed into rodents, right before I have to leave everything behind, right before my graduation, I wrote down a few melodies. <br />
                    <br />
                    I had a few stories: <br />
                    <span style={{marginLeft: '20%', fontWeight: 'bold'}}>Distant Minds: </span><br />
                    Two friends reuniting in the dead of night as their friendship heads to where the dead things go, <br />
                    <span style={{marginLeft: '20%', fontWeight: 'bold'}}>Koreatown: </span><br />
                    Chosen chaos, a new city, and, running on rooftops, <br />
                    <span style={{marginLeft: '20%', fontWeight: 'bold'}}>The Midnight Friendship Service: </span><br />
                    An unexpected, vampiric friendship service, <br />
                    <span style={{marginLeft: '20%', fontWeight: 'bold'}}>The Laundromat: </span><br />
                    Dreamings of what a friendship could have been if life was kinder. <br />
                    <br />
                    This collection of poems is about the closest friendships, some more tender, some more tragic. It is for us who find themselves coping more than healing. These explored perspectives came from a boy trying to express something no one taught him how to say. So, I hope you will be kind. I hope you give them a chance. I hope the words take you back to your own days before midnight. Even someday, when all has turned to dirt, I hope you save these memories a space in your careful minds. <br />
                    <br />
                    I have no doubt they will stay, because they are more than some fairy magic. We’ve all bled through the chapters of our own midnight friendship service. <br />
                </StyledText>
                <StyledBackgroundImg src='./hw7.jpg' alt='background' style={{margin: '20px', width: '100px'}}/>
            </StyledLetter>

            <StyledDiv>
                <StyledText style={{fontStyle: 'italic', margin: '0px 5px', fontSize: '.5em'}}>
                    for the boy who was scared of making friends just to lose them <br />
                </StyledText>
            </StyledDiv>
            
            <StyledFootNav>
                <Link to="/original" style={{textAlign: 'left'}}>&rarr; Original Pages</Link>
                <Link to="/contents" style={{textAlign: 'right'}}>&rarr; All Contents</Link>
            </StyledFootNav>
            
        </div>
    );
}