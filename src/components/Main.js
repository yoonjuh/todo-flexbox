import React from 'react';

import img1 from '../img/hotel-1.jpg';
import img2 from '../img/hotel-2.jpg';
import img3 from '../img/hotel-3.jpg';

const Main = () => (
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
);

export default Main;
