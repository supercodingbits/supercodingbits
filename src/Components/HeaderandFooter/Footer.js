import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div class="main-content">
                <div class="right box">
                    <h2>Useful Links</h2>
                    <div class="content">
                        <div class="blog">
                            <span><Link className='FooterLinks' to='/programminglist'>Programs</Link></span>
                        </div>
                        <div class="projects">
                            <span><Link className='FooterLinks' to='/purchesbooks'>Books Purchase</Link></span>
                        </div>
                        {/* <div class="code">
                            <span><Link className='FooterLinks' to='/ytshorts'>YT Shorts</Link></span>
                        </div> */}
                    </div>
                </div>
                <div class="righttwo box">
                    <h2>Website</h2>
                    <div class="content">
                        <div class="about">
                            <span><Link className='FooterLinks' to='/about-us'>About Us</Link></span>
                        </div>
                        <div class="about">
                            <span><Link className='FooterLinks' to='/contact-team'>Contact Us</Link></span>
                        </div>
                        <div class="privcy">
                            <span><Link className='FooterLinks' to=''>Privacy Policy</Link></span>
                        </div>
                    </div>
                </div>
                <div class="center box">
                    <h2>Address</h2>
                    <div class="content">
                        <div class="place">
                            <span class="text">Solapur, Maharashtra, India</span>
                        </div>
                        <div class="email">
                            <span class="text">thesupercodingbits@gmail.com</span>
                        </div>
                        <div class="social">
                            <Link className='FooterLinks' to='https://www.facebook.com/profile.php?id=61555348232229'><FaFacebookSquare className='SocialMedia' /></Link>
                            <Link className='FooterLinks' to='https://www.instagram.com/supercodingbits/'><IoLogoInstagram className='SocialMedia' /></Link>
                            <Link className='FooterLinks' to='https://www.youtube.com/channel/UCOXPezbOxSvVyFjUx_PzpNA'><FaYoutube className='SocialMedia' /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                copyright &copy; SuperCodingBits 2024. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer