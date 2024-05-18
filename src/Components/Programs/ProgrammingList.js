import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../HeaderandFooter/Footer'
import Header from '../HeaderandFooter/Header'
import CProgramming from '../images/c-programming-programs.png'
import JavaProgramming from '../images/java-programming-programs.png'
import PythonProgramming from '../images/python-programming-programs.png'
import SQLProgramming from '../images/SQL-programming.svg'
import './ProgrammingList.css'

const ProgrammingList = () => {
    const Programs = [
        {
            id: '01',
            ProgrammingName: 'C Programming',
            ProgrammingImage: CProgramming,
            ProgrammingDetails: 'Our C programming section offers practical code applicable to daily tasks, fostering comprehension and enhancing performance.',
            ProgrammingDownload: ''
        },
        {
            id: '02',
            ProgrammingName: 'Java',
            ProgrammingImage: JavaProgramming,
            ProgrammingDetails: 'Our Java programming section presents code relevant to daily applications and optimizing performance.',
            ProgrammingDownload: ''
        },
        {
            id: '03',
            ProgrammingName: 'Python',
            ProgrammingImage: PythonProgramming,
            ProgrammingDetails: 'Our Python programming section features code tailored for everyday use, facilitating understanding and boosting efficiency.',
            ProgrammingDownload: ''
        },
        {
            id: '04',
            ProgrammingName: 'SQL',
            ProgrammingImage: SQLProgramming,
            ProgrammingDetails: 'Our SQL programming section offers code pertinent to daily database operations, and streamlining performance.',
            ProgrammingDownload: ''
        }
    ]
    return (
        <>
            <Header />
            <section id="container">
                <div class="titlebar">
                    <h1>Programs</h1>
                </div>
                <div class="card">
                    {
                        Programs.map((item, value) => {
                            return (
                                <>
                                    <div class="Probox" key={value}>
                                        <div class="box-top">
                                            <div class="profile">
                                                <div class="image">
                                                    <img src={item.ProgrammingImage} />
                                                </div>
                                                <div class="name">
                                                    <strong>{item.ProgrammingName}</strong>
                                                    <span>Codes</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="client-comment">
                                            <p>{item.ProgrammingDetails}</p>
                                        </div>
                                        <div className="codeDownload">
                                            <Link to={item.ProgrammingDownload} className="DownloadCode">Download</Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                    {/* <div class="Probox">
                        <div class="box-top">
                            <div class="profile">
                                <div class="image">
                                    <img src={CProgramming} />
                                </div>
                                <div class="name">
                                    <strong>Java</strong>
                                    <span>@clientname</span>
                                </div>
                            </div>
                        </div>
                        <div class="client-comment">
                            <p>Our Java programming section presents code relevant to daily applications and optimizing performance.</p>
                        </div>
                    </div>
                    <div class="Probox">
                        <div class="box-top">
                            <div class="profile">
                                <div class="image">
                                    <img src={CProgramming} />
                                </div>
                                <div class="name">
                                    <strong>Python</strong>
                                    <span>@clientname</span>
                                </div>
                            </div>
                        </div>
                        <div class="client-comment">
                            <p>Our Python programming section features code tailored for everyday use, facilitating understanding and boosting efficiency.</p>
                        </div>

                    </div>
                    <div class="Probox">
                        <div class="box-top">
                            <div class="profile">
                                <div class="image">
                                    <img src={CProgramming} />
                                </div>
                                <div class="name">
                                    <strong>SQL</strong>
                                    <span>@clientname</span>
                                </div>
                            </div>
                        </div>
                        <div class="client-comment">
                            <p>Our SQL programming section offers code pertinent to daily database operations, and streamlining performance.</p>
                        </div>
                    </div> */}
                </div>
            </section>





            {/* <div className="titlebar">
                <h2>Programs</h2>
            </div>
            <div className="Notescontainer">
                <div className="Notescard">
                    <img src={CProgramming} alt="" />
                    <h3> C Pro </h3>
                    <Link to='/' className='NotesLinks'> Download </Link>
                </div>

                <div className="Notescard">
                    <h3>Java</h3>
                    <Link to='/' className='NotesLinks'> Download </Link>
                </div>

                <div className="Notescard">
                    <h3>SQL</h3>
                    <Link to='/' className='NotesLinks'> Download </Link>
                </div>

                <div className="Notescard">
                    <h3>PHP</h3>
                    <Link to='/' className='NotesLinks'> Download </Link>
                </div>
                <div className="Notescard">
                    <h3>Python</h3>
                    <Link to='/' className='NotesLinks'> Download </Link>
                </div>
            </div> */}
            <Footer />
        </>
    )
}

export default ProgrammingList