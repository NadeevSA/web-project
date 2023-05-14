import './Coins.css'

function Coin(props) {
    var outputPrice = (price) => {
        let priceSplit = price.split('.')
        return priceSplit[0] + '.' + priceSplit[1].substr(0, 2)
    }

    return (
        <a className='coin' href={props.explorer}>
            <span className='name'>
                {props.name}
            </span>
            {
                props.changePercent24Hr > 0 ?
                    <div className='up'>&#9650;</div> :
                    <div className='down'>&#9660;</div>
            }
            {
                props.changePercent24Hr > 0 ?
                    <div className='CoinPriceUp'>
                        <h5>${outputPrice(props.priceUsd)}</h5>
                        <h5>{outputPrice(props.changePercent24Hr)}%</h5>
                    </div> :
                    <div className='CoinPriceDown'>
                        <h5>${outputPrice(props.priceUsd)}</h5>
                        <h5>{outputPrice(props.changePercent24Hr)}%</h5>
                    </div>
            }
        </a>
    );
}

export default Coin;
