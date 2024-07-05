import React, { useState } from 'react'
import Footer from '../HeaderandFooter/Footer';
import Header from '../HeaderandFooter/Header';
import SimplePortfolio from './img/simple-portfolio.png'
import './portfoliowebsite.css'
const PortfolioWebsites = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const PortfolioData = [
    {
      id: '01',
      PortfolioTitle: 'Simple Portfolio',
      PortfolioDesc: "Welcome! This portfolio is here to help you see if I might be a good fit for your needs. Take a look at my skills and experience. While I can't work with everyone, I'm always open to exploring new opportunities!",
      PortfolioDownload: 'https://drive.google.com/file/d/1lOD65VSjOLtfPuv59U84NGAsXZF3Q0Ya/view?usp=sharing',
      PortfolioVideoWatch: 'https://www.youtube.com/embed/wDPrDlE_Srw',
      PortfolioImage: SimplePortfolio
    },
  ]

  const handleWatchVideo = (videoUrl) => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };



  return (
    <>
    <Header />
      <div className="Projtitlesbar">
        <h3>Portfolio Website</h3>
      </div>
      <div className="PortfolioProjects">
        {
          PortfolioData.map((item, index) => {
            return (
              <>
                <div className="SubPortfolioProjects">
                  <div className="listPortfolioProjects">
                    <img src={item.PortfolioImage} alt="" />
                  </div>
                  <div className="listPortfolioProjects">
                    <h4>{item.PortfolioTitle}</h4>
                    <p>{item.PortfolioDesc}</p>
                    <div className="Btns">
                      <a href={item.PortfolioDownload} target="_blank" rel="noopener noreferrer">Download</a>
                      <button onClick={() => handleWatchVideo(item.PortfolioVideoWatch)}>Watch Video</button>
                    </div>
                  </div>
                </div>

                {/* Popup for Video */}
                {isPopupOpen && (
                  <div className="popup">
                    <div className="popup-content">
                      <span className="close-button" onClick={handleClosePopup}>×</span>
                      <iframe src={item.PortfolioVideoWatch} title={item.PortfolioTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                  </div>
                )}
              </>
            )
          })
        }
      </div>
      <Footer />
    </>
  )
}

export default PortfolioWebsites
