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
        opacity: 0;
        position: absolute;
        width: 100%;
        height: auto;
        top: 0;
        bottom: 0;
        margin: 0;
        background: rgba(0, 0, 0, 0.85);
        z-index: -1;
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

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1710px;
    position: fixed;
    z-index: 9999;

    @media (max-width: 1910px) {
        width: 90%;
        margin: 0 auto;
    }

    &.top {
        top: 100px;

        @media (min-width: 2560px) {
            top: 200px;
        }

        @media (max-width: 1910px) {
            top: 50px;
        }
    }

    &.bottom {
        bottom: 100px;

        @media (min-width: 2560px) {
            bottom: 200px;
        }

        @media (max-width: 1910px) {
            bottom: 50px;
        }
    }

    &.scrollDown {
        a.menuItem {
            opacity: 0.3;

            &:hover {
                opacity: 1;
            }
        }
    }

    a.menuItem {
        font-weight: 900;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: #F4998D;
        opacity: 1;
        transition: all .5s;

        &:hover {
            color: #ffffff;
        }
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
    background-color: transparent;
    border: 3px solid #F4998D;
    border-radius: 5px;
    padding: 10px;
    color: #F4998D;
    font-weight: bold;
    display: inline-block;
    transition: background 0.5s;
    width: 180px;

    &:hover {
        background: rgba(244, 153, 141, 0.3);
        cursor: pointer;
    }
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
