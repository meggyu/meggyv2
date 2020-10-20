/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useRef,
    useEffect
} from 'react';
import styled from 'styled-components';

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

const Menu = ({ setMenuWrapperTop, setMenuWrapperBottom, setIsMenuHovered }) => {
    const menuWrapperTopRef = useRef();
    const menuWrapperBottomRef = useRef();

    useEffect(() => {
        if (!menuWrapperTopRef.current && !menuWrapperBottomRef.current) return;

        setMenuWrapperTop(menuWrapperTopRef);
        setMenuWrapperBottom(menuWrapperBottomRef);
    }, [menuWrapperTopRef, menuWrapperBottomRef])

    return (
        <React.Fragment>
            <MenuWrapper className="top" ref={menuWrapperTopRef}>
                <div onMouseEnter={() => setIsMenuHovered(true)} onMouseLeave={() => setIsMenuHovered(false)}>
                    <a id="UpperLeft" className="menuItem" href="#about">About</a>
                </div>
                <div onMouseEnter={() => setIsMenuHovered(true)} onMouseLeave={() => setIsMenuHovered(false)}>
                    <a id="UpperRight" className="menuItem" href="#portfolio">Portfolio</a>
                </div>
            </MenuWrapper>
            <MenuWrapper className="bottom" ref={menuWrapperBottomRef}>
                <div onMouseEnter={() => setIsMenuHovered(true)} onMouseLeave={() => setIsMenuHovered(false)}>
                    <a id="BottomLeft" className="menuItem" href="https://drive.google.com/file/d/1g8-C6ZV6NckASyrh4qVw8NgKnV8T0OOm/view?usp=sharing" target="_blank">Resume</a>
                </div>
                <div onMouseEnter={() => setIsMenuHovered(true)} onMouseLeave={() => setIsMenuHovered(false)}>
                    <a id="BottomRight" className="menuItem" href="#contact">Contact</a>
                </div>
            </MenuWrapper>
        </React.Fragment>
    );
};

export default Menu;
