import React from 'react'
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import Footer from '../../HeaderandFooter/Footer'
import Header from '../../HeaderandFooter/Header'
import NativeFooterImage1 from '../../images/simple-footer-using-react-native.png'
// import FooterImage2 from '../../images/simple-responsive-footer.png'
import '../nativecode.css'

const NativeFooterCodeList = () => {
    const FooterData = [
        {
            id: "01",
            Title: "Simple Footer Using React Native | SuperCodingBits",
            Images: NativeFooterImage1,
            Language: 'React Native',
            Links: '/simple-footer-using-react-native'
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

export default NativeFooterCodeList