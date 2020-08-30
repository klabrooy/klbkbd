import { Link } from 'gatsby'
import React from 'react'
import github from '../img/social/github-icon.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        id='footer'
        role="footer"
        aria-label="footer"
        className='container footer'
      >
        <div className='footer_content'>
          <Link to="https://www.instagram.com/klbkbd" className="footer_item" title="instagram">
            <img src={instagram} alt="instagram logo"/>
          </Link>
          <Link to="https://www.github.com/klabrooy" className="footer_item" title="github">
            <img src={github} alt="github logo"/>
          </Link>
        </div>
      </footer>
    )
  }
}

export default Footer
