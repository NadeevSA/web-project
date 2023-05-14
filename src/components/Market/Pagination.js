import Pagination_btn from './Pagination_btn';
import './Css/Pagination.css'

function Pagination(props) {
    let pages = [];
    for(var i = 1; i <= props.count; ++i){
        pages.push(<Pagination_btn number={i} callback={props.callback}/>)
    }

    return (
        <div className='pagination_main'>
            {pages}
        </div>
    );
}

export default Pagination;