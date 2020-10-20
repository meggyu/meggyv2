/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useRef,
    useEffect
} from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import ScrollTrigger from 'gsap/ScrollTrigger';

import useRouter from './useRouter';
import { LeftContainer, FadeInUp, FadeInUpDelayed } from './Layout';

const RightContainer = styled.div`
    width: 80%;

    @media (max-width: 1025px) {
        width: 100%;
    }
`;

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 100px;

    h1 {
        margin-top: 0;
    }

    @media (max-width: 1700px) {
        padding: 70px 70px 0;
    }

    @media (max-width: 1025px) {
        flex-direction: column;

        ${LeftContainer} {
            align-self: center;
            margin-bottom: 50px;
        }
    }

    @media (max-width: 769px) {
        height: auto;
    }

    @media (max-width: 425px) {
        padding: 70px 30px 0;

        ${LeftContainer} img {
            width: 300px;
            align-self: center;
        }
    }

    ${LeftContainer}, ${RightContainer} {
        opacity: 0;
    }

    &.isVisible {
        ${LeftContainer} {
            opacity: 1;
            animation: 1s ${FadeInUp} ease-in-out;
        }

        ${RightContainer} {
            opacity: 1;
            animation: 1s ${FadeInUpDelayed} ease-in-out;
        }
    }
`;

const About = () => {
    const router = useRouter();
    const aboutWrapperRef = useRef();

    useEffect(() => {
        if (!aboutWrapperRef.current) return;
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: aboutWrapperRef.current,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => {
                aboutWrapperRef.current.classList.add('isVisible');
                router.push('#about');
            },
            onEnterBack: () => {
                router.push('#about');
            }
        });
    }, [aboutWrapperRef]);

    return (
        <AboutWrapper id="about" ref={aboutWrapperRef}>
            <LeftContainer>
                <img src="img/me2.jpg" alt="Me and Henry" />
            </LeftContainer>
            <RightContainer>
                <h1>Howdy!</h1>
                <p>
                    I’m Megan, a software engineer with a passion for web design. Based in Austin, TX (yee haw), I currently work at Blizzard 
                    Entertainment on the <a href="https://playhearthstone.com/en-us/" target="_blank" rel="noopener noreferrer">Hearthstone</a> web team, where we're
                    constantly building new features to support the game and improve player experience.
                </p>
                <p>
                    I graduated from Calvin College in 2018 with Bachelor of Science in Computer Science. Even though I am a programmer by trade,
                    I've always had a passion for digital design and enjoy designing and developing my own programs and applications! I work
                    mainly in JavaScript and React, with some experience in Java.
                </p>
                <p>
                    Outside of work, I feed too much on Summoners Rift, listen to the same songs on repeat, and enjoy jamming on the bass and
                    piano. I am also a proud cat mom to my orange tabby, Henry (pictured). 
                </p>
            </RightContainer>
        </AboutWrapper>
    );
};

export default About;
