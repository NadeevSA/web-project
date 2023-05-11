import '../../css/category.css'
import { Stats } from '@consta/stats/Stats';

function Coin(props) {
    return (
        <div className="category">
            <Stats
                value={props.price}
                iconArrowRate="auto"
                title={props.symbol}
                rate={props.percent_change_24h}
                size="s" />
        </div>
    );
}

export default Coin;
