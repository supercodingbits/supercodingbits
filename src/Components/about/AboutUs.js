import React from 'react'
import AboutUsImage from '../images/logo.png'
import Footer from '../HeaderandFooter/Footer'
import Header from '../HeaderandFooter/Header'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <Header />
            <section class="about-us">
                <div class="aboutseaction">
                    <img src={AboutUsImage} class="pic" />
                    <div class="abouttext">
                        <h2>About Us</h2>
                        <h5>Front-end Developer & <span>Designer</span></h5>
                        <p>
                            <strong>@SuperCodingBits</strong> is a YouTube channel where you can learn about making websites. Whether you're just starting out or already know a lot, there's something for everyone. We teach everything from the basics of HTML and CSS to more advanced stuff like JavaScript tricks and frameworks. Join us to get better at making websites and to keep up with what's new in the digital world!
                        </p>
                        <div class="data">
                            <a href="https://www.youtube.com/@supercodingbits" class="youtube">Youtube</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutUs