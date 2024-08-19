import React from 'react'
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import Footer from '../../HeaderandFooter/Footer'
import Header from '../../HeaderandFooter/Header'
import NativeHeaderImage1 from '../../images/simple-header-using-react-native.png'
// import FooterImage2 from '../../images/simple-responsive-footer.png'
import '../nativecode.css'

const NativeHeaderCodeList = () => {
    const FooterData = [
        {
            id: "01",
            Title: "Simple Header Using React Native | SuperCodingBits",
            Images: NativeHeaderImage1,
            Language: 'React Native',
            Links: '/simple-header-using-react-native'
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

export default NativeHeaderCodeList