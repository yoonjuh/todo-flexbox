import React from 'react';
import img from '../img/logo.png';
import Icon from './icon';
import UserPic from '../img/user.jpg';

const Header = () => (
  <header className="header">
    <img src={img} alt="trillo logo" className="logo" />
    <form action="#" className="search">
      <input type="text" className="search__input" placeholder="Search hotels" />
      <button className="search__button">
        <Icon className="search__icon" icon="icon-magnifying-glass" />
      </button>
    </form>
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <Icon className="user-nav__icon" icon="icon-bookmark" />
        <span className="user-nav__notification">7</span>
      </div>
      <div className="user-nav__icon-box">
        <Icon className="user-nav__icon" icon="icon-chat" />
        <span className="user-nav__notification">13</span>
      </div>
      <div className="user-nav__user">
        <img src={UserPic} alt="User photo" className="user-nav__user-photo" />
        <span className="user-nav__user-name">Edd</span>
      </div>
    </nav>
  </header>
);

export default Header;
