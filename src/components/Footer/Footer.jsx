import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" className='footer-logo' />
            <p>HungerBird is a modern, interactive restaurant website designed to enhance the dining experience for customers by providing a seamless, user-friendly interface.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In TOUCH</h2>
            <ul>
                <li>+91-899-899-8998</li>
                <li>contact@HungerBird.com</li>
            </ul>
        </div>
      </div>
      <hr />

       {/* <p className="footer-copyright">Made with .</p> */}
      <p className="footer-copyright">
          Made with{" "}
          <span role="img" aria-label="Love">
            ❤️
          </span>{" "}
          by RASHMI DUBEY
        </p>
    </div>
  )
}

export default Footer
