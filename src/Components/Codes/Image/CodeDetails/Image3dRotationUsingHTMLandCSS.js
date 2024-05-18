import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Footer from '../../../HeaderandFooter/Footer'
import Header from '../../../HeaderandFooter/Header'
import Image1 from '../../../images/3d-image-rotation-yt.png'
import './ImageCodeDetails.css'

const Image3dRotationUsingHTMLandCSS = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div class="container">
          <span class="titles"> Image 3d Rotation </span>
          <div class="image">
            <img src={Image1} alt="Image 3d Rotation" />
          </div>
          <div class="content">
            <h3>Introduction</h3>
            <p>
              In this tutorial, we'll explore how to implement an engaging  Image 3d Rotation effect using HTML and CSS. This interactive feature adds a dynamic element to your website, attracting user attention and enhancing the overall visual experience.
            </p>
          </div>
          <div class="content">
            <h3>Understanding the Card Concept</h3>
            <p>
              Before delving into the code, let's grasp the concept behind a 3D image rotation. The idea is to display an image that users can interact with by rotating it along different axes. This creates a captivating effect, drawing users' attention to the image and making the website more engaging.
            </p>
          </div>
          <div class="content">
            <h3>Creating the Image 3d Rotation</h3>
            <p>
              We'll begin by structuring our Image 3d Rotation in HTML, followed by styling it using CSS to ensure responsiveness across different devices. Using that Image, Here's a breakdown of the elements we'll include:
            </p>
            <ul>
              <li><strong>Title:</strong>In That, Showing the Title of Project that is "Image 3D Rotation using HTML and CSS"</li>
              <li><strong>Images:</strong>The Taken 9 Images to rotate into a 3D format.</li>
            </ul>
          </div>
          <div class="content">
            <h3>Things you will learn</h3>
            <p>By following this tutorial, you'll gain insights into the following key aspects:</p>
            <ul>
              <li>Setting up a basic HTML structure for the  Image 3d Rotation.</li>
              <li>Styling the  Image 3d Rotation using CSS, Including responsiveness</li>
            </ul>
          </div>
          <div class="content">
            <h3>File Structure</h3>
            <p>In that, You can create the one Folder that is "image-3d-rotation" in that folder, create 2 different file that is:</p>
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
              <iframe src="https://www.youtube.com/embed/rN0fSD70Q8s" title="Image 3d Rotation using HTML and CSS | SuperCodingBits" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

          <div class="content">
            <h3>Download</h3>
            <p>Download the project repository and integrate it into your work.</p>
            <div className="ImageDownloadData">
              <a href="https://www.patreon.com/posts/image-3d-using-102122694?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" target="_blank"
                class="ImageDownloadBtn"><FaDownload /> Source Code </a>
            </div>
            <p></p>
          </div>
          <div class="content">
            <h3>Conclusion</h3>
            <p>In conclusion, creating a  Image 3d Rotation is an essential skill for web developers. It not only improves user experience but also contributes to the overall aesthetics of a website.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Image3dRotationUsingHTMLandCSS
