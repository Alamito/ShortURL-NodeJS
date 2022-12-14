const boxURL = document.querySelector('#box-URL');
const shortURL = document.querySelector('#shortURL');
const serverURL = "http://127.0.0.1:8080/api/v1/customer-wallets";

/*
    - Espera por um clique e envia a URL nao encurtada para a API na posição de ID 1
*/
let normalURL;
const sendNormalURL = (status, url) => {
    const updateURL = {
        used: status,
        url: url,
    }

    submit.onclick = () => {
        if (updateURL.used == 'false') {
            normalURL = boxURL.value;
            updateURL.url = normalURL;
        }
        axios.put(`${serverURL}/1`, updateURL)
    }
}

/*
    - Atualiza o status da API na posição de ID 2
*/
const updateStatus = (status, url) => {
    const updateURL = {
        used: status,
        url: url,
    }
    console.log(updateURL)

    axios.put(`${serverURL}/2`, updateURL)
}

/*
    - Busca a URL encurtada na posição de ID 2 e printa no devido lugar
*/
const getShortURL = (serverURL, normalURL) => {
    axios.get(serverURL)
        .then(response => {
            const data = response.data.customerWallets.data[1];
            if (data.used == 'false') {                            // testa se a URL ainda nao foi encurtada
                shortURL.value = data.url;  
                return data.url;
            }
        })
        .then((url) => {
            if (url) {
                updateStatus('true', normalURL);                    // informa para a API que a url foi encurtada
            }                                   
        })
}

/*
    A cada segundo busca a URL encurtada na API
*/
setInterval(() => {
    getShortURL(serverURL, normalURL);
}, 1000);

/*
    - Envia false para mostrar que a URL ainda nao foi encurtada
*/
sendNormalURL('false', "");

