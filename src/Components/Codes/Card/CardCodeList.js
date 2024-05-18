import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Footer from '../../HeaderandFooter/Footer'
import Header from '../../HeaderandFooter/Header'
import CardImage1 from '../../images/card-blur-hover-effect.png'
import CardImage2 from '../../images/card-hover-effect.png'
import CardImage3 from '../../images/card-information-hover-effect.png'
import './CardCodeList.css'

const CardCodeList = () => {
    const CardData = [
        {
            id: "01",
            Title: "Card Blur Hover Effect Using HTML and CSS | SuperCodingBits",
            Images: CardImage1,
            Language: 'HTML and CSS',
            Links: '/card-blur-hover-effect-using-html-and-css'
        },
        {
            id: "02",
            Title: "Card Hover Effect Using HTML and CSS | SuperCodingBits",
            Images: CardImage2,
            Language: 'HTML and CSS',
            Links: '/card-hover-effect-using-html-and-css'
        },
        {
            id: "03",
            Title: "Card Information Hover Effect Using HTML and CSS | SuperCodingBits",
            Images: CardImage3,
            Language: 'HTML and CSS',
            Links: '/card-information-hover-effect'
        }
    ]
    return (
        <>
            <Header />
            <div class="card-list" >
                {
                    CardData.map((index, values) => {
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

export default CardCodeList