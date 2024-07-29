import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import HTML from '../../images/html.png'
import ReactJs from '../../images/reactjs.png'
import Java from '../../images/java.png'
import SQLProgramming from '../../images/SQL-programming.svg'
import CSS from '../../images/css.png'
import HTMLCheatSheetPDF from './pdf/htmlcheatsheet.pdf'
import ReactJSCheatSheetPDF from './pdf/reactjscheatsheet.pdf'
import JavaCheatSheetPDF from './pdf/javacheatsheet.pdf'
import CSSCheatSheetPDF from './pdf/csscheatsheet.pdf'
import './cheatsheets.css'

const Cheatsheets = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);
    const Programs = [
        {
            id: '01',
            ProgrammingName: 'HTML',
            ProgrammingImage: HTML,
            ProgrammingDetails: 'A comprehensive HTML cheatsheet covering everything from basic structure to advanced elements for efficient web development.',
            ProgrammingDownload: HTMLCheatSheetPDF,
            ProgrammPrview: HTMLCheatSheetPDF
        },
        {
            id: '02',
            ProgrammingName: 'CSS',
            ProgrammingImage: CSS,
            ProgrammingDetails: 'A comprehensive CSS cheatsheet covering everything from basic syntax to advanced properties for efficient web development.',
            ProgrammingDownload: CSSCheatSheetPDF,
            ProgrammPrview: CSSCheatSheetPDF
        },
        {
            id: '03',
            ProgrammingName: 'React JS',
            ProgrammingImage: ReactJs,
            ProgrammingDetails: 'A React JS cheatsheet provides quick reference to key concepts, components, hooks, lifecycle methods of React development.',
            ProgrammingDownload: ReactJSCheatSheetPDF,
            ProgrammPrview: ReactJSCheatSheetPDF
        },
        {
            id: '04',
            ProgrammingName: 'Java',
            ProgrammingImage: Java,
            ProgrammingDetails: 'Java is a high-level, object-oriented programming language used for building robust applications.',
            ProgrammingDownload: JavaCheatSheetPDF,
            ProgrammPrview: JavaCheatSheetPDF
        },

    ]

    const handleWatchPdf = (PdfUrl) => {
        setSelectedPdf(PdfUrl);
      };
    
      // Function to close the Pdf popup
      const handleClosePopup = () => {
        setSelectedPdf(null);
      };
    return (
        <>
            <section id="cheatsheetcontainer">
                <h2 class="titlebars"> Cheatsheet </h2>
                <div class="cheatsheetcard">
                    {
                        Programs.map((item, value) => {
                            return (
                                <>
                                    <div class="cheatsheetProbox" key={value}>
                                        <div class="cheatsheet-box-top">
                                            <div class="cheatsheet-profile">
                                                <div class="cheatsheet-image">
                                                    <img src={item.ProgrammingImage} />
                                                </div>
                                                <div class="cheatsheet-name">
                                                    <strong>{item.ProgrammingName}</strong>
                                                    <span>CheatSheet</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cheatsheet-client-comment">
                                            <p>{item.ProgrammingDetails}</p>
                                        </div>
                                        <div className="cheatsheet-Download">
                                            <Link to={item.ProgrammingDownload} className="cheatsheetDownloadCode" target="_blank" download>Download</Link>
                                            <button onClick={() => handleWatchPdf(item.ProgrammPrview)}>Preview</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                    {selectedPdf && (
                        <div className="pdfpopup">
                            <div className="pdfpopup-content">
                                <span className="pdfclose-button" onClick={handleClosePopup}>×</span>
                                <iframe
                                    src={selectedPdf}
                                    title="Portfolio Pdf"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Cheatsheets
