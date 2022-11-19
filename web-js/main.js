const boxURL = document.querySelector('#box-URL');
const shortURL = document.querySelector('#shortURL');
const serverURL = "http://127.0.0.1:8080/api/v1";

submit.onclick = function () {
    let normalURL = boxURL.value;
    sendURL(serverURL, normalURL);
    
}

function teste() {
    axios.put('http://127.0.0.1:8080/api/v1/customer-wallets/1', userUpdate)
    .then(response => {
        const data = response.data;
        console.log(data.customerWallets.data[1])
    })
} 
const userUpdate = {
    used: "Tadala",
    url: "valhalla"
}

teste();





// const sendURL = (serverURL, normalURL) => {
//     const URL = `${serverURL}/1`;
//     const response = axios.put(URL, {
//         "used": "false",
//         "url": "google.com"
//     });
// };

