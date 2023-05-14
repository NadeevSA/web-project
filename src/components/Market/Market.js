import './Css/Market.css'
import { fetchChart } from '../../api/Requests.js'
import React, { useState, useEffect } from 'react';
import Order from './Order'
import Pagination from './Pagination';

function Market() {
    var [coins, setCoins] = useState(null)
    var [currentPage, setCurrentPage] = useState(1)
    var [nameCoin, setNameCoin] = useState('')
    var [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
        fetchChart().then(res => {
            setCoins(res.data)
            setTotalPage(Math.ceil(res.data.length / 8))
        })
    }, []);

    useEffect(() => {
        if (coins) {
            var number = coins.filter(c => c.name.toLowerCase()
            .includes(nameCoin.toLowerCase())).length
            setTotalPage(Math.ceil(number / 8))
            doCurrentPageTransparent()
            setCurrentPage(1)
        }
    }, [nameCoin])
    
    useEffect(() => {
        let btn = document.getElementById('pag_btn_' + currentPage)
        if (btn != null) {
            btn.style.background = 'white'
        }
    }, [currentPage])

    function callback(page) {
        doCurrentPageTransparent()
        setCurrentPage(page)
    }

    function doCurrentPageTransparent() {
        let btn = document.getElementById('pag_btn_' + currentPage)
        btn.style.background = 'transparent'
    }

    return (
        <div>
            <h1 className="market_h1">Coins</h1>
            <div>
                <input className='market_input' 
                placeholder='search' 
                onInput={(e) => { setNameCoin(e.currentTarget.value)}}
                />
            </div>
            <div className='market_main'>
            {
                coins && coins
                .filter(c => c.name.toLowerCase().includes(nameCoin.toLowerCase()))
                .slice((currentPage - 1) * 8, currentPage * 8)
                .map((element) => {
                    return <Order 
                            name={element.name}
                            rank={element.rank}
                            symbol={element.symbol}
                            priceUsd={element.priceUsd}
                            changePercent24Hr={element.changePercent24Hr}
                            supply={element.supply} />
                })
            }
            </div>
            <Pagination count={totalPage} callback={callback}/>
        </div>
    );
}

export default Market;
