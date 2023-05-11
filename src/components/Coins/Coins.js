import '../../css/category.css'
import Coin from './Coin'
import { fetchCoin } from '../../api/requests'
import React, { useState, useEffect } from 'react'; 

function Coins() {
  var [coin, setCoin] = useState(null);

  useEffect(() => {
      fetchCoin(1,5).then(res => {
          setCoin(res);
      })
  }, []);

  return (
    <section id="category">
        <div>
          {
            coin != null ? coin.data.map(value => {
              return <Coin
                      symbol={value.symbol}
                      price={value.price_usd}
                      percent_change_24h={value.percent_change_24h}
                    />
            })
            : "Загрузка"
          }
        </div>
    </section>
  );
}

export default Coins;
