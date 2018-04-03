import React from 'react';
import Icon from './icon';

const SideItems = ({ section, icon }) => (
  <li className="side-nav__item">
    <a href="#" className="side-nav__link">
      <Icon className="side-nav__icon" icon={icon} />
    </a>
    <span>{section}</span>
  </li>
);

export default SideItems;
