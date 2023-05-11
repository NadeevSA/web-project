import '../../css/new_detail.css'
import Comment from './Comment';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchComment } from '../../api/requests';

function New_detail() {
    const params = useParams();
    var [news, setNews] = useState(null);
    var [comments, setComments] = useState(null);
    function callback(response) {
        setComments(response)
    }

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('business'))
            .data.find(r => r.id == params.index);
        if (items) {
            setNews(items);
        }
        else {
            let items = JSON.parse(localStorage.getItem('technology'))
                .data.find(r => r.id == params.index);
            if (items) {
                setNews(items);
            }
        }
        fetchComment(callback)
    }, []);

    return (
        <div className='content'>
            { news ?
            <div className='main'>
                <img className='news_img' width='500px' src={news.imageUrl}></img>
                <h1>{news.title}</h1>
                <p>{news.content}</p>
                <div className='news_info'>
                    <h3>{news.author}</h3>
                    <h3>{news.date}</h3>
                    <a href={news.url}>Source</a>
                </div>
            </div> : "загрузка"
            }
            <div className='main_comments'>
                <h1>Comments</h1>
                {
                    comments && comments.comments.map((element) => {
                        return <Comment 
                                    content={element.body}
                                    username={element.user.username}
                                />
                    })
                }
            </div>
        </div>
    );
}

export default New_detail;
