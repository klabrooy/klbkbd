import React, {useState} from 'react'

import { Link } from 'gatsby'
import close from '../img/close-24px.svg'
import logo from '../img/klb.svg'
import menu from '../img/menu-24px.svg'

const Navbar = () => {
    const [mobileMenuOpen, toggleMobileMenuOpen] = useState(false);
    return (
      <nav
        id='nav'
        role="navigation"
        aria-label="main-navigation"
        className={`container nav ${mobileMenuOpen ? 'open' : ''}`}
      >
        <div className='nav_content'>
          <div className='nav_mobile_wrapper'>
            <img src={menu} className={`nav_mobile-menu-icon ${mobileMenuOpen ? 'hide': ''}`} onClick={() => toggleMobileMenuOpen(!mobileMenuOpen)}/>
            <img src={close} className={`nav_mobile-close-icon ${!mobileMenuOpen ? 'hide': ''}`} onClick={() => toggleMobileMenuOpen(!mobileMenuOpen)}/>
          </div>
          <div id="nav-logo" className='container'>
            <Link to="/" className="nav_item" title="Logo">
              <img src={logo} alt="klbkbd logo" className='nav_logo' />
            </Link>
          </div>
          <div
            id="nav-menu" className={`container nav_menu ${!mobileMenuOpen ? 'hide': ''}`}
          >
            <div>
              <Link className='nav_item' activeClassName="active" to="/about">
                about
              </Link>
              <Link className='nav_item' activeClassName="active" to="/services">
                services
              </Link>
              <Link className='nav_item' activeClassName="active" to="/explore">
                explore
              </Link>
              <Link className='nav_item' activeClassName="active" to="/contact">
                contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
