import React from 'react'
import Footer from '../HeaderandFooter/Footer'
import Header from '../HeaderandFooter/Header'
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import ContactLogo from '../images/SCB-about.png'

const ContactTeam = () => {
    return (
        <>
            <Header />
            <div className="titlebar">
                <h2>Contact Us</h2>
            </div>
            <div className="contact">
                <div className="sub-contact">
                    <img src={ContactLogo} alt="" />
                    <p>Your input is invaluable to us. Should you have any questions or feedback regarding our content, please don't hesitate to reach out to us at thesupercodingbits@gmail.com. We eagerly anticipate hearing from you and appreciate your interest in SuperCodingBits.</p>
                </div>
                <div className="social-media">
                    <Link className='FooterLinks' to='https://www.facebook.com/profile.php?id=61555348232229'><FaFacebookSquare className='SocialMedia' /></Link>
                    <Link className='FooterLinks' to='https://www.instagram.com/supercodingbits/'><IoLogoInstagram className='SocialMedia' /></Link>
                    <Link className='FooterLinks' to='https://www.youtube.com/channel/UCOXPezbOxSvVyFjUx_PzpNA'><FaYoutube className='SocialMedia' /></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactTeam