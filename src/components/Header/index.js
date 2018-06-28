import React, { Component} from 'react';
import Link from 'gatsby-link'
import {Container} from 'reactstrap'
import MainLogo from '../../assets/header__logo.svg';

// const Header = () => (
//   <header className="header">
//     <div className="header__flex">
//       <div className="header__logo">
//         <Link to="/">      
//           <img className="img-responsive" width="130px" src={ MainLogo } alt="" />
//         </Link>
//       </div>
//       <div className="header__navBar">
//         <a href="http://revain.org">Back to Revain</a>
//       </div>
//     </div>
//   </header>
// )

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
                <a className="backBtn" href='https://dashboard.revain.org'>Try 0.8</a>
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





