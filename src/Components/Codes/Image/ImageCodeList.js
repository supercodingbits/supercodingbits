import React from 'react'
import Footer from '../../HeaderandFooter/Footer'
import Header from '../../HeaderandFooter/Header'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Image1 from '../../images/3d-image-rotation-yt.png'
import Image2 from '../../images/image-accordion.png'
import './ImageCodeList.css'

const ImageCodeList = () => {
    const ImageData = [
        {
            id: "01",
            Title: "Image 3d Rotation using HTML and CSS | SuperCodingBits",
            Images: Image1,
            Language: 'HTML and CSS',
            Links: '/3d-image-rotation-using-html-and-css'
        },
        {
            id: "02",
            Title: "Image Accordion Using HTML and CSS | SuperCodingBits",
            Images: Image2,
            Language: 'HTML and CSS',
            Links: '/image-accordion-using-html-and-css'
        }
    ]
    return (
        <>
            <Header />
            <div class="card-list" >
                {
                    ImageData.map((index, values) => {
                        return (
                            <>
                                <div class="card-item" key={values.id}>
                                    <img src={index.Images} alt="Header Image" />
                                    <span class="developer">{index.Language}</span>
                                    <h3>{index.Title}</h3>
                                    <Link to={index.Links}>
                                        <div class="arrow">
                                            <GoArrowUpRight />
                                        </div>
                                    </Link>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default ImageCodeList