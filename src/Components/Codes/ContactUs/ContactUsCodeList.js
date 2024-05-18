import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Footer from '../../HeaderandFooter/Footer'
import Header from '../../HeaderandFooter/Header'
import ContactusImage1 from '../../images/contact-us.png'
import './ContactUsCodeList.css'

const ContactUsCodeList = () => {
    const ContactusData = [
        {
            id: "01",
            Title: "Contact Us Using HTML and CSS | SuperCodingBits",
            Images: ContactusImage1,
            Language: 'HTML and CSS',
            Links: '/contact-us-using-html-and-css'
        }
    ]
    return (
        <>
            <Header />
            <div class="card-list" >
                {
                    ContactusData.map((index, values) => {
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

export default ContactUsCodeList