import { Line } from '@consta/charts/Line';
import { fetchChart } from '../../api/requests'
import { useEffect, useState } from 'react';

function Chart() {
    var [data, setData] = useState(null)

    useEffect(() => {
        fetchChart('bitcoin').then(response => {
            console.log(response)
        })
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default Chart;