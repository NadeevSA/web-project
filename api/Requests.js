export function fetchCoin(start, limit) {
    return fetch('https://api.coinlore.net/api/tickers/?start=' + start + '&limit=' + limit)
    .then(response => {
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch(error => console.warn(error));
}

export function fetchNew(theme) {
    return fetch('https://inshorts.deta.dev/news?category=' + theme)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        return data
    })
    .catch(error => console.warn(error));
}

export function fetchOrders(id) {
    return fetch('https://api.coinlore.net/api/coin/markets/?id=' + id)
    .then(response => {
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch(error => console.warn(error));
}

export function fetchComment(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dummyjson.com/comments')
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function() {
        callback(xhr.response)
    }
}

export function fetchChart(){
    return fetch('https://api.coincap.io/v2/assets/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch(error => console.warn(error));
}
