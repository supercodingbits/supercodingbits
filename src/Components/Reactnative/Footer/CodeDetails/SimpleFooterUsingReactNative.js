import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Footer from '../../../HeaderandFooter/Footer'
import Header from '../../../HeaderandFooter/Header'
import SimpleFooter from '../../../images/simple-footer-using-react-native.png'
const SimpleFooterUsingReactNative = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div class="container">
                    <span class="titles"> Simple Footer </span>
                    <div class="code-image">
                        <img src={SimpleFooter} alt="Simple Header" />
                    </div>
                    <div class="content">
                        <h3>Introduction</h3>
                        <p>
                        In this tutorial, you'll discover how to create cool effects for your Simple Footer using React Native. These code snippets will make your Simple Footer page in your mobile application more engaging and fun for visitors. We'll guide you through each step, starting from the basic concept of a footer. Whether you're new to coding or already know a bit, this tutorial will help you make your app designs more interesting. Tune in and learn how to add some flair to your application with React Native.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Understanding the Card Concept</h3>
                        <p>
                        Before we dive into the code, let's understand the purpose of a Simple Footer using React Native. Footers are used for displaying important links, contact information, and other icons to help users easily navigate and access the content of the page.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Things you will learn</h3>
                        <p>By following this tutorial, you'll gain insights into the following key aspects:</p>
                        <ul>
                            <li>Create a react native application using cmd.</li>
                            <li>setting up a basic react native structure (use "rnfe" for basic structure)</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>Video Tutorial</h3>
                        <p>To complement this written guide, we've prepared a video tutorial that visually demonstrates each step of the process. Watch the tutorial to see the code in action and gain a deeper understanding of the concepts covered.</p>
                        <div class="video">
                        <iframe src="https://www.youtube.com/embed/zvM_JrCm4vw" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="content">
                        <h3>Download</h3>
                        <p>Download the project repository and integrate it into your work.</p>
                        <div className="ImageDownloadData">
                            <a href="https://www.patreon.com/SuperCodingBits" target="_blank"
                                class="ImageDownloadBtn"><FaDownload /> Source Code </a>
                        </div>
                        <p></p>
                    </div>
                    <div class="content">
                        <h3>Conclusion</h3>
                        <p>In conclusion, creating a Simple Header using React Native is an essential skill for app developers. It not only improves user experience but also contributes to the overall aesthetics of a app development.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SimpleFooterUsingReactNative
