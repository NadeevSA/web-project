import './Download.css'

export default function Download_card(props) {
    return (
        <div className={props.mainClass}>
            <h1 className={props.h1Class}>{props.h1}</h1>
            <h1 className={props.h1PriceClass}>{props.price}</h1>
            <h3 className={props.h3Class}>{props.h3}</h3>
            <button className={props.btnClass} onClick={() => props.callback(props.h1)}>{props.btn}</button>
        </div>
    );
}