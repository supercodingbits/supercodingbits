import React from 'react'
import { Link } from "react-router-dom";
import './HomeCodeList.css'

const HomeCodeList = () => {
    return (
        <>
            <div class="study">
                <h2 class="titlebars"> Options </h2>
                <div class="study-card">
                    <div class="card-subject">
                        <Link className='CodeLink' to='/headercodelist'>
                            <div class="details">
                                <h3>Header</h3>
                            </div>
                        </Link>
                    </div>
                    <div class="card-subject">
                        <Link className='CodeLink' to='/footercodelist'>
                            <div class="details">
                                <h3>Footer</h3>
                            </div>
                        </Link>
                    </div>
                    <div class="card-subject">
                        <Link className='CodeLink' to='/cardcodelist'>
                            <div class="details">
                                <h3>Cards</h3>
                            </div>
                        </Link>
                    </div>
                    <div class="card-subject">
                        <Link className='CodeLink' to='aboutuscodelist'>
                            <div class="details">
                                <h3>About Us</h3>
                            </div>
                        </Link>
                    </div>
                    <div class="card-subject">
                        <Link className='CodeLink' to='/imagecodelist'>
                            <div class="details">
                                <h3>Image</h3>
                            </div>
                        </Link>
                    </div>
                    <div class="card-subject">
                        <Link className='CodeLink' to='/contactuscodelist'>
                            <div class="details">
                                <h3>Contact Us</h3>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>

        </>
    )
}

export default HomeCodeList