import React from 'react'
import { Link } from "react-router-dom";
import HeaderImage1 from '../../images/responsive-navigation-bar.jpg'
import { GoArrowUpRight } from "react-icons/go";
import Header from '../../HeaderandFooter/Header'
import './HeaderCodeList.css'
import Footer from '../../HeaderandFooter/Footer';

const HeaderCodeList = () => {
    const HeaderData = [
        {
            id: "01",
            Title: "Responsive Navigation Bar Using HTML and CSS | SuperCodingBits",
            Images: HeaderImage1,
            Language: 'HTML and CSS',
            Links: '/responsive-navigation-bar-using-html-and-css'
        }
    ]
    return (
        <>
            <Header />
            <div class="card-list" >
                {
                    HeaderData.map((index, values) => {
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

export default HeaderCodeList