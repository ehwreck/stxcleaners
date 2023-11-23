import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import NavigationMenu from './navigation.component';
import Footer from './footer.component';
import './home.styles.css';

function Home() {
  return (
    <>
      <NavigationMenu />
      <div id="main-header-bg">
        <div>
          <h1 id="main-big-header">Clean</h1>
          <h2 id="main-subtitle">Precision in Every Detail, Perfection in Every Cleanse</h2>
        </div>
      </div>
      <div id="welcome">
        <h3>Welcome to STX Cleaning - Your Trusted Cleaning Partner</h3>
        <p>At STX Cleaning, we understand the importance of a clean and healthy living or working environment. With our professional cleaning services, we take the hassle out of maintaining a pristine space, allowing you to focus on what matters most.</p>
      </div>
      <Footer dark facebookLink="https://www.facebook.com" twitterLink="https://www.twitter.com" instagramLink="https://www.instagram.com" />
    </>
  );
}

export default Home;
