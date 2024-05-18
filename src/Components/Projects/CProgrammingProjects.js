import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../HeaderandFooter/Footer'
import Header from '../HeaderandFooter/Header'
import './Projects.css'

const CProgrammingProjects = () => {
    const CProProjects = [
        {
            id: '01',
            ProjectTitle: 'College Courses',
            ProjectDesc: 'This project aims to provide students with a comprehensive understanding of their chosen course by offering a structured curriculum that covers a wide range of subjects relevant to their field of study. The course details provide essential information about the objectives, learning outcomes, and assessment methods of each subject, while the semester-wise subject list ensures a systematic progression of knowledge throughout the duration of the course.',
            ProjectDownload: 'https://drive.google.com/file/d/1Y2TbNTqyLGlgMiyWA6FerpxAB7jzHNJe/view?usp=sharing'
        },
        {
            id: '02',
            ProjectTitle: 'Mensuration Solution',
            ProjectDesc: 'The field of Mensuration, within mathematics, focuses on the study of geometric figure calculations. This division explores the measurement and properties of various shapes and figures, allowing mathematicians to analyze and understand their characteristics. Mensuration encompasses a wide range of concepts, including the calculation of area, perimeter, volume, surface area, and other related measurements.',
            ProjectDownload: 'https://drive.google.com/file/d/1Ez9AAhOdQifol-cbS_kO_LfF3rg-0LCR/view?usp=sharing'
        }
    ]
    return (
        <>
            <Header />
            <div className="Projtitlesbar">
                <h3>C Programming Projects</h3>
            </div>
            <div class="CProgrammingProjects">
                {
                    CProProjects.map((index, value) => {
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

export default CProgrammingProjects