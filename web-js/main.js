const boxURL = document.querySelector('#box-URL');
const shortURL = document.querySelector('#shortURL');
const serverURL = "http://127.0.0.1:8080/api/v1/customer-wallets";

submit.onclick = function () {
    let normalURL = boxURL.value;
    sendURL(serverURL, normalURL);
    
}

const updateURL = {
    used: "true",
    url: "aquela piranha"
}

sendNormalURL = () => {
    submit.onclick = () => {
        let normalURL = boxURL.value;
        updateURL.url = normalURL;
        axios.put(`${serverURL}/1`, updateURL)
    }
}


getShortURL = (serverURL) => {
    axios.get(serverURL)
        .then(response => {
            const data = response.data.customerWallets.data[1];
            if (data.used == 'false') {
                console.log(data.url);
            }
        })
}

// setInterval(() => {
//     getShortURL(serverURL);
// }, 1000);

sendNormalURL(serverURL);

