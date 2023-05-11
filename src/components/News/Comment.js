import '../../css/comment.css'

function Comment(props) {
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className='comment_main'>
            <h3>{props.username}</h3>
            <p>{props.content}</p>
            <span>&#10084;</span>
            <span>{randomInteger(0, 250)}</span>
            <h5>{Date(Date.now()).toString()}</h5>
        </div>
    );
}

export default Comment;
