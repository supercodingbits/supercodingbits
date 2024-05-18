import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Footer from '../../../HeaderandFooter/Footer'
import Header from '../../../HeaderandFooter/Header'
import ContactUsImage1 from '../../../images/contact-us.png'
import './ContactUsDetails.css'

const ContactUs = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div class="container">
                    <span class="titles"> Contact Us </span>
                    <div class="image">
                        <img src={ContactUsImage1} alt="Contact Us" />
                    </div>
                    <div class="content">
                        <h3>Introduction</h3>
                        <p>
                            Want to make your website's "Contact Us" section look awesome? You're in luck! In this guide, we'll teach you how to make it stand out using only HTML and CSS. These tricks will not only make your Contact Us page look cooler but also make it more fun for your visitors. Whether you're new to coding or already know a bit, you'll find this tutorial super helpful for making your website design more exciting. Let's get started!
                        </p>
                    </div>
                    <div class="content">
                        <h3>Understanding the Card Concept</h3>
                        <p>
                            Before we dive into the code, let's understand the purpose of a Contact Us. A Contact Us most used in showing the content of the parts of the website like Form fill-up and Your address, etc. the page or how to work the website, etc. It serves as a navigational aid and enhances the overall user experience.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Creating the Card</h3>
                        <p>
                            We'll begin by structuring our Contact Us in HTML, followed by styling it using CSS to ensure responsiveness across different devices. Using that Image, Here's a breakdown of the elements we'll include:
                        </p>
                        <ul>
                            <li><strong>Information:</strong> In this image one part showing the information regarding  developer or company information. </li>
                            <li><strong>Map:</strong>  Included in the map is a feature designed to facilitate the easy location of the company or developer,</li>
                            <li><strong>Form:</strong> The Form page serves as an effective means for users to provide information, feedback, and report any issues. It offers a streamlined communication channel between the user and the platform.</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>Things you will Learn</h3>
                        <p>
                            By following this tutorial, you'll gain insights into the following key aspects:
                        </p>
                        <ul>
                            <li>Setting up a basic HTML structure for the Contact Us.</li>
                            <li>Styling the Contact Us using CSS, Including responsiveness.</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>File Structure</h3>
                        <p>In that, You can create the one Folder that is "contact-us" in that folder, create 2
                            different file that is:</p>
                        <ul>
                            <li>index.html</li>
                            <li>style.css</li>
                        </ul>
                        <p>after creating 2 file firstly call the "style.css" file into "index.html" then start the working</p>
                    </div>
                    <div class="content">
                        <h3>Video Tutorial</h3>
                        <p>To complement this written guide, we've prepared a video tutorial that visually demonstrates each step of
                            the process. Watch the tutorial to see the code in action and gain a deeper understanding of the
                            concepts covered.</p>
                        <div class="video">
                            <iframe src="https://www.youtube.com/embed/88ve1RCDh1U" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="content">
                        <h3>Download</h3>
                        <p>Download the project repository and integrate it into your work.</p>
                        <div className="CardDownloadData">
                            <a href="https://www.patreon.com/posts/contact-us-using-103947954?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" target="_blank"
                                className='CardDownloadBtn'><FaDownload /> Source Code </a>
                        </div>
                        <p></p>
                    </div>
                    <div class="content">
                        <h3>Conclusion</h3>
                        <p>
                            In conclusion, creating a Contact Us is an essential skill for web developers. It not only improves user experience but also contributes to the overall aesthetics of a website.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs