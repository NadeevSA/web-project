import './Coins.css'
import Coin from './Coin'
import { fetchChart } from '../../api/Requests.js'
import React, { useState, useEffect } from 'react'; 

export default function Coins() {
  var [coins, setCoins] = useState(null)

  setInterval(() => {
    var blockCoins = document.getElementById("blockCoins")
    if (blockCoins.scrollLeft == blockCoins.scrollWidth - blockCoins.clientWidth) {
      blockCoins.scrollLeft = 0
    }
    blockCoins.scrollLeft += 1
  }, 50)

  useEffect(() => {
    fetchChart().then(res => {
          setCoins(res)
      })
  }, [])

  return (
    <div id='blockCoins' className="category">
          {
            coins ? coins.data.map((element, key) => {
              return <Coin
                key={key}
                explorer = {element.explorer} 
                name = {element.name}
                priceUsd = {element.priceUsd}
                changePercent24Hr = {element.changePercent24Hr} />
            }) : "Загрузка"
          }
    </div>
  );
}
