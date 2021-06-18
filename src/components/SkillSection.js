import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faReact, faJsSquare, faNodeJs, faGitSquare, faHtml5, faCss3Alt, faSass,
    faPython, faServicestack
} from '@fortawesome/free-brands-svg-icons'

import {faDatabase, faCopyright} from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'

const SkillSection = () => {
    useEffect(() => {
        Aos.init({duration: 1200});
    }, []);

    return (
        <section data-aos='fade-up' id='skills'>
            <div className='skill-section'>
                <h1 className='skill-header'>My Skills</h1>
                <p className='skill-paragraph'>
                    <span>Throughout my education, I have solidifed my understanding of computer science</span>
                    <br />
                    <span>and web development concepts. In addition, have dedicated a majority of my free</span>
                    <br />
                    <span>time in applying these concepts in real world applications and products.</span>
                    <div className='skills'>
                        <span className='skill-name js'><FontAwesomeIcon icon={faJsSquare} size='lg' className='example' /> JavaScript ES6</span>
                        <span id='mobile-res' className='skill-name skill-space react'><FontAwesomeIcon icon={faReact} size='lg' className='example' /> React JS</span>
                        <span id='mobile-res' className='skill-name skill-space node'><FontAwesomeIcon icon={faNodeJs} size='lg' className='example' /> Node JS</span>
                        <span id='mobile-res' className='skill-name skill-space git'><FontAwesomeIcon icon={faGitSquare} size='lg' className='example' /> Git</span>
                    </div>
                    <div className='skills'>
                        <span className='skill-name html'><FontAwesomeIcon icon={faHtml5} size='lg' className='example linkedin' /> HTML5</span>
                        <span id='mobile-res css3' className='skill-name css'><FontAwesomeIcon icon={faCss3Alt} size='lg' className='example' /> CSS3</span>
                        <span id='mobile-res' className='skill-name sass'><FontAwesomeIcon icon={faSass} size='lg' className='example' /> SASS</span>
                        <span id='mobile-res' className='skill-name mongo'><FontAwesomeIcon icon={faDatabase} size='lg' className='example' /> MONGODB</span>
                    </div>
                    <div className='skills'>
                        <span className='skill-name cpp'><FontAwesomeIcon icon={faCopyright} size='lg' className='example linkedin' /> C++</span>
                        <span id='mobile-res' className='skill-name py'><FontAwesomeIcon icon={faPython} size='lg' className='example' /> Python</span>
                        <span id='mobile-res' className='skill-name jquery'><FontAwesomeIcon icon={faServicestack} size='lg' className='example' /> JQuery</span>
                        <span id='mobile-res' className='skill-name express'><FontAwesomeIcon icon={faNodeJs} size='lg' className='example' /> Express JS</span>
                    </div>
                </p>
            </div>
        </section>
    )
}

export default SkillSection
