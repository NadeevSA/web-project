import '../../css/market.css'

function Order(props) {
    return (
        <div className='market_div'>
            <h2>{props.base}</h2>
            <h2>price ${props.price_usd.toFixed(3)}</h2>
            <h2>volume {props.volume.toFixed(3)}</h2>
        </div>
    );
}

export default Order;
