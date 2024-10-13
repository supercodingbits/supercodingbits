import React, { useEffect, useState } from 'react';
import Footer from '../HeaderandFooter/Footer';
import Header from '../HeaderandFooter/Header';
import './YTShorts.css';

const API = 'AIzaSyAtppn2vMxoOn0h5A8qO6uMiRIrpC20OQQ';
const playlistId = 'PL6TciGcudfdocRiOtH1T-AMkg1riQJNGa&si=Uz-9d1T_nfxY1GMx'; // Replace with your playlist ID

const YTShorts = () => {
    const [allVideos, setAllVideos] = useState([]);

    useEffect(() => {
        const fetchUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${playlistId}&part=snippet&maxResults=10`;

        fetch(fetchUrl)
            .then((response) => response.json())
            .then((resJson) => {
                if (resJson.items) {
                    const result = resJson.items.map((item) => ({
                        Videolink: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
                        title: item.snippet.title,
                    }));
                    setAllVideos(result);
                } else {
                    console.error('No videos found for the playlist');
                }
            })
            .catch((error) => console.error('Error fetching YouTube playlist:', error));
    }, []);

    return (
        <>
            <Header />
            <div className="mainytshorts">
                <h2>Shorts</h2>
                <div className="ytshorts">
                    {allVideos.length > 0 ? (
                        allVideos.map((item, index) => (
                            <div key={index} className="sub-shorts">
                                <iframe
                                    width="324"
                                    height="575"
                                    src={item.Videolink}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))
                    ) : (
                        <p>No videos found in this playlist.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default YTShorts;
