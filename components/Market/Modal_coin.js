import './Css/Modal_coin.css'

export default function Modal_coin(props) {
    var outputPrice = (price) => {
        let priceSplit = price.split('.')
        return priceSplit[0] + '.' + priceSplit[1].substr(0, 2)
    }

    return (
        <div className='modal_window_coin'>
            <div className='modal_content_coin'>
                <h3>name: {props.name}</h3>
                <h3>supply: {outputPrice(props.supply)}</h3>
                <h3>symbol: {props.symbol}</h3>
                <h3>price:{outputPrice(props.priceUsd)}</h3>
                <h3>change: {outputPrice(props.changePercent24Hr)}</h3>
                <div>
                    <button onClick={() => props.callback(false)}>Close</button>
                </div>
            </div>
        </div>
    );
}
