import './Tickets.css'
import { useState } from 'react'

function Download_card(props) {
    var [open1, setOpen1] = useState(false)

    return (
        <div className={props.mainClass}>
            <h1 className={props.h1Class}>{props.h1}</h1>
            <h1 className={props.h1PriceClass}>{props.price}</h1>
            <h3 className={props.h3Class}>{props.h3}</h3>
            <button className={props.btnClass} onClick={() => props.callback(props.h1)}>{props.btn}</button>
        </div>
    );
}

export default Download_card;
