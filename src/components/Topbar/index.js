import { NavLink } from 'react-router-dom'
import './index.scss'
//import LogoS from '../../assets/images/logo-s.png'
import Title from '../../assets/images/cole-portfolio-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Topbar = () => (
    <div className= 'nav-bar'>
        <NavLink exact ="true" activeclassname="active" className='title-bar' to='/' usemap="#Map">
            <img src={Title} alt="Cole's Portfolio" />
        </NavLink>
        
    <nav>
    <NavLink exact ="true" activeclassname="active" className="resume-link" to="/resume">
        resume
    </NavLink>
    <NavLink exact ="true" activeclassname="active" className="about-link" to="/about">
        about me
    </NavLink>
    <NavLink exact ="true" activeclassname="active" className="about-link" to="/skills">
        skills
    </NavLink>
    <NavLink exact ="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="yellow" />
    </NavLink>
    </nav>
    </div>
)

export default Topbar