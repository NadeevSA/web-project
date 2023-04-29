function Time(props) {
    return (
        <span id={props.id} className="timer">{props.value}</span>
    );
}

export default Time;