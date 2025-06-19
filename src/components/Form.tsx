// src/components/Form.tsx

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Styled from 'styled-components';

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 80%;
    margin: 10px auto;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

const StyledTextArea = Styled.textarea`
    width: 80%;
    height: 50px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 1px solid #08415C;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    color: #08415C;
    resize: none;
`;

const StyledInput = Styled.input`
    width: 80%;
    height: 10px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #08415C;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    color: #08415C;
`;

const StyledInputTwo = Styled.input`
    width: 20%;
    height: 10px;
    padding: 12px 20px 28px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #08415C;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: .8em;
    color: #08415C;

    @media (max-width: 600px) {
        width: 50.525%;
    }
`;

const StyledMessage = Styled.p`
    color: #08415C;
    margin: 30px 0px 30px 15px;
    font-size: .8em;
`;

const StyledLabel = Styled.label`
    width: 20%;
    color: #08415C;
    font-size: .8em;
`;

export default function Form({ poem } : { poem: string }) {
    const form = useRef<HTMLFormElement>(null);  
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
          
        .then(() => {
            console.log("SUCCESS!");
            setIsSubmitted(true);
            form.current?.reset();
        })
        .catch((error) => {
            console.error("FULL ERROR OBJECT:", error);
        });
    };

    const resetForm = () => setIsSubmitted(false);

    return (
        <div className="Form-container">
            <form ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="poem" value={poem} />
                {!isSubmitted ? (
                    <>
                        <StyledDiv>
                            <StyledLabel>name (not required)</StyledLabel>
                            <StyledInput type="text" name="name" />
                        </StyledDiv>
                        
                        <StyledDiv>
                            <StyledLabel>message</StyledLabel>
                            <StyledTextArea name="message" required />
                        </StyledDiv>

                        <StyledInputTwo type="submit" value="Send" />
                    </>
                ) : (
                    <>
                        <StyledMessage className="success-message">Thanks for your feedback! ⁠♡ It means a lot. </StyledMessage>
                        <button type="button" onClick={resetForm}>Send Another Message</button>
                    </>
                )}
            </form>
        </div>
    );
}
