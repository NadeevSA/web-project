import './Css/News.css'
import  { useNavigate } from 'react-router-dom'

function New_short(props) {
    let navigate = useNavigate();

    return (
        <div className="news_rigth" onClick={() => navigate('/new_detail/' + props.id)}>
            <span>
            <img className='news_img' width="300px" src={props.imageUrl}></img>
            </span>
            <p>{props.title}</p>
        </div>
    );
}

export default New_short;