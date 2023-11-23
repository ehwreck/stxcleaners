import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './footer.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function FacebookIcon({ facebookLink }) {
  if (facebookLink) {
    return (
      <a href={facebookLink} aria-label="Navigate to Facebook">
        <FontAwesomeIcon
          icon={faFacebook}
          beat
          style={{
            color: '#ffffff', fontSize: 36, marginLeft: 40, marginRight: 40,
          }}
          href={facebookLink}
        />
      </a>
    );
  }
  return null;
}

FacebookIcon.propTypes = {
  facebookLink: PropTypes.string,
};

FacebookIcon.defaultProps = {
  facebookLink: null,
};

function TwitterIcon({ twitterLink }) {
  if (twitterLink) {
    return (
      <a href={twitterLink} aria-label="Navigate to Twitter">
        <FontAwesomeIcon
          icon={faTwitter}
          beat
          style={{
            color: '#ffffff', fontSize: 36, marginLeft: 40, marginRight: 40,
          }}
        />
      </a>
    );
  }
  return null;
}

TwitterIcon.propTypes = {
  twitterLink: PropTypes.string,
};

TwitterIcon.defaultProps = {
  twitterLink: null,
};

function InstagramIcon({ instagramLink }) {
  if (instagramLink) {
    return (
      <a href={instagramLink} aria-label="Navigate to Instagram">
        <FontAwesomeIcon
          icon={faInstagram}
          beat
          style={{
            color: '#ffffff', fontSize: 36, marginLeft: 40, marginRight: 40,
          }}
        />
      </a>
    );
  }
  return null;
}

InstagramIcon.propTypes = {
  instagramLink: PropTypes.string,
};

InstagramIcon.defaultProps = {
  instagramLink: null,
};

function Footer(props) {
  const {
    dark, facebookLink, twitterLink, instagramLink,
  } = props;

  const year = new Date().getFullYear();
  const theme = dark ? 'dark-main-footer' : 'light-main-footer';

  return (
    <>
      <div className={theme}>
        <h5 id="follow-label">
          <hr className="inline-hr" />
          Follow us on
          <hr className="inline-hr" />
        </h5>
        <div id="footer-social-icons">
          <FacebookIcon facebookLink={facebookLink} />
          <TwitterIcon twitterLink={twitterLink} />
          <InstagramIcon instagramLink={instagramLink} />
        </div>
        <ul className="footer-navigation-menu">
          <li>
            <Link to="/">Home.</Link>
          </li>
          <li>
            <Link to="/about">About.</Link>
          </li>
          <li>
            <Link to="/residential">Services.</Link>
          </li>
          <li>
            <Link to="/commercial">Contact.</Link>
          </li>
        </ul>
      </div>
      <div className="footer-credits">
        <span>
          {`Copyright ${year} · Developed by `}
          <a className="footer-developer-name" href="https://www.github.com/ehwreck">Erick Trevino</a>
        </span>
      </div>
    </>
  );
}

Footer.propTypes = {
  dark: PropTypes.bool,
  facebookLink: PropTypes.string,
  twitterLink: PropTypes.string,
  instagramLink: PropTypes.string,
};

Footer.defaultProps = {
  dark: true,
  facebookLink: '',
  twitterLink: null,
  instagramLink: null,
};

export default Footer;
