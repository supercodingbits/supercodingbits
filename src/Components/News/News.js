import React, { useEffect, useState } from 'react'

const News = () => {
    const [state, setState] = useState([]);
    const fetchurl = 'https://newsapi.org/v2/everything?q=tesla&from=2024-08-03&sortBy=publishedAt&apiKey=5a829c5487704deca081ccb6e68da5cd'

    useEffect(() => {
        fetch(fetchurl)
            .then((response) => response.json())
            .then((data) => setState(data.articles))  // Assuming 'articles' is the array containing news items
            .catch((error) => console.error("Error fetching news:", error));
    }, []);

    return (
        <>
            <div className="mainnews">
                <h2>News</h2>
                <div className="subnews">
                    {
                        state.map((item, index) => (
                            <div className="news" key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default News;
