import './Css/Market.css'

function Order(props) {
    var outputPrice = (price) => {
        let priceSplit = price.split('.')
        return priceSplit[0] + '.' + priceSplit[1].substr(0, 2)
    }

    return (
        <div className='market_div'>
            <h2 className='market_name_coin'>{props.name}</h2>
            <h2>price $ {outputPrice(props.priceUsd)}</h2>
        </div>
    );
}

export default Order;
