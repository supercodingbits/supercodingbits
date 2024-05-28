import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Footer from '../../../HeaderandFooter/Footer'
import Header from '../../../HeaderandFooter/Header'
import SRF from '../../../images/simple-responsive-footer.png'
import './FooterCodeDetails.css'

const SimpleResponsiveFooterUsingHTMLandCSS = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div class="container">
                    <span class="titles"> Simple Responsive Footer </span>
                    <div class="code-image">
                        <img src={SRF} alt="responsive-navigation-bar" />
                    </div>
                    <div class="content">
                        <h3>Introduction</h3>
                        <p>
                            Creating a simple responsive footer with HTML and CSS means designing a footer that looks good and works well on all devices, from phones to computers. You start by using HTML to structure the footer with tags like footer tag. Then, you use CSS to style it, making sure it adapts to different screen sizes. This involves using techniques like media queries to change the layout for various devices, and flexbox or grid to organize the content neatly. The goal is to have a footer that is easy to read and use, no matter what device you're on.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Understanding the Footer Concept</h3>
                        <p>
                            Before we dive into the code, let's understand the purpose of a footer. A footer typically appears at
                            the bottom of a webpage and contains important information such as company details, related links,
                            contact information, and social media links. It serves as a navigational aid and enhances the overall
                            user experience.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Creating the Footer</h3>
                        <p>
                            We'll begin by structuring our footer in HTML, followed by styling it using CSS to ensure responsiveness
                            across different devices. Using that Image, Here's a breakdown of the elements we'll include:
                        </p>
                        <ul>
                            <li><strong>Channel Logo and Description:</strong> This section introduces our brand and provides a brief description.</li>
                            <li><strong>Related Links:</strong> Links to related content or resources.</li>
                            <li><strong>Course Providing Links:</strong> Links to courses or educational materials offered by our company.</li>
                            <li><strong>Social Media Links:</strong> Links to our social media profiles.</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>File Structure</h3>
                        <p>In that, You can create the one Folder that is "simple-responsive-footer" in that folder, create 2
                            different file that is:</p>
                        <ul>
                            <li>index.html</li>
                            <li>style.css</li>
                        </ul>
                        <p>after creating 2 file firstly call the "style.css" file into "index.html" then start the working</p>
                    </div>
                    <div class="content">
                        <h3>Video Tutorial</h3>
                        <p>To complement this written guide, we've prepared a video tutorial that visually demonstrates each step of the process. Watch the tutorial to see the code in action and gain a deeper understanding of the concepts covered.</p>
                        <div class="video">
                            <iframe src="https://www.youtube.com/embed/BLuTJjXYIDQ" title="Simple Responsive Footer Using HTML and CSS | SuperCodingBIts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="content">
                        <h3>Download</h3>
                        <p>Download the project repository and integrate it into your work.</p>
                        <div className="FooterDownloadData">
                            <a href='https://www.patreon.com/posts/simple-footer-105109517?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link' target="_blank" class="FooterDownloadBtn"><FaDownload /> Source Code </a>
                        </div>
                        <p></p>
                    </div>
                    <div class="content">
                        <h3>Conclusion</h3>
                        <p>In conclusion, creating a Simple Responsive Footer is an essential skill for web developers. It not only improves user experience but also contributes to the overall aesthetics of a website.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SimpleResponsiveFooterUsingHTMLandCSS