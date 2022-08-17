import React, {FC} from "react";
import {Logo} from "../Icons/Logo";


export const DesktopHeader:FC = () => {
  return(
    <header className='header'>
      <div className='header__desktop-container'>
        <ul className=' navigation header__desktop-navigation'>
          <li className='navigation__item header__desktop-navigation-item'>Календарь</li>
          <li className='navigation__item header__desktop-navigation-item'>Отзывы</li>
        </ul>
        <Logo/>
        <ul className=' navigation header__desktop-navigation'>
          <li className='navigation__item header__desktop-navigation-item'>Магазин</li>
          <li className='navigation__item header__desktop-navigation-item'>Контакты</li>
        </ul>
      </div>

    </header>
  )

}