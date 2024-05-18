import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../../../HeaderandFooter/Footer';
import Header from '../../../HeaderandFooter/Header';
import { FaDownload } from "react-icons/fa6";
import RNB from '../../../images/responsive-navigation-bar.jpg'
import './HeaderCodeDetails.css';


const ResponsiveNavigationBarUsingHTMLAndCSS = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div class="container">
                    <span class="titles"> Responsive Navigation Bar </span>
                    <div class="image">
                        <img src={RNB} alt="responsive-navigation-bar" />
                    </div>
                    <div class="content">
                        <h3>Introduction</h3>
                        <p>
                            Navigation bars are the buttons and links that help people find their way around your
                            website. In today's world, where people use all sorts of devices to browse, it's
                            important for thes bars to work well on everything, from big computers to tiny phones.
                            This guide will show you how to build a navigation bar that works great on anything, using just basic
                            website building tools like HTML and CSS.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Things you will learn</h3>
                        <p>By following this tutorial, you'll gain insights into the following key aspects:</p>
                        <ul>
                            <li>Setting up a basic HTML structure for the navigation bar.</li>
                            <li>Styling the navigation bar using CSS, including responsiveness.</li>
                            <li>Incorporating Font Awesome for a visually appealing menu icon.</li>
                            <li>Implementing a smooth transition effect for an enhanced user experience.</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>File Structure</h3>
                        <p>In that, You can create the one Folder that is "responsive-navigation-bar" in that folder, create 2
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
                            <iframe src="https://www.youtube.com/embed/lFAkfJ20D8o" title="Responsive Navigation Bar Using HTML and CSS | SuperCodingBits" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="content">
                        <h3>Download</h3>
                        <p>Download the project repository and integrate it into your work.</p>
                        <div className="DownloadData">
                            <Link to="" class="download-btn"><FaDownload /> Source Code </Link>
                        </div>
                        <p></p>
                    </div>
                    <div class="content">
                        <h3>Conclusion</h3>
                        <p>In conclusion, creating a responsive navigation bar is an essential skill for web developers. It not only improves user experience but also contributes to the overall aesthetics of a website.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ResponsiveNavigationBarUsingHTMLAndCSS