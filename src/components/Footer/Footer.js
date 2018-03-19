import React from 'react'
import MainLogo from '../../assets/footer__logo.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__grid wrapper">
      <div className="footer__logo">
        <img className="img-responsive" width="200px" src={ MainLogo } alt="" />
      </div>
      <div className="footer__copyright">
        <p>© 2018 Revain Inc. </p>
      </div>
      <div className="footer__content">
        <p>First Trustworthy Review Platform, Built With Blockchain Technology</p>
      </div>
    </div>
  </footer>
)

export default Footer
