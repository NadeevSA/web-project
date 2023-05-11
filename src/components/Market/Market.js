import '../../css/market.css'
import { fetchChart } from '../../api/requests'
import React, { useState, useEffect } from 'react';
import Order from './Order'
import Chart from './Chart'
import { Table } from '@consta/uikit/Table';

function Market() {
    var [coins, setCoins] = useState(null);

    const columns = [
        {
          title: '№',
          accessor: 'id',
          align: 'center',
          width: 10,
          sortable: true,
        },
        {
        title: 'symbol',
        accessor: 'symbol',
        align: 'center',
        width: 10,
        sortable: true,
        },
        {
            title: 'name',
            accessor: 'name',
            align: 'center',
            width: 20,
            sortable: true,
        },
    ];
    
    useEffect(() => {
        fetchChart().then(res => {
            console.log(res)
            setCoins(res.data);
        })
    }, []);

    return (
        <div>
            <h1 className="market_h1">Coins</h1>
            {
                //coins && <Table rows={coins} columns={columns} />
            }
        </div>
    );
}

export default Market;
