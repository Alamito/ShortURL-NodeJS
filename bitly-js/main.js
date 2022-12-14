const axios = require('axios');
const { BitlyClient } = require('bitly');
const bitly = new BitlyClient('-> Bitly API Key <-', {}); //bitly api key ex: a1c4ed361hcab82cb7va3fay203d7a956d8401j1

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

    const promiseCallback = async (resolve, reject) => { 
        bitly.shorten(normalURL)
            .then(function (result) {
                return resolve(result.link);
            })
            .catch(error => {
                errorURLInvalid(error);
            });
    }
    
    return new Promise(promiseCallback);
}

/*
    - Trata erro de URL invalida
*/
const errorURLInvalid = (error) => {
    sendShortURL('false', error.description);
    updateStatus('true', "");
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