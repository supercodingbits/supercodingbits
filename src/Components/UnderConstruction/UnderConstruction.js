import React from 'react'
import Footer from '../HeaderandFooter/Footer'
import Header from '../HeaderandFooter/Header'
import Soon from '../images/soon.gif'
import './underconstruction.css'
const UnderConstruction = () => {
    return (
        <>
        <Header />
            <div id="error-page">
                <div class="contents">
                    <img src={Soon} alt="Page Coming Soon" />
                        <h4>Page under maintenance. Apologies for the inconvenience.</h4>
                        <div class="btns">
                            <a href="https://supercodingbitsweb.vercel.app/">Return</a>
                        </div>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default UnderConstruction
