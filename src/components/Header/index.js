import React, { Component} from 'react';
import {Container} from 'reactstrap'
import MainLogo from '../../assets/header__logo.svg';

class Header extends Component {
  render() {
    const { name, url } = this.props
    return (
      
      <header className="header">
      <Container>
        <div className="header__flex">
          <div className="header__logo">
            <a href="http://revain.org">      
              <img className="img-responsive" width="130px" src={ MainLogo } alt="" />
            </a>
          </div>
          <div className="header__navBar">
            <div className="header__wrap">
              <div className="header__btn">
                <a className="backBtn" href='http://dashboard.revain.org?utm_source=website&utm_campaign=revain.org'>Try 0.9</a>
              </div>
              <div className="header__hide">
                <a className="hide" href='http://revain.org/#about'>About</a>
              </div>
              <div className="header__hide">
                <a className="hide" href='http://revain.org/#features'>Features</a>
              </div>
              <div className="header__hide">
                <a className="hide" href='http://revain.org/#arc'>Architecture</a>
              </div>
            </div>
            <div className="header__wrap">
              <div className="header__hide">
                <a className="hide" href='http://revain.org/#pubs'>Publications</a>
              </div>
              <div className="header__btn back">
                <a className="backBtn" href={ url }>{ name }</a>
              </div>
            </div>
          </div>
        </div>
        </Container>
      </header>
      
    )
  }
}

export default Header





