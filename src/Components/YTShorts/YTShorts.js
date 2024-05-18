import React, { useEffect, useState } from 'react'
import Footer from '../HeaderandFooter/Footer'
import Header from '../HeaderandFooter/Header'
import ReactPlayer from 'react-player';
import './YTShorts.css'


const API = 'AIzaSyAWIKxjNvEQCK7Xspwey9JVI14lcub2jIY'
const channelId = 'UCOXPezbOxSvVyFjUx_PzpNA'


var fatchurl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&channelId=${channelId}&part=playlistId`;
const YTShorts = () => {
    const [allvideos, setAllvideos] = useState([])
    useEffect(() => {
        fetch(fatchurl).then((response) => response.json()).then((resJson) => {
            const result = resJson.items.map(doc => (
                {
                    ...doc,
                    Videolink: 'https://www.youtube.com/embed/' + doc.id.videoId
                }));
            setAllvideos(result)
        });

    }, [])
    console.log(allvideos);
    // const ytshorts = [
    //     {
    //         id: '01',
    //         ytshortVideo: 'https://www.youtube.com/embed/RpLzz6NbmDg'
    //     },
    //     {
    //         id: '02',
    //         ytshortVideo: 'https://www.youtube.com/embed/p2csNXci03U'
    //     },
    //     {
    //         id: '03',
    //         ytshortVideo: 'https://www.youtube.com/embed/vblkXD-36UM'
    //     },
    //     {
    //         id: '04',
    //         ytshortVideo: 'https://www.youtube.com/embed/es_DANqKC4Y'
    //     },
    //     {
    //         id: '05',
    //         ytshortVideo: 'https://www.youtube.com/embed/f6OolVw15zQ'
    //     },
    //     {
    //         id: '06',
    //         ytshortVideo: 'https://www.youtube.com/embed/q5Tu2A6KZEQ'
    //     },
    //     {
    //         id: '07',
    //         ytshortVideo: 'https://www.youtube.com/embed/5oim8b7Aq_8'
    //     },
    //     {
    //         id: '08',
    //         ytshortVideo: 'https://www.youtube.com/embed/nkeqiRuIidE'
    //     }
    // ]

    return (
        <>
            <Header />
            <div className="ytshorts">
                {
                    allvideos.map((item) => {
                        return (
                            <>
                                <div className="sub-shorts">
                                    <iframe width="324" height="575" src={item.Videolink} title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </>
                        )
                    })
                }
                {/* <div className="sub-shorts">
                    <iframe width="324" height="575" src="https://www.youtube.com/embed/RpLzz6NbmDg" title="Dropdown Menu Bar using HTML and CSS | SuperCodingBits" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="sub-shorts">
                    <iframe width="324" height="575" src="https://www.youtube.com/embed/RpLzz6NbmDg" title="Dropdown Menu Bar using HTML and CSS | SuperCodingBits" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="sub-shorts">
                    <iframe width="324" height="575" src="https://www.youtube.com/embed/RpLzz6NbmDg" title="Dropdown Menu Bar using HTML and CSS | SuperCodingBits" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div> */}
            </div>
            <Footer />
        </>
    )
}

export default YTShorts