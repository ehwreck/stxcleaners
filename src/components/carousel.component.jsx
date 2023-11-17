import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Carousel(props) {
  const {
    name, autoplay, delay, images,
  } = props;

  const [autoplayActive, setAutoplayActive] = useState(autoplay);

  return (
    <div>
      <div id={`${name}-carousel`} className="carousel slide carousel-fade" data-bs-ride={autoplayActive ? 'carousel' : ''}>
        <div className="carousel-inner">
          {
            images.map((image, index) => (
              <div key={`carousel-image-${Math.random(index)}`} className={index === 0 ? 'carousel-item active' : 'carousel-item'} data-bs-interval={delay}>
                <img src={image} className="d-block w-100" alt="..." />
              </div>
            ))
          }
        </div>
        <button id="carousel-previous-button" className="carousel-control-prev" type="button" data-bs-target={`#${name}-carousel`} data-bs-slide="prev" onClick={() => setAutoplayActive(false)}>
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button id="carousel-next-button" className="carousel-control-next" type="button" data-bs-target={`#${name}-carousel`} data-bs-slide="next" onClick={() => setAutoplayActive(false)}>
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  name: PropTypes.string,
  autoplay: PropTypes.bool,
  delay: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
};

Carousel.defaultProps = {
  name: `unique-${Math.random()}`,
  autoplay: true,
  delay: 1500,
  images: [],
};

export default Carousel;
