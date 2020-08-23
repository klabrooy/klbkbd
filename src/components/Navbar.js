import { Link } from 'gatsby'
import React from 'react'
import logo from '../img/drankoceanic-girl.svg'

const Navbar = class extends React.Component {
  getNavItemClass = (path) => {
    windowPath = typeof window !== 'undefined' ? window.location.pathname : '';
    if (windowPath === path) {
      return 'nav_item active'
    } else {
      return 'nav_item'
    }
  };
  render() {
    return (
      <nav
        id='nav'
        role="navigation"
        aria-label="main-navigation"
        className='container nav'
      >
        <div className='nav_content'>
          <div id="nav-logo" className='container'>
            <Link to="/" className="nav_item" title="Logo">
              <img src={logo} alt="drankoceanic girl" style={{ width: '300px' }} />
            </Link>
          </div>
          <div
            id="nav-menu" className='container nav_menu'
          >
            <div>
              <Link className={this.getNavItemClass('/about')} to="/about">
                about
              </Link>
              <Link className={this.getNavItemClass('/explore')} to="/explore">
                explore
              </Link>
              <Link className={this.getNavItemClass('/wear')} to="/wear">
                wear
              </Link>
              <Link className={this.getNavItemClass('/contact')} to="/contact">
                contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
