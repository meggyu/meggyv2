/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useRef,
    useEffect
} from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useRouter from './useRouter';
import { FadeInUp, FadeInUpDelayed } from './Layout';

const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    a {
        .socialButton {
            margin: 30px 30px 0;
            border: 3px solid #F4998D;
            border-radius: 5px;
            padding: 10px 20px;
            color: #F4998D;
            transition: background 0.5s;
            font-size: 20px;

            @media (max-width: 768px) {
                width: 180px;
            }
        }

        &:hover .socialButton {
            background: rgba(244, 153, 141, 0.3);
        }
    }
`;

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    opacity: 0;

    @media (max-width: 768px) {
        padding: 0 70px;
        text-align: center;
    }

    @media (max-width: 425px) {
        padding: 0 30px;
        text-align: center;
    }

    h1 {
        margin-bottom: 0;
    }

    ${SocialWrapper} {
        opacity: 0;
    }

    &.isVisible {
        opacity: 1;
        animation: 1s ${FadeInUp} ease-in-out;

        ${SocialWrapper} {
            opacity: 1;
            animation: 1s ${FadeInUpDelayed} ease-in-out;
        }
    }
`;

const Contact = () => {
    const router = useRouter();
    const contactWrapperRef = useRef();

    useEffect(() => {
        if (!contactWrapperRef.current) return;

        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: contactWrapperRef.current,
            start: 'top center',
            onEnter: () => {
                contactWrapperRef.current.classList.add('isVisible');
                router.push('#contact');
            },
            onEnterBack: () => {
                router.push('#contact');
            }
        });
    }, [contactWrapperRef]);

    return (
        <ContactWrapper id="contact" ref={contactWrapperRef}>
            <h1>Call Me, Beep Me!</h1>
            <div className="caption">(if you wanna reach me~)</div>
            <p>Have a question? Just wanna chat? Let’s connect!</p>

            <SocialWrapper>
                <a href="https://www.linkedin.com/in/megan-koh-b02182144/" target="_blank" rel="noopener noreferrer">
                    <div className="socialButton"><FontAwesomeIcon icon="envelope" /> Email</div>
                </a>
                <a href="https://www.linkedin.com/in/megan-koh-b02182144/" target="_blank" rel="noopener noreferrer">
                    <div className="socialButton"><FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn</div>
                </a>
                <a href="https://www.instagram.com/megicorn_/" target="_blank" rel="noopener noreferrer">
                    <div className="socialButton"><FontAwesomeIcon icon={['fab', 'instagram']} /> Instagram</div>
                </a>
                <a href="https://github.com/kohzmay" target="_blank" rel="noopener noreferrer">
                    <div className="socialButton"><FontAwesomeIcon icon={['fab', 'github']} /> Github</div>
                </a>
            </SocialWrapper>
        </ContactWrapper>
    );
}

export default Contact;
