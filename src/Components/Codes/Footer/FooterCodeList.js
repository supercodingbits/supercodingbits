import React from 'react'
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import Footer from '../../HeaderandFooter/Footer'
import Header from '../../HeaderandFooter/Header'
import FooterImage1 from '../../images/responsive-footer.png'
import FooterImage2 from '../../images/simple-responsive-footer.png'
import '../CodeList.css'

const FooterCodeList = () => {
    const FooterData = [
        {
            id: "01",
            Title: "Responsive Footer Using HTML and CSS | SuperCodingBits",
            Images: FooterImage1,
            Language: 'HTML and CSS',
            Links: '/responsive-footer-using-html-and-css'
        },
        {
            id: "02",
            Title: "Simple Responsive Footer Using HTML and CSS | SuperCodingBIts",
            Images: FooterImage2,
            Language: 'HTML and CSS',
            Links: '/simple-responsive-footer-using-html-and-css'
        }
    ]
    return (
        <>
            <Header />
            <div class="code-card-list" >
                {
                    FooterData.map((index, values) => {
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

export default FooterCodeList