import React from 'react';
import svg from '../img/sprite.svg';

const Icon = ({ className, icon }) => (
  <svg className={className}>
    <use xlinkHref={`${svg}#${icon}`} />
  </svg>
);

export default Icon;
