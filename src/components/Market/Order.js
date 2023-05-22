import { useState } from 'react'
import './Css/Market.css'
import Modal_coin from './Modal_coin'

export default function Order(props) {
    var [open, setOpen] = useState(false)

    var outputPrice = (price) => {
        let priceSplit = price.split('.')
        return priceSplit[0] + '.' + priceSplit[1].substr(0, 2)
    }

    return (
        <div className='market_main'>
            <div className='market_div' onClick={() => setOpen(!open)}>
                <h2 className='market_name_coin'>{props.name}</h2>
                <h2>price $ {outputPrice(props.priceUsd)}</h2>
            </div>
            {
                open && 
                <Modal_coin
                name={props.name}
                symbol={props.symbol}
                priceUsd={props.priceUsd}
                changePercent24Hr={props.changePercent24Hr}
                supply={props.supply}
                callback = {setOpen}
                />
            }
        </div>

    )
}
