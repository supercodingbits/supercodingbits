import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../HeaderandFooter/Footer'
import Header from '../HeaderandFooter/Header'
import './BookLists.css'

const BookLists = () => {
    const BookList = [
        {
            id: 1,
            BookImage: 'https://m.media-amazon.com/images/I/51j1nrM7ETL._SY425_.jpg',
            BookLink: 'https://amzn.to/4a69Uaj'
        },
        {
            id: 2,
            BookImage: 'https://m.media-amazon.com/images/I/51eQekkEKoL._SY425_.jpg',
            BookLink: 'https://amzn.to/3WtpU2'
        },
        {
            id: 3,
            BookImage: 'https://m.media-amazon.com/images/I/816HBXHJsaL._SY425_.jpg',
            BookLink: 'https://amzn.to/3QurYnu'
        },
        {
            id: 4,
            BookImage: 'https://m.media-amazon.com/images/I/414B0p9GFUL._SY425_.jpg',
            BookLink: 'https://amzn.to/3UM7wBm'
        },
        {
            id: 5,
            BookImage: 'https://m.media-amazon.com/images/I/7189pMQJLmL._SY425_.jpg',
            BookLink: 'https://amzn.to/3Uq1bKp'
        },
        {
            id: 6,
            BookImage: 'https://m.media-amazon.com/images/I/615nnCGWSwL._SY425_.jpg',
            BookLink: 'https://amzn.to/3y86aIg'
        },
        {
            id: 7,
            BookImage: 'https://m.media-amazon.com/images/I/61YEFO4elGL._SY425_.jpg',
            BookLink: 'https://amzn.to/3UrgjXS'
        }
    ]
    return (
        <>
            <Header />
            <div className="titlebar">
                <h2>Book List</h2>
            </div>
            <div className="main-bookslist">
                {
                    BookList.map((item) => {
                        return (
                            <>
                                <div className="sub-booklist">
                                    <Link to={item.BookLink} target="_blank">
                                        <img src={item.BookImage} alt="Book Image" />
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

export default BookLists