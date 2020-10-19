/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useRef,
    useState,
    useEffect
} from 'react';
import gsap from 'gsap';
import throttle from 'lodash/throttle';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
   
import {
    Wrapper,
    ContentWrapper,
    MenuWrapper
} from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import useRouter from './useRouter';
import MobileMenu from './MobileMenu';
import { useWidthGreaterThan } from './useBreakpoints';

const Container = () => {
    const router = useRouter();
    const isMobile = useWidthGreaterThan(1024, false);
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    
    const menuWrapperTopRef = useRef();
    const menuWrapperBottomRef = useRef();
    const wrapperRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
        if (router.location.hash) {
            gsap.to(window, {
                scrollTo: `${router.location.hash}`
            });
        }
    }, []);

    useEffect(() => {
        if (!menuWrapperTopRef.current && !menuWrapperBottomRef.current) return;
        let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        window.addEventListener('scroll', throttle(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollPosition) {
                menuWrapperTopRef.current.classList.add('scrollDown');
                menuWrapperBottomRef.current.classList.add('scrollDown');
            } else {
                menuWrapperTopRef.current.classList.remove('scrollDown');
                menuWrapperBottomRef.current.classList.remove('scrollDown');
            }
            lastScrollPosition = scrollTop <= 0 ? 0 : scrollTop;
        }, 100));
    }, [menuWrapperTopRef, menuWrapperBottomRef]);

    useEffect(() => {
        if (!wrapperRef.current) return;
        if (isMenuHovered) {
            wrapperRef.current.classList.add('overlay');
            menuWrapperTopRef.current.classList.remove('scrollDown');
            menuWrapperBottomRef.current.classList.remove('scrollDown');
        } else {
            wrapperRef.current.classList.remove('overlay');
        }
    }, [wrapperRef, isMenuHovered]);

    // useEffect(() => {
    //     if (router.location.hash === '#contact') {
    //         menuWrapperTopRef.current.classList.remove('scrollDown');
    //         menuWrapperBottomRef.current.classList.remove('scrollDown');
    //     }
    // }, [router.location.hash]);

    return (
        <Wrapper ref={wrapperRef}>
            {isMobile ?
                <MobileMenu>

                </MobileMenu>
                :
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
                            <a id="BottomLeft" className="menuItem" href="#resume">Resume</a>
                        </div>
                        <div onMouseEnter={() => setIsMenuHovered(true)} onMouseLeave={() => setIsMenuHovered(false)}>
                            <a id="BottomRight" className="menuItem" href="#contact">Contact</a>
                        </div>
                    </MenuWrapper>
                </React.Fragment>
            }
            <ContentWrapper>
                <Home />
                <About />
                <Portfolio />
                <Contact />
            </ContentWrapper>
        </Wrapper>
    );
}

export default Container;