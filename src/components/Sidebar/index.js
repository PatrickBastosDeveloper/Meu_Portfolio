import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import {
  // FacebookShareButton,
  // FacebookIcon,
  // WhatsappShareButton,
  // WhatsappIcon
} from 'react-share'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'

import { FaGithub, FaLinkedin, /* FaFacebook, FaWhatsapp */ } from 'react-icons/fa'

export default function Sidebar() {
  // const shareUrl = 'https://www.linkedin.com/in/patrickbastosdeveloper/'
  return (
    <div className="nav-bar">
      <Link className="logo" to="/"></Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        {/* <li className='share-buttom'>
          <FacebookShareButton
            url={ shareUrl }
            quote={ 'Texto teste sharebottom' }>
            <FaFacebook className='facebook' size={ 30 } round={ true } />
          </FacebookShareButton>
          <WhatsappShareButton
            url={ shareUrl }
            quote={ 'Texto teste sharebottom' }>
            <FaWhatsapp className='whatsapp'size={ 30 } round={ true } />
          </WhatsappShareButton>
        </li> */}
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/PatrickBastosDeveloper"
          >
            <FaGithub size={30} className="github" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/patrickbastosdeveloper/"
          >
            <FaLinkedin size={30} className="linkedin" />
          </a>
        </li>
      </ul>
    </div>
  )
}
