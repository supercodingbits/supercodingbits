import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../HeaderandFooter/Footer'
import Header from '../HeaderandFooter/Header'
import { FaLocationArrow } from "react-icons/fa";
import ProjectImage1 from '../images/c-programming-projects.png'
import ProjectImage2 from '../images/java-projects.png'
// import $ from 'jquery';
import './ProjectList.css'

const ProjectList = () => {
    const ProjectLists = [
        {
            id: '01',
            ProjectImage: ProjectImage1,
            ProjectLink: '/cprogrammingprojects'
        },
        {
            id: '02',
            ProjectImage: ProjectImage2,
            ProjectLink: '/javaprogrammingprojects'
        }
    ]
    return (
        <>
            <Header />
            <div class="wrapper">
                {
                    ProjectLists.map((index, value) => {
                        return (
                            <>
                                <div class="card" key={value}>
                                    <img src={index.ProjectImage} alt="" />
                                    <div class="content">
                                        <div class="buttons">
                                            <Link to={index.ProjectLink} class="cart-btn">Explore <FaLocationArrow /></Link>
                                        </div>
                                    </div>
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

export default ProjectList