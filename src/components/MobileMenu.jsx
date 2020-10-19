import React, {
  useRef,
  useState,
  useEffect
} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileMenuWrapper = styled.div`
`;

const Hamburger = styled.button`
  height: 60px;
  width: 60px;
  z-index: 999;
  position: fixed;
  top: 50px;
  right: 50px;

  @media (max-width: 425px) {
    top: 30px;
    right: 30px;
  }
`;

const MenuList = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  backdrop-filter: blur(20px) brightness(0.3);
  z-index: -1;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 10px;
  opacity: 0;
  transition: all 0.5s;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin: 30px 0;

      a {
        color: #F4998D;
      }
    }
  }

  &.isOpen {
    opacity: 1;
    z-index: 9;
  }
`;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuListRef = useRef();

  useEffect(() => {
    if (!menuListRef.current) return;
    console.log(isOpen);
    if (isOpen) {
      menuListRef.current.classList.add('isOpen');
    } else {
      menuListRef.current.classList.remove('isOpen');
    }
  }, [menuListRef, isOpen]);

  return (
    <MobileMenuWrapper>
      <Hamburger onClick={() => setIsOpen(prevState => !prevState)}>
        {isOpen ?
          <FontAwesomeIcon icon="times" />
          :
          <FontAwesomeIcon icon="ellipsis-h" />
        }
      </Hamburger>
      <MenuList ref={menuListRef}>
        <ul>
          <li className="menuItem"><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li className="menuItem"><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
          <li className="menuItem"><a href="#resume" onClick={() => setIsOpen(false)}>Resume</a></li>
          <li className="menuItem"><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </MenuList>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
