import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavigationMenu() {
  const location = useLocation();

  return (
    <nav id="main-navigation" className="navbar fixed-top navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid w-75">
        <Link to="/" className="navbar-brand">
          <img src="/assets/images/clean-color.png" id="main-header-logo" alt="logo" />
          <span id="header-brand">STX Cleaners</span>
        </Link>
        <div className="d-flex">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={location.pathname === '/' || location.pathname === '' ? 'nav-link active' : 'nav-link'} to="/">Home</Link>
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
