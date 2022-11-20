const axios = require('axios');
const { BitlyClient } = require('bitly');
const bitly = new BitlyClient('e1b4ed361ecab82cb73a3fab203d7a966d8401a1', {});

const serverURL = "http://127.0.0.1:8080/api/v1/customer-wallets";

/*
    - Envia a URL encurtada para a API na posição de ID 2
*/
const sendShortURL = (status, url) => {
    const updateURL = {
        used: status,
        url: url,
    }

    axios.put(`${serverURL}/2`, updateURL)
}

/*
    - Pega a URL nao encurtada e retorna a URL encurtada
*/
const getNormalURL = (serverURL) => { 

    const promiseCallback = async (resolve) => {
        let response = await new Promise((resolve) => {
            return resolve(axios.get(serverURL))
        })
        let data = await new Promise((resolve) => {
            const data = response.data.customerWallets.data[0];
            if (data.used == 'false') {
                doShortURL(data.url)
                    .then(response => {
                        return resolve(response)
                    })
            }
        })
        return resolve(data)
    }

    return new Promise(promiseCallback);
}

/*
    - Atualiza o status da URL para usada
*/
const updateStatus = (status, url) => {
    const updateURL = {
        used: status,
        url: url,
    }

    axios.put(`${serverURL}/1`, updateURL)
}

/*
    - Encurta a URL
*/
const doShortURL = (normalURL) => {

    const promiseCallback = async (resolve) => { 
        bitly.shorten(normalURL)
            .then(function (result) {
                return resolve(result.link);
            })
            .catch(function (error) {
                console.error(error);
            });
    }
    
    return new Promise(promiseCallback);
}

/*
    - A cada segundo busca na API uma URL para ser encurtada
*/
setInterval(() => {
    getNormalURL(serverURL)
        .then(response => {
            sendShortURL('false', response);
            updateStatus('true', response);
        })
}, 1000);