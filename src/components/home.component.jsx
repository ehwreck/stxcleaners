import React from 'react';
import NavigationMenu from './navigation.component';
import Carousel from './carousel.component';

const images = [
  '/assets/images/verne-ho-MwW-zrkYSIU-unsplash.jpg',
  '/assets/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg',
  '/assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg',
];

function Home() {
  return (
    <>
      <NavigationMenu />
      <Carousel name="main-slider" autoplay delay={3000} images={images} />
    </>
  );
}

export default Home;
