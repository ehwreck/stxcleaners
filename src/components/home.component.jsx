import React from 'react';
import NavigationMenu from './navigation.component';
import Carousel from './carousel.component';

function Home() {
  return (
    <>
      <NavigationMenu />
      <div id="main-header-bg">
        <div>
          <h1 id="main-big-header">Clean</h1>
          <h2 id="main-subtitle">Residential - Commercial - Everything</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
