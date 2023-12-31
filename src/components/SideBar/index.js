import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/DJLogo.jpg'
import LogoSub from '../../assets/images/dheeraj_sub.jpg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsToEye, faEnvelope, faEye, faGears, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      {/* <img className='sub-logo' src={LogoSub} alt="dheeraj"/> */}
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="my-skills" to="/skills">
            <FontAwesomeIcon icon={faGears} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="my-work" to="/portfolio">
            <FontAwesomeIcon icon={faArrowsToEye} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

    </nav>
    <ul className='side-bar-ul'>
        <li className='side-bar-list'>
            <a target='_blank' 
            rel='noreferrer' 
            href='https://www.linkedin.com/in/dheerajkumarm'
            >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li className='side-bar-list'>
            <a target='_blank' 
            rel='noreferrer' 
            href='https://github.com/DheerajKumar19'
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
    </ul>
  </div>
)

export default Sidebar
