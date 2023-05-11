import '../../css/category.css'
import Coin from './Coin'
import { fetchChart } from '../../api/requests'
import React, { useState, useEffect } from 'react'; 

function Coins() {
  var [coins, setCoins] = useState(null)
  var [delay, setDelay] = useState(50)

  setInterval(() => {
    var blockCoins = document.getElementById("blockCoins")
    if (blockCoins.scrollLeft == blockCoins.scrollWidth - blockCoins.clientWidth) {
      blockCoins.scrollLeft = 0
    }
    blockCoins.scrollLeft += 1
  }, delay)

  useEffect(() => {
    fetchChart().then(res => {
          setCoins(res)
      })
  }, [])

  return (
    <div id='blockCoins' className="category">
          {
            coins ? coins.data.map(element => {
              return <Coin
                explorer = {element.explorer} 
                name = {element.name}
                priceUsd = {element.priceUsd}
                changePercent24Hr = {element.changePercent24Hr} />
            }) : "Загрузка"
          }
    </div>
  );
}

export default Coins;
