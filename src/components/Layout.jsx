import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    position: relative;
    width: 1910px;

    @media (max-width: 1910px) {
        width: 100vw;
    }

    &:after {
        content: '';
        opacity: 1;
        position: absolute;
        width: 100vw;
        height: auto;
        top: 0;
        bottom: 0;
        margin: 0;
        backdrop-filter: blur(20px) brightness(0.3);
        z-index: -1;
        opacity: 0;
        transition: all 0.5s;
    }

    &.overlay {
        &:after {
            opacity: 1;
            z-index: 3;
        }
    }
`;

export const ContentWrapper = styled.div`
    width: 1910px;

    @media (max-width: 1910px) {
        width: 100vw;
    }
`;

export const LeftContainer = styled.div`
    width: 100%;
    max-width: 400px;
    pointer-events: none;
    padding-right: 50px;

    @media (max-width: 1025px) {
        padding-right: 0;
        align-self: flex-start;
    }

    @media (max-width: 425px) {
        img {
            width: 200px;
        }
    }
`;

export const Button = styled.button`
    width: 180px;
`;

export const AboutWrapper = styled.div`
    margin-bottom: 30px;
`;

export const RightContainer = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1025px) {
        width: 100%;
    }
`;

// Animations
export const FadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const FadeInUpDelayed = keyframes`
    0%, 50% {
        opacity: 0;
        transform: translateY(100px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;
