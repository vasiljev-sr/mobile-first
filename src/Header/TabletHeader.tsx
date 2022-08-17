import React, {FC} from "react";
import {Logo} from "../Icons/Logo";


export const TabletHeader:FC = () => {
  return(
    <header className='header'>
      <div className='header__tablet-container'>
        <Logo/>
        <ul className=' navigation header__tablet-navigation'>
          <li className='navigation__item header__tablet-navigation-item'>Календарь</li>
          <li className='navigation__item header__tablet-navigation-item'>Отзывы</li>
          <li className='navigation__item header__tablet-navigation-item'>Магазин</li>
          <li className='navigation__item header__tablet-navigation-item'>Контакты</li>
        </ul>
      </div>
    </header>
  )

}