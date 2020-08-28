import { Link } from 'gatsby'
import React from 'react'
import logo from '../img/klb.svg'

const Navbar = class extends React.Component {
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
              <img src={logo} alt="klbkbd logo" className='nav_logo' />
            </Link>
          </div>
          <div
            id="nav-menu" className='container nav_menu'
          >
            <div>
              <Link className='nav_item' activeClassName="active" to="/about">
                /about
              </Link>
              <Link className='nav_item' activeClassName="active" to="/services">
                /services
              </Link>
              <Link className='nav_item' activeClassName="active" to="/explore">
                /explore
              </Link>
              <Link className='nav_item' activeClassName="active" to="/contact">
                /contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
