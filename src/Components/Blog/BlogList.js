import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import BlogImage1 from '../images/installation-guide-for-android-studio.png'
import Footer from '../HeaderandFooter/Footer'
import Header from '../HeaderandFooter/Header'
import './BlogList.css'

const BlogList = () => {
    const BlogData = [
        {
            id: '01',
            Language: 'Blog',
            BlogTitle: 'Installation Guide for Android Studio',
            BlogImage: BlogImage1,
            BlogLink: '/installation-guide-for-android-studio',
        }
    ]
    return (
        <>
            <Header />
            <div class="card-list">
                {
                    BlogData.map((index, values) => {
                        return (
                            <>
                                <div class="Blog-card-item" key={values.id}>
                                    <img src={BlogImage1} alt="installation-guide-for-android-studio.png" />
                                    <span class="developer">{index.Language}</span>
                                    <h3>{index.BlogTitle}</h3>
                                    <Link to={index.BlogLink}>
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

export default BlogList