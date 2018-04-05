import React from 'react';
import Icon from './icon';
import img1 from '../img/hotel-1.jpg';
import img2 from '../img/hotel-2.jpg';
import img3 from '../img/hotel-3.jpg';

const HotelHeader = props => (
  <div>
    <div className="gallery">
      <figure className="gallery__item">
        <img src={img1} alt="Photo of hotel 1" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src={img2} alt="Photo of hotel 1" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src={img3} alt="Photo of hotel 1" className="gallery__photo" />
      </figure>
    </div>
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>
      <div className="overview__stars">
        <Icon className="overview__icon-star" icon="icon-star" />
        <Icon className="overview__icon-star" icon="icon-star" />
        <Icon className="overview__icon-star" icon="icon-star" />
        <Icon className="overview__icon-star" icon="icon-star" />
        <Icon className="overview__icon-star" icon="icon-star" />
      </div>
      <div className="overview__location">
        <Icon className="overview__icon-location" icon="icon-location-pin" />
        <button className="btn-inline">Albufeira, Portugal</button>
      </div>
      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 votes</div>
      </div>
    </div>
  </div>
);

export default HotelHeader;
