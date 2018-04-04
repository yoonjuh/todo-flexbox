import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';

const SideItems = ({ section, icon, index }) => (
  <li className="side-nav__item" key={index}>
    <a href="#" className="side-nav__link">
      <Icon className="side-nav__icon" icon={icon} />
      <span>{section}</span>
    </a>
  </li>
);
SideItems.propTypes = {
  section: PropTypes.string.isRequired,
  // index: PropTypes.string.isRequired,
};

export default SideItems;
