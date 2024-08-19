import React from 'react'
import './HomeAboutSection.css'
import aboutImg from '../../images/SCB-about.png'

const HomeAboutSection = () => {
    return (
        <>

            <div class="about-container">
                <img src={aboutImg} alt="SuperCodingBits" />
                <div class="about-text">
                    <p><strong> Hello learners, </strong></p>
                    <p><strong>@SuperCodingBits</strong>  is a YouTube channel where you can learn about making websites. Whether you're just starting out or already know a lot, there's something for everyone. We teach everything from the basics of HTML and CSS to more advanced stuff like JavaScript tricks and frameworks. Join us to get better at making websites and to keep up with what's new in the digital world!</p>
                </div>
            </div>
        </>
    )
}

export default HomeAboutSection