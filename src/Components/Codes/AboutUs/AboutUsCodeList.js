import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Footer from '../../HeaderandFooter/Footer'
import Header from '../../HeaderandFooter/Header'
import AboutusImage1 from '../../images/about-us.png'
import './AboutUsCodeList.css'

const AboutUsCodeList = () => {
    const AboutusData = [
        {
            id: "01",
            Title: "Simple About Us Using HTML and CSS | SuperCodingBits",
            Images: AboutusImage1,
            Language: 'HTML and CSS',
            Links: '/simple-about-us'
        }
    ]
    return (
        <>
        <Header />
            <div class="card-list" >
                {
                    AboutusData.map((index, values) => {
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

export default AboutUsCodeList