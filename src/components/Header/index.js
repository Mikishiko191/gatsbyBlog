import React, { Component} from 'react';
import Link from 'gatsby-link'

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
        <div className="header__flex">
          <div className="header__logo">
            <Link to="/">      
              <img className="img-responsive" width="130px" src={ MainLogo } alt="" />
            </Link>
          </div>
          <div className="header__navBar">
            <div className="header__btn">
             <Link className="backBtn" to="/page-2/">FAQ</Link>
            </div>
            <div className="header__btn">
              <a className="backBtn" href={ url }>{ name }</a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header





