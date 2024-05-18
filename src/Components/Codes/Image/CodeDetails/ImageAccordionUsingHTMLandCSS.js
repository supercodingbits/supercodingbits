import React from 'react'
import Footer from '../../../HeaderandFooter/Footer'
import Header from '../../../HeaderandFooter/Header'
import Image2 from '../../../images/image-accordion.png'

const ImageAccordionUsingHTMLandCSS = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div class="container">
                    <span class="titles"> Image Accordion </span>
                    <div class="image">
                        <img src={Image2} alt="Image 3d Rotation" />
                    </div>
                    <div class="content">
                        <h3>Introduction</h3>
                        <p>
                            In today's tutorial, We learn about the Image Accordion using HTML and CSS. A Slide Image is an
                            essential element of any website as it provides new information or upcoming events. We'll start by
                            understanding the basic concepts of a Image Accordion then understanding the code.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Understanding the Card Concept</h3>
                        <p>
                            Before going into the code, let's understand the purpose of a Image Accordion. A Image Accordion is
                            utilized in websites to efficiently display multiple images or content sections in a compact space,
                            enhancing user engagement and navigation.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Creating Image Accordion</h3>
                        <p>
                            We'll begin by structuring our Image Accordion in HTML, followed by styling it using CSS to ensure
                            responsiveness across different devices. Using that Image, Here's a breakdown of the elements we'll
                            include:
                        </p>
                        <ul>
                            <li><strong>Images:</strong>In this section, They are Five Different Images use in the form of
                                Accordion.</li>
                            <li><strong>Information:</strong>After image hover then show the information in that heading and text.
                                That information come from the left side.</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>Things you will learn</h3>
                        <p>By following this tutorial, You'll gain insights into the following key aspects:</p>
                        <ul>
                            <li>Setting up a basic HTML structure for the Image Accordion.</li>
                            <li>Styling the Image Accordion using CSS, including responsiveness. </li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>File Structure</h3>
                        <p>In that, You can create the one Folder that is "image-accordion" in that folder, create 2 different file
                            that is:</p>
                        <ul>
                            <li>index.html</li>
                            <li>style.css</li>
                        </ul>
                        <p>after creating 2 file firstly call the "style.css" file into "index.html" then start the working</p>
                    </div>
                    <div class="content">
                        <h3>Video Tutorial</h3>
                        <p>
                            To complement this written guide, we've prepared a video tutorial that visually demonstrates each step
                            of the process. Watch the tutorial to see the code in action and gain a deeper understanding of the
                            concepts covered.
                        </p>
                        <div class="video">
                            <iframe src="https://www.youtube.com/embed/U3vubhsodr8"
                                title="Image Accordion using HTML and CSS | SuperCodingBits" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="content">
                        <h3>Download</h3>
                        <p>Download the project repository and integrate it into your work.</p>
                        <div className="ImageDownloadData">
                            <a href="https://drive.google.com/file/d/1OFjb2Tz9lAOpWfIxpvu2G-0isWqau7rE/view?usp=drive_link"
                                target="_blank" class="ImageDownloadBtn"><i class="fa fa-arrow-down"></i> Source Code </a>
                            <p></p>
                        </div>
                    </div>
                    <div class="content">
                        <h3>Conclusion</h3>
                        <p>
                            In conclusion, creating a Image Accordion is an essential skill for web developers. It not only improves
                            user experience but also contributes to the overall aesthetics of a website.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ImageAccordionUsingHTMLandCSS