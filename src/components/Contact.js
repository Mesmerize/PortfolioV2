import React, {useEffect} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        Aos.init({duration: 1200});
    }, []);
    return (
        <section data-aos='fade-up' id='contact-me'>
            <div className='contact-section'>
                <form action="https://formspree.io/f/moqydzwr" method='POST'>
                <h1 className='contact-message'>Send me a message!</h1>
                <p className='contact-sub'>
                    <span>Got a question, want to connect, or  want to just say hello? Fill</span>
                    <br />
                    <span>out this contact form and I shall get back to you 😃.</span>
                </p>
                <div className='main-contact'>
                    <div className='mob-div'>
                        <label className='labels' htmlFor="">Your Name</label>
                        <input placeholder='Enter Your Name' className='inputs' type="name" required/>
                    </div>
                    <div className='spaced-even mob-div'>
                        <label className='labels' htmlFor="">Email Address</label>
                        <input placeholder='Example@email.com' className='inputs' type="email" required/>
                    </div>
                </div>
                <div className="message-section">
                    <label className='labels' htmlFor="">Your Message</label>
                    <textarea placeholder='Yo, I believe that we forgot to integrate the mailing API to our contact form LMAO.' className='inputs2' type="text" rows='2' name="message" required='required' id="" ></textarea>
                </div>
                <div className='button'>
                    <a href="" className='space' target='_blank'><button type='submit' id='btn'>Send Message</button></a>
                </div>
                </form>
            </div>     
        </section>
    )
}

export default Contact
