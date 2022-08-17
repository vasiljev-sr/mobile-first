import React, {FC, useEffect, useState} from 'react';
import {Logo} from "../Icons/Logo";
import {Cross} from "../Icons/Cross";
import {Burger} from "../Icons/Burger";
import {CSSTransition} from "react-transition-group";
import './Header.css'

export const MobileHeader: FC = () => {
  const [isOpenMenu, toggleMenu] = useState(false);

  const documentKeydownListener = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      toggleMenu(false);
    }
  };

  useEffect(() => {
    if (isOpenMenu) {
      document.documentElement.classList.add('--prevent-scroll');
    }

    return () => {
      document.documentElement.classList.remove('--prevent-scroll');
    };
  }, [isOpenMenu]);

  useEffect(() => {
    if (isOpenMenu) {
      document.addEventListener('keydown', documentKeydownListener);
    } else {
      document.removeEventListener('keydown', documentKeydownListener);
    }

    return () => {
      document.removeEventListener('keydown', documentKeydownListener);
    };
  }, [isOpenMenu]);

  return (
    <header className="header">
      <div className="header__mobile-container">
        <Logo />
        <button className="header__mobile-button" onClick={() => toggleMenu(!isOpenMenu)}>
          {isOpenMenu ? <Cross /> : <Burger />}
        </button>
      </div>
      <CSSTransition in={isOpenMenu} mountOnEnter unmountOnExit timeout={300} classNames="header-mobile-menu-animation">
        <div className='header__mobile-overlay' onClick={() => toggleMenu(false)}>
          <div className="header__mobile-menu" onClick={(e) => e.stopPropagation()}>
            <ul className='navigation header__mobile-navigation'>
              <li className='navigation__item header__mobile-navigation-item'>Календарь</li>
              <li className='navigation__item header__mobile-navigation-item'>Отзывы</li>
              <li className='navigation__item header__mobile-navigation-item'>Магазин</li>
              <li className='navigation__item header__mobile-navigation-item'>Контакты</li>
            </ul>
          </div>
        </div>
      </CSSTransition>
    </header>
  );
};