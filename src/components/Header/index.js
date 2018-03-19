import React from 'react'
import Link from 'gatsby-link'

import MainLogo from '../../assets/header__logo.svg';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <Link to="/">      
        <img className="img-responsive" width="130px" src={ MainLogo } alt="" />
      </Link>
    </div>
    <div className="header__navBar">
      <Link to="/">Back to Revain</Link>
    </div>
  </header>
)

export default Header


