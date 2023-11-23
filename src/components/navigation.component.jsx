import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';

function NavigationMenu() {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [transparent, setTransparent] = useState(true);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  }, [scrollPosition]);

  return (
    <nav id={transparent ? 'main-navigation-transparent' : 'main-navigation'} className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid w-75">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faBroom} id={transparent ? 'main-header-logo-transparent' : 'main-header-logo'} />
          {/* <img src="/assets/images/clean-color.png" id="main-header-logo" alt="logo" /> */}
          <span id={transparent ? 'header-brand-transparent' : 'header-brand'}>STX Cleaning</span>
        </Link>
        <div className="d-flex">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/' || location.pathname === '' ? 'active' : ''} ${transparent ? 'transparent-link' : ''}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className={location.pathname === 'about' ? 'nav-link active' : 'nav-link'} to="/about">About</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;
