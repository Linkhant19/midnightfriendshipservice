// src/components/Form.tsx

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Styled from 'styled-components';

const StyledTextArea = Styled.textarea`
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #08415C;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    color: #08415C;
    resize: none;
`;

const StyledMessage = Styled.p`
    color: #08415C;
    margin: 30px 0px 30px 15px;
    font-size: 1.2em;
`;

export default function Form() {
    const form = useRef<HTMLFormElement>(null);  
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current!,
            {
              publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
        )
          
        .then(
            () => {
                console.log('SUCCESS!');
                setIsSubmitted(true); 
                form.current?.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };

    const resetForm = () => setIsSubmitted(false);

    return (
        <div className="Form-container">
            <form ref={form} onSubmit={sendEmail}>
                {!isSubmitted ? (
                    <>
                        <label>name</label>
                        <input type="text" name="user_name" required />
                        <label>message</label>
                        <StyledTextArea name="message" required />
                        <input type="submit" value="Send" />
                    </>
                ) : (
                    <>
                        <StyledMessage className="success-message">Thank you! Your message has been sent successfully.</StyledMessage>
                        <button type="button" onClick={resetForm}>Send Another Message</button>
                    </>
                )}
            </form>
        </div>
    );
}
