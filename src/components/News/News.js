import '../../css/news.css'
import { fetchNew } from '../../api/requests';
import React, { useState, useEffect } from 'react';
import New_full from './New_full';
import New_short from './New_short';

function News() {
    var [news, setNews] = useState(null);
    var [newsTechnology, setNewsTechnology] = useState(null);
    var [endIndex, setEndIndex] = useState(3);

    useEffect(() => {
        const businessNews = localStorage.getItem('business')
        const technologyNews = localStorage.getItem('technology')
        if (businessNews != undefined && technologyNews != undefined){
            const businessNewsItems = JSON.parse(localStorage.getItem('business'))
            const technologyNewsItems = JSON.parse(localStorage.getItem('technology'))
            setNews(businessNewsItems)
            setNewsTechnology(technologyNewsItems)
        }
        else{
            fetchNew("business").then(res => {
                setNews(res)
                localStorage.setItem('business', JSON.stringify(res))
            })
            fetchNew("technology").then(res => {
                setNewsTechnology(res)
                localStorage.setItem('technology', JSON.stringify(res))
            })
        }
    }, []);
    
    return (
        <div>
            <h1 className="news_h1">News</h1>
            <div className="news_container">
                <div>
                    {
                        news != null ? news.data.slice(0, endIndex).map(element => {
                            return <New_full
                                    id={element.id}
                                    imageUrl={element.imageUrl}
                                    title={element.title}
                                    content={element.content}
                                    author={element.author}
                                    date={element.date}
                                    url={element.url} />
                        })
                        : "загрузка"
                    }
                </div>
                <div className='news_rigth_container'>
                    {
                        newsTechnology != null ? newsTechnology.data.slice(0, 5).map(element => {
                            return <New_short
                                    id={element.id}
                                    imageUrl={element.imageUrl}
                                    title={element.title} />
                        })
                        : "загрузка"
                    }
                </div>
            </div>
            <button className="btn" onClick={() => { setEndIndex(endIndex + 2)} }>See more</button>
        </div>
    );
}

export default News;
