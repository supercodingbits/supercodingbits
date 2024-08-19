import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Footer from '../../../HeaderandFooter/Footer'
import Header from '../../../HeaderandFooter/Header'
import Image1 from '../../../images/image-gallery.png'
import './ImageCodeDetails.css'

const ImagegalleryUsingHTMLandCSS = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div class="container">
                    <span class="titles"> Image Gallery </span>
                    <div class="code-image">
                        <img src={Image1} alt="Image Gallery" />
                    </div>
                    <div class="content">
                        <h3>Introduction</h3>
                        <p>
                            In this tutorial, you'll discover how to make cool effects when you hover over Image Gallery using just HTML and CSS. These effects make your Image Gallery page more engaging and fun for visitors. We'll guide you through each step, from basic transitions to fancier animations. Whether you're new to coding or already know a bit, this tutorial will help you make your web designs more interesting. Tune in and learn how to add some flair to your website with CSS.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Understanding the Card Concept</h3>
                        <p>
                            Before we dive into the code, let's understand the purpose of a Image Gallery Page. A Image Gallery Page most used in showing and exploring  the Images of the website, etc. It helps people find their way around your website and makes it easier for them to use.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Creating the Image 3d Rotation</h3>
                        <p>
                            We'll begin by structuring Image Gallery in HTML, followed by styling it using CSS to ensure responsiveness across different devices. Using that Image, Here's a breakdown of the elements we'll include:
                        </p>
                        <ul>
                            <li><strong>Images:</strong> In this image showing the background side adding a one image that will be presenting a related of title.</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>Things you will learn</h3>
                        <p>By following this tutorial, you'll gain insights into the following key aspects:</p>
                        <ul>
                            <li>Setting up a basic HTML structure for the Image Gallery. </li>
                            <li>Styling the  Image Gallery.  using CSS, Including responsiveness</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>File Structure</h3>
                        <p>In that, You can create the one Folder that is "image-gallery" in that folder, create 2 different file that is:</p>
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
                            <iframe src="https://www.youtube.com/embed/SaEu4DPNsWU" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="content">
                        <h3>Download</h3>
                        <p>Download the project repository and integrate it into your work.</p>
                        <div className="ImageDownloadData">
                            <a href="patreon.com/SuperCodingBits" target="_blank"
                                class="ImageDownloadBtn"><FaDownload /> Source Code </a>
                        </div>
                        <p></p>
                    </div>
                    <div class="content">
                        <h3>Conclusion</h3>
                        <p>In conclusion, creating a Image Gallery is an essential skill for web developers. It not only improves user experience but also contributes to the overall aesthetics of a website.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ImagegalleryUsingHTMLandCSS