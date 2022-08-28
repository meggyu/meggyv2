/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useRef,
    useEffect
} from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import ScrollTrigger from 'gsap/ScrollTrigger';

import useRouter from './useRouter';
import { FadeInUp } from './Layout';
import { useWidthGreaterThan } from './useBreakpoints';

const PortfolioWrapper = styled.div`
    padding: 0 100px;

    @media (max-width: 1910px) {
        padding: 70px 70px 0;
    }

    @media (max-width: 425px) {
        padding: 70px 30px 0;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    opacity: 0;

    @media (max-width: 1025px) {
        flex-direction: column;
    }

    &.isVisible {
        opacity: 1;
        animation: 1s ${FadeInUp} ease-in-out;
    }

    &.leftAlign {
        img {
            margin-right: 30px;
        }
    }

    &.rightAlign {
        flex-direction: row-reverse;
        
        img {
            margin-left: 30px;
        }

        @media (max-width: 1025px) {
            flex-direction: column;

            img {
                margin-left: 0;
            }
        }
    }
`;

const ItemPicture = styled.div`
    @media (max-width: 1025px) {
        align-self: center;
        padding-bottom: 50px;
    }

    img {
        filter: brightness(0.5);
        transition: filter 0.5s;

        &:hover {
            filter: brightness(1);
        }
    }
`;

const ItemDescription = styled.div`
    width: 50%;

    @media (max-width: 1025px) {
        width: 100%;
    }
`;

const Portfolio = () => {
    const router = useRouter();
    const portfolioWrapperRef = useRef();
    const isDesktop = useWidthGreaterThan(1024, false);

    useEffect(() => {
        if (!portfolioWrapperRef.current) return;
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.itemWrapper').forEach((item) => {
            ScrollTrigger.create({
                trigger: item,
                start: 'top center',
                onEnter: () => {
                    item.classList.add('isVisible');
                    router.push('#portfolio');
                },
                onEnterBack: () => {
                    router.push('#portfolio');
                }
            })
        });
    }, [portfolioWrapperRef]);

    return (
        <PortfolioWrapper id="portfolio" ref={portfolioWrapperRef}>
            <h1>Portfolio</h1>

            <ItemWrapper className="itemWrapper leftAlign">
                <ItemPicture>
                    <a href="https://mal-nextjs.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src="img/myAnimeList.jpg" alt="MyAnimeList.net" />
                    </a>
                </ItemPicture>
                <ItemDescription>
                    <h2>MyAnimeList.net (Personal Redesign)</h2>
                    2022
                    <p>
                        A personal project to redesign the current <a href="https://myanimelist.net/" target="_blank" rel="noopener noreferrer">
                        MyAnimeList.net</a> site. The current MAL site has stayed largely the same design- and UX-wise since its launch in
                        2004, and it is neither modern nor user-friendly. This personal redesign was a chance for me to refresh my skills in React,
                        Next.js, server/client-side rendering, and APIs. I also learned to use the Vercel deployment workflow, which made
                        deploying my new app very simple. It was great to be able to design and develop a project from scratch!
                    </p>
                    <a href="https://mal-nextjs.vercel.app/" target="_blank" rel="noopener noreferrer">See it live →</a>
                </ItemDescription>
            </ItemWrapper>

            <ItemWrapper className="itemWrapper rightAlign">
                <ItemPicture>
                    <a href="https://warcraftrumble.blizzard.com/en-us/" target="_blank" rel="noopener noreferrer">
                        <img src="img/gryphon.jpg" alt="Warcraft Arclight Rumble" />
                    </a>
                </ItemPicture>
                <ItemDescription>
                    <h2>Warcraft Arclight Rumble</h2>
                    2022
                    <p>
                        Announcement site for Blizzard’s upcoming Warcraft mobile game. Another site built using our in-house web components library,
                        I was able to quickly develop the template following the design mocks. While our component library made development relatively
                        easy, there were several styling challenges that had to be overcome, a downside of using such rigid components. However, I was 
                        able to deliver one of the more fun and quirky sites Blizzard has come out with in a while, and I’m particularly happy with the
                        little Easter egg animations scattered throughout the site! 
                    </p>
                    <a href="https://warcraftrumble.blizzard.com/en-us/" target="_blank" rel="noopener noreferrer">See it live →</a>
                </ItemDescription>
            </ItemWrapper>

            <ItemWrapper className="itemWrapper leftAlign">
                <ItemPicture>
                    <a href="https://diabloimmortal.blizzard.com/en-us/" target="_blank" rel="noopener noreferrer">
                        <img src="img/diabloImmortal.jpg" alt="Diablo Immortal" />
                    </a>
                </ItemPicture>
                <ItemDescription>
                    <h2>Diablo Immortal</h2>
                    2021
                    <p>
                        Announcement site for Diablo Immortal, Blizzard’s mobile Diablo game. Our team had gone through many iterations of
                        creating a shared library to streamline the creation of our announcement sites and Diablo Immortal was the first to
                        be fully developed and deployed using our in-house base web components library. Through this project, I was able to
                        familiarize myself with other reusable component libraries such as web components as well as improve my Argo and K8s
                        knowledge. 
                    </p>
                    <a href="https://diabloimmortal.blizzard.com/en-us/" target="_blank" rel="noopener noreferrer">See it live →</a>
                </ItemDescription>
            </ItemWrapper>

            <ItemWrapper className="itemWrapper rightAlign">
                <ItemPicture>
                    <a href="https://playhearthstone.com/en-us/expansions-adventures/madness-at-the-darkmoon-faire/" target="_blank" rel="noopener noreferrer">
                        <img src="img/madnessAtDarkmoon.jpg" alt="Madness at the Darkmoon Faire" />
                    </a>
                </ItemPicture>
                <ItemDescription>
                    <h2>Madness at the Darkmoon Faire</h2>
                    2020
                    <p>
                        Announcement site for Hearthstone’s nineteenth expansion, Madness at the Darkmoon Faire. This is only the second 
                        expansion so far to be developed completely in React with a lot of interactable Easter eggs scattered throughout
                        the desktop version. This site is one of the more interactive projects I’ve worked on, using GSAP’s animation
                        timeline and scroll trigger libraries.
                    </p>
                    <a href="https://playhearthstone.com/en-us/expansions-adventures/madness-at-the-darkmoon-faire/" target="_blank" rel="noopener noreferrer">See it live →</a>
                </ItemDescription>
            </ItemWrapper>

            {/* <ItemWrapper className="itemWrapper leftAlign">
                <ItemPicture>
                    <a href="https://playhearthstone.com/en-us/" target="_blank" rel="noopener noreferrer">
                        <img src="img/siteNavigation.jpg" alt="Site Navigation in React" />
                    </a>
                </ItemPicture>
                <ItemDescription>
                    <h2>Site Navigation in React</h2>
                    2020
                    <p>
                        All three of Hearthstone’s sites (Hearthstone, Hearthstone Esports, and Fireside Gatherings) share the same site 
                        navigation, but there wasn’t an easy way to navigate between them. The navigation update involved rebuilding
                        the menu in React and making it into, getting the backend to retrieve nav data from Contentstack, and style changes. 
                    </p>
                    <a href="https://playhearthstone.com/en-us/" target="_blank" rel="noopener noreferrer">See it live →</a>
                </ItemDescription>
            </ItemWrapper>

            <ItemWrapper className="itemWrapper rightAlign">
                <ItemPicture>
                    <a href="https://playhearthstone.com/en-us/expansions-adventures/descent-of-dragons" target="_blank" rel="noopener noreferrer">
                        <img src="img/descentOfDragons.jpg" alt="Descent of Dragons" />
                    </a>
                </ItemPicture>
                <ItemDescription>
                    <h2>Descent of Dragons</h2>
                    2019
                    <p>
                        Announcement site for Hearthstone’s seventeenth expansion, Descent of Dragons. This was the first expansion that
                        deviated from our older expansion templates, with a seamless background that continued until the end of the page
                        and some custom Easter egg animations. Built using JavaScript, Jade, and some React.
                    </p>
                    <a href="https://playhearthstone.com/en-us/expansions-adventures/descent-of-dragons" target="_blank" rel="noopener noreferrer">See it live →</a>
                </ItemDescription>
            </ItemWrapper> */}
        </PortfolioWrapper>
    )
};

export default Portfolio;
