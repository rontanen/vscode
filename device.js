const fetch = require('node-fetch');

const getkey = () => new Promise((resolve, reject) => {
fetch('https://api.lunarcrush.com/v2?requestAccess=lunar&platform=web&device=Chrome&deviceId=LDID-7bc2d016-7bf0-43d4-96f3-784d8443b4f3&validator=OuSvr0fwOuh0nTrnpwhTOZnrZnnTunhT&clientVersion=lunar-20211013&userAgent=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F94.0.4606.81%20Safari%2F537.36&viewportSize=982x754&screenSize=1536x864&locale=id-ID&token=null', {
    headers: {
        'authority': 'api.lunarcrush.com',
        'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'accept': '*/*',
        'origin': 'https://lunarcrush.com',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://lunarcrush.com/',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
    }
})
.then((res) => res.json())
.then((res) => {
    resolve(res);
})
.catch((err) => {
    reject(err);
});
});


const click = (token) => new Promise((resolve, reject) => {
    fetch(`https://api.lunarcrush.com/v2?data=track&key=sz5d6iu0firgzpdkvd4qmpzpscuep`, {
        method: 'POST',
        headers: {
            'authority': 'api.lunarcrush.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.3148.101 Safari/537.36',
            'content-type': 'text/plain;charset=UTF-8',
            'accept': '*/*',
            'origin': 'https://lunarcrush.com',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://lunarcrush.com/',
            'accept-language': 'en-US,en;q=0.9',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({"items":[{"type":"referrer","area":"web","value":"https://lunarcrush.com/s/7LpAKN"},{"type":"initialParams","area":"dashboard","value":"{}"},{"type":"share-click","area":"dashboard","id":"7LpAKN","value":1}]})
    })
        .then((res) => res.json())
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
});


(async() => {
    for (let i = 0; i < 300; i++) {
//const key = await getkey()
//const { token } = key;
//console.log(token)
const clicker = await click()
console.log(clicker)
    }

})();


const confirmmail = (id,kode,ref,token) => new Promise((resolve, reject) => {
    fetch(`https://api.lunarcrush.com/v2?data=auth&action=login&challenge=${id}&code=${kode}&share=${ref}&referral=&key=${token}`, {
        headers: {
            'authority': 'api.lunarcrush.com',
            'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'accept': '*/*',
            'origin': 'https://lunarcrush.com',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://lunarcrush.com/',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
        }
    })
    .then((res) => res.json())
    .then((res) => {
        resolve(res);
    })
    .catch((err) => {
        reject(err);
    });
    });