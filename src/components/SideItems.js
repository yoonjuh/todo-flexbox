import React from 'react';
import Icon from './icon';

const SideItems = ({ section, icon }) => (
  <li className="side-nav__item">
    <a href="#" className="side-nav__link">
      <Icon className="side-nav__icon" icon={icon} />
      <span>{section}</span>
    </a>
  </li>
);

export default SideItems;
