const boxURL = document.querySelector('#box-URL');
const shortURL = document.querySelector('#shortURL');
const serverURL = "http://127.0.0.1:8080/api/v1/customer-wallets";


sendNormalURL = (status, url) => {
    const updateURL = {
        used: status,
        url: url,
    }

    submit.onclick = () => {
        if (updateURL.used === 'false') {
            let normalURL = boxURL.value;
            updateURL.url = normalURL;
        }
        axios.put(`${serverURL}/1`, updateURL)
    }
}

updateStatus = (status, url) => {
    const updateURL = {
        used: status,
        url: url,
    }

    axios.put(`${serverURL}/2`, updateURL)
}

getShortURL = (serverURL) => {
    axios.get(serverURL)
        .then(response => {
            const data = response.data.customerWallets.data[1];
            if (data.used == 'false') {
                shortURL.value = data.url;
                return data.url;
            }
        })
        .then((data) => {
            updateStatus('true', data)
        })
}

setInterval(() => {
    getShortURL(serverURL);
}, 1000);

sendNormalURL('false');

