import React, {useEffect} from 'react';
import pic from '../img/colours.jpg';
import pic3 from '../img/star.jpg';
import pic4 from '../img/weather.jpg';
import pic5 from '../img/ecomm.jpg';
import pic6 from '../img/conversable.jpg';
import pic7 from '../img/student.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
    useEffect(() => {
        Aos.init({duration: 1200});
    }, []);
    return (
        <section data-aos='fade-right' id='projects'>
            <div className='project-section'>
                <h1 className='work'>My Recent Work</h1>
                <p className='project-overview'>
                    <span>I am constantly trying to find ways I can solve real world problems I encounter myself</span>
                    <br />
                    <span>and keep my programming abilities sharp. Take a glimpse at the latest projects I have</span>
                    <br />
                    <span>been working on.</span>
                </p>
                <div id="project-container">
                    <div className="main-project-container">
                        <img src={pic6} className='proj-img' alt="" />
                        <h1 className='project-title'>Conversable</h1>
                        <p className='project-desc'>Peer to Peer React Video Application to encourage socializing and productivity with friends. Utilized WebRTC and Web Sockets to get feed from users.</p>
                        <div className='links'>
                            <a href="https://conversable.netlify.app/" target='_blank' rel="noreferrer"><p className='demo'>View Live Demo &gt;</p></a>
                            <a href="https://github.com/Mesmerize/Conversable" target='_blank' rel="noreferrer" className='spaced'><p className='demo'>View Source Code &gt;</p></a>
                        </div>
                    </div>
                    <div className="main-project-container">
                        <img className='proj-img' src={pic7} alt="" />
                        <h1 className='project-title'>Student Profiles</h1>
                        <p className='project-desc'>React Application built for a front end assessment challenge that utilizes axios to retrieve student data from an API and allows user to filter by name.</p>
                        <div className='links'>
                            <a href="https://studentprofilesproj.netlify.app/" target='_blank' rel="noreferrer"><p className='demo'>View Live Demo &gt;</p></a>
                            <a href="https://github.com/Mesmerize/StudentProfiles" target='_blank' rel="noreferrer" className='spaced'><p className='demo'>View Source Code &gt;</p></a>
                        </div>
                    </div>
                    <div className="main-project-container">
                        <img src={pic} className='proj-img' alt="" />
                        <h1 className='project-title'>Colors Landing Page</h1>
                        <p className='project-desc'>Colors landing page built with pure HTML, CSS, and JavaScript. Which helped practice my CSS layout abilities and design, while also building a business related site.</p>
                        <div className='links'>
                            <a href="https://mesmerize.github.io/Colors/" target='_blank' rel="noreferrer"><p className='demo'>View Live Demo &gt;</p></a>
                            <a href="https://github.com/Mesmerize/Colors" target='_blank' rel="noreferrer" className='spaced'><p className='demo'>View Source Code &gt;</p></a>
                        </div>
                    </div>
                    <div className="main-project-container">
                        <img className='proj-img' src={pic5} alt="" />
                        <h1 className='project-title'>E-Commerce Store</h1>
                        <p className='project-desc'>Built a React E-Commerce Store alongside using the Stripe API to be able to process payment transactions. Mimicking a real e-commerce store's functionality.</p>
                        <div className='links'>
                            <a href="https://reverent-cori-eda796.netlify.app/" target='_blank' rel="noreferrer"><p className='demo'>View Live Demo &gt;</p></a>
                            <a href="https://github.com/Mesmerize/EcomStore" target='_blank' rel="noreferrer" className='spaced'><p className='demo'>View Source Code &gt;</p></a>
                        </div>
                    </div>
                    <div className="main-project-container">
                    <img src={pic3} className='proj-img' alt="" />
                        <h1 className='project-title'>Starbucks Landing Page</h1>
                        <p className='project-desc'>Clone of a Starbucks Landing Page, built and designed with HTML, CSS, and JavaScript to practice and keep my skills sharp.</p>
                        <div className='links'>
                            <a href="https://mesmerize.github.io/Starbs/" target='_blank' rel="noreferrer"><p className='demo'>View Live Demo &gt;</p></a>
                            <a href="https://github.com/Mesmerize/Starbs" target='_blank' rel="noreferrer" className='spaced'><p className='demo'>View Source Code &gt;</p></a>
                        </div>
                    </div>
                    <div className="main-project-container">
                    <img className='proj-img' src={pic4} alt="" />
                        <h1 className='project-title'> React Weather App</h1>
                        <p className='project-desc'>Weather Application, built with HTML, CSS, and Node Js. Which allows users to get weather updates from anywhere in the world.</p>
                        <div className='links'>
                            <a href="https://brandonsweatherapp.netlify.app/" target='_blank' rel="noreferrer"><p className='demo'>View Live Demo &gt;</p></a>
                            <a href="https://github.com/Mesmerize/WeatherApp" target='_blank' rel="noreferrer" className='spaced'><p className='demo'>View Source Code &gt;</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
