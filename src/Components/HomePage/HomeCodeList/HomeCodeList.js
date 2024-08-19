import React from 'react'
import { Link } from "react-router-dom";
import './HomeCodeList.css'

const HomeCodeList = () => {
    const reactjs = [
        {
            id: 1,
            Title: 'Header',
            pageLink: '/headercodelist'
        },
        {
            id: 2,
            Title: 'Footer',
            pageLink: '/footercodelist'
        },
        {
            id: 3,
            Title: 'Cards',
            pageLink: '/cardcodelist'
        },
        {
            id: 4,
            Title: 'About Us',
            pageLink: '/aboutuscodelist'
        },
        {
            id: 5,
            Title: 'Image',
            pageLink: '/imagecodelist'
        },
        {
            id: 6,
            Title: 'Contact Us',
            pageLink: '/contactuscodelist'
        },
    ]


    const reactnative = [
        {
            id: 1,
            Title: 'Native Header',
            pageLink: '/headernativecodelist'
        },
        {
            id: 2,
            Title: 'Native Footer',
            pageLink: '/footernativecodelist'
        },
        {
            id: 3,
            Title: 'Cards',
            pageLink: '/underconstruction'
        },
        {
            id: 4,
            Title: 'About Us',
            pageLink: '/underconstruction'
        },
        {
            id: 5,
            Title: 'Image',
            pageLink: '/underconstruction'
        },
        {
            id: 6,
            Title: 'Contact Us',
            pageLink: '/underconstruction'
        },
    ]
    return (
        <>
            <div class="study">
                <h2 class="titlebars"> React Js Codes </h2>
                <div class="study-card">
                    {
                        reactjs.map((item, index) => {
                            return (
                                <div class="card-subject" key={index}>
                                    <Link className='CodeLink' to={item.pageLink}>
                                        <div class="details">
                                            <h3>{item.Title}</h3>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div class="study">
                <h2 class="titlebars"> React Native Codes </h2>
                <div class="study-card">
                    {
                        reactnative.map((item, index) => {
                            return (
                                <div class="card-subject" key={index}>
                                    <Link className='CodeLink' to={item.pageLink}>
                                        <div class="details">
                                            <h3>{item.Title}</h3>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default HomeCodeList