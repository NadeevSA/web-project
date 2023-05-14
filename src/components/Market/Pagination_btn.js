import './Css/Pagination.css'

function Pagination_btn(props) {
    return (
        <div 
            id={'pag_btn_' + props.number} 
            className='pagination_btn' 
            onClick={() => props.callback(props.number)}>
            <h1>{props.number}</h1>
        </div>
    );
}

export default Pagination_btn;