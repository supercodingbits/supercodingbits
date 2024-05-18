import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../HeaderandFooter/Footer'
import Header from '../HeaderandFooter/Header'
import './Projects.css'

const JavaProgrammingProjects = () => {
    const JavaProProjects = [
        {
            id: '01',
            ProjectTitle: 'Online Examination System',
            ProjectDesc: 'The Online Examination System is a Java-based application that allows users to take online exams by answering multiple-choice questions. It provides a user-friendly interface for conducting exams and evaluates the answers to provide immediate feedback and results.',
            ProjectDownload: 'https://drive.google.com/file/d/1zdESRmzks9Rg9fy6bmd13hWpyHYRiFii/view?usp=sharing'
        },
        {
            id: '02',
            ProjectTitle: 'Weather Forecast Application',
            ProjectDesc: 'The Weather Forecast Application is a Java-based program that allows users to retrieve and display weather data for a specific city. It utilizes the OpenWeatherMap API to fetch current weather conditions and forecasts.',
            ProjectDownload: 'https://drive.google.com/file/d/1mIXV_xBynVpQXXY27898IqCdXUtJ0SCO/view?usp=sharing'
        }
    ]
    return (
        <>
            <Header />
            <div className="Projtitlesbar">
                <h3>Java Programming Projects</h3>
            </div>
            <div class="CProgrammingProjects">
                {
                    JavaProProjects.map((index, value) => {
                        return (
                            <>
                                <div class="card" key={value}>
                                    <div class="Projecttitles">
                                        <h1>{index.ProjectTitle}</h1>
                                        <p>{index.ProjectDesc}</p>
                                    </div>
                                    <div class="link">
                                        <Link to={index.ProjectDownload} target="_blank"> Download </Link>
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

export default JavaProgrammingProjects