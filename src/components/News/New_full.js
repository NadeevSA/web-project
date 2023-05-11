import { useState } from 'react';
import '../../css/news.css'
import New_detail from './New_detail';
import  { useNavigate } from 'react-router-dom'

function New_full(props) {
    let navigate = useNavigate();
    var [openNew, setOpenNew] = useState(false)
    function closeWindow() {
        setOpenNew(false)
    }

    return (
        <div>
            <div className="news_main" onClick={() => navigate('/new_detail/' + props.id)}>
                <img className='news_img' width="500px" src={props.imageUrl}></img>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <div className='news_info'>
                    <h3>{props.author}</h3>
                    <h3>{props.date}</h3>
                    <a href={props.url}>Source</a>
                </div>
            </div>
        </div>
    );
}

export default New_full;
