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
`;

const ItemPicture = styled.div`
    @media (max-width: 1025px) {
        align-self: center;
        padding-bottom: 50px;
    }

    &.leftAlign {
        padding-right: 100px;

        @media (max-width: 1910px) {
            padding-right: 50px;
        }

        @media (max-width: 1025px) {
            padding-right: 0;
        }
    }

    &.rightAlign {
        padding-left: 100px;

        @media (max-width: 1910px) {
            padding-left: 50px;
        }

        @media (max-width: 1025px) {
            padding-left: 0;
        }
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
    const isMobile = useWidthGreaterThan(1024, false);

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

            <ItemWrapper className="itemWrapper">
                <ItemPicture className="leftAlign">
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
            </ItemWrapper>

            {isMobile ?
                <ItemWrapper className="itemWrapper">
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
                    <ItemPicture className="rightAlign">
                        <a href="https://playhearthstone.com/en-us/" target="_blank" rel="noopener noreferrer">
                            <img src="img/siteNavigation.jpg" alt="Descent of Dragons" />
                        </a>
                    </ItemPicture>
                </ItemWrapper>
                :
                <ItemWrapper className="itemWrapper">
                    <ItemPicture className="rightAlign">
                        <a href="https://playhearthstone.com/en-us/" target="_blank" rel="noopener noreferrer">
                            <img src="img/siteNavigation.jpg" alt="Descent of Dragons" />
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
            }

            <ItemWrapper className="itemWrapper">
                <ItemPicture className="leftAlign">
                    <a href="https://playhearthstone.com/en-us/" target="_blank" rel="noopener noreferrer">
                        <img src="img/homepageCards.jpg" alt="Home Page Card Carousel" />
                    </a>
                </ItemPicture>
                <ItemDescription>
                    <h2>Randomized Card Module</h2>
                    2019
                    <p>
                        A card module similar to the ones in expansion pages, but now built in React instead of Jade. This module gets an
                        array of cards from the latest expansion using our Card API and randomly returns 1 Legendary card, 1 Epic card, 1
                        Rare card, and 2 Common cards. 
                    </p>
                    <a href="https://playhearthstone.com/en-us/" target="_blank" rel="noopener noreferrer">See it live →</a>
                </ItemDescription>
            </ItemWrapper>
        </PortfolioWrapper>
    )
};

export default Portfolio;
