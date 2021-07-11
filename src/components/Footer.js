import React, {useEffect} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 1200});
    }, []);
    return (
        <footer>
            <nav className='navbar navbar2'>
            <h1 className='copyright'>© {(new Date().getFullYear())} BRANDON</h1>
                <ul className='menu menu2'>
                    <li className='item'> <a href="https://www.linkedin.com/in/mesmerize/" target='_blank' rel="noreferrer">LinkedIn</a></li>
                    <li className='item'> <a href="https://www.github.com/mesmerize" target='_blank' rel="noreferrer">GitHub</a></li>
                    <li className='item'> <a href="https://discord.gg/gpr6tU7W" target='_blank' rel="noreferrer">Discord</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
