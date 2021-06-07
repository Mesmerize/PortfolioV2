import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div>
            <nav className='navbar'>
            <a className='logo' href="#">B</a>
            {/* Mobile Nav */}
            {/* <div className="mobile-menu-icons">
                <input type="checkbox" id='nav_bars' className='nav_bars' />
                <label for='nav_bars' className='nav_toggle'>
                <FontAwesomeIcon icon={faBars} size='2x' id='nav_bars' className='example linkedin' />
                </label>
            </div> */}
                <ul className='menu'>
                    <li className='item'> <a href="#skills">SKILLS</a></li>
                    <li className='item'> <a href="#projects">PROJECTS</a></li>
                    <li className='item'> <a href="#contact-me">CONTACT ME</a></li>
                </ul>
                {/* <ul className='mobile-menu'>
                    <li className='mobile-item'> <a href="#skills">SKILLS</a></li>
                    <li className='mobile-item'> <a href="#projects">PROJECTS</a></li>
                    <li className='mobile-item'> <a href="#contact-me">CONTACT</a></li>
                </ul> */}
            </nav>
        </div>
    )
}

export default NavBar
