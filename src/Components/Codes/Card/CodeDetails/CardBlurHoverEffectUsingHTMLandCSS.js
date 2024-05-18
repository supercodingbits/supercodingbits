import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Footer from '../../../HeaderandFooter/Footer'
import Header from '../../../HeaderandFooter/Header'
import CardImage1 from '../../../images/card-blur-hover-effect.png'
import './CardCodeDetails.css'

const CardBlurHoverEffectUsingHTMLandCSS = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div class="container">
                    <span class="titles"> Card Blur Hover Effect </span>
                    <div class="image">
                        <img src={CardImage1} alt="Card Blur Hover Effect" />
                    </div>
                    <div class="content">
                        <h3>Introduction</h3>
                        <p>
                            In this blog post, Our team will be guide you to creating a card blur hover effect using html and css.
                            In that Image, Showing 3 cards that is "coding" (change as per your need). In that, cursor move the
                            first or any other card that card shown for the user but other two cards will be blur automatically.
                            Using HTML and CSS this content will be developed and solve that problem.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Understanding the Card Concept</h3>
                        <p>
                            Before we dive into the code, let's understand the purpose of a Cards. A Cards typically appears at
                            the Centner side of a webpage and contains information such as company details, related links.
                            It serves as a navigational aid and enhances the overall user experience.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Creating the Card</h3>
                        <p>
                            We'll begin by structuring our footer in HTML, followed by styling it using CSS to ensure responsiveness
                            across different devices. Using that Image, Here's a breakdown of the elements we'll include:
                        </p>
                        <ul>
                            <li><strong>Title and Description:</strong>In this section what is described about the card.</li>
                            <li><strong>Image:</strong>In this showing the related Images</li>
                            <li><strong>Links:</strong> Links to related content or resources.</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>File Structure</h3>
                        <p>In that, You can create the one Folder that is "card-blur-hover-effect" in that folder, create 2
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
                            <iframe src="https://www.youtube.com/embed/ySbeh1752-8"
                                title="Card Blur Hover Effect Using HTML and CSS | SuperCodingBits" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="content">
                        <h3>Download</h3>
                        <p>Download the project repository and integrate it into your work.</p>
                        <div className="CardDownloadData">
                            <a href="https://www.patreon.com/posts/card-blur-hover-101764868?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" target="_blank"
                                className='CardDownloadBtn'><FaDownload /> Source Code </a>
                        </div>
                        <p></p>
                    </div>
                    <div class="content">
                        <h3>Conclusion</h3>
                        <p>In conclusion, creating a Card Blur Hover Effect is an essential skill for web developers. It not only
                            improves user experience but also contributes to the overall aesthetics of a website.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CardBlurHoverEffectUsingHTMLandCSS