import React, { useState } from 'react'
import Footer from '../HeaderandFooter/Footer';
import Header from '../HeaderandFooter/Header';
import SimplePortfolio from './img/simple-portfolio.png'
import PersonalPortfolioWebsite from './img/personal-portfolio-website.png'
import './portfoliowebsite.css'

const PortfolioWebsites = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const PortfolioData = [
    {
      id: '1',
      PortfolioTitle: 'Simple Portfolio Using HTML and CSS',
      PortfolioDesc: "Welcome! This portfolio is here to help you see if I might be a good fit for your needs. Take a look at my skills and experience. While I can't work with everyone, I'm always open to exploring new opportunities!",
      PortfolioDownload: 'https://www.patreon.com/posts/simple-portfolio-107548507?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link',
      PortfolioVideoWatch: 'https://www.youtube.com/embed/wDPrDlE_Srw',
      PortfolioImage: SimplePortfolio
    },
    {
      id: '2',
      PortfolioTitle: 'Personal Portfolio Website Using HTML and CSS',
      PortfolioDesc: "Welcome! I'm excited to share my skills and experience with you. This portfolio highlights my abilities and past projects. I'm always open to exploring new opportunities and connecting with potential collaborators. Let's see if we're a good fit.",
      PortfolioDownload: 'https://www.patreon.com/posts/personal-website-107549630?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link',
      PortfolioVideoWatch: 'https://www.youtube.com/embed/92UmVtnxUPo',
      PortfolioImage: PersonalPortfolioWebsite
    },
  ];

  // Function to handle video display
  const handleWatchVideo = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  // Function to close the video popup
  const handleClosePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <Header />
      <div className="Projtitlesbar">
        <h3>Portfolio Website</h3>
      </div>
      <div className="PortfolioProjects">
        {PortfolioData.map((item, index) => (
          <div key={item.id} className="SubPortfolioProjects">
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
        ))}

        {/* Popup for Video (only one at a time) */}
        {selectedVideo && (
          <div className="popup">
            <div className="popup-content">
              <span className="close-button" onClick={handleClosePopup}>×</span>
              <iframe
                src={selectedVideo}
                title="Portfolio Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default PortfolioWebsites