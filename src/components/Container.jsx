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
    ContentWrapper
} from './Layout';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import useRouter from './useRouter';
import MobileMenu from './MobileMenu';
import { useWidthGreaterThan } from './useBreakpoints';

const Container = () => {
    const router = useRouter();
    const isDesktop = useWidthGreaterThan(1024, false);
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    console.log(isDesktop);
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
            {isDesktop ?
                <Menu
                    menuWrapperTopRef={menuWrapperTopRef}
                    menuWrapperBottomRef={menuWrapperBottomRef}
                    setIsMenuHovered={setIsMenuHovered}
                />
                :
                <MobileMenu />
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