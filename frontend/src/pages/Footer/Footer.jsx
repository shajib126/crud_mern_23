import React from 'react'
import github from '../../assets/github.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
        <h4>This Web app Developed By Abu Zubaer</h4>
        <div className="contact-me">
           <a target='_blank' href="https://www.facebook.com/abu.jubaer.792/"> <img src={facebook} alt="" /></a>
           <a target='_blank' href="https://twitter.com/Abuzubaer8"> <img src={twitter} alt="" /></a>
           <a target='_blank' href="github.com/shajib126"> <img src={github} alt="" /></a>
           <a target='_blank' href="https://www.linkedin.com/in/abu-zubaer-0044b0118/"> <img src={linkedin} alt="" /></a>
        </div>
    </footer>
  )
}

export default Footer