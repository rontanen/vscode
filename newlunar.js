const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');
const fs = require('fs');

const getkey = () => new Promise((resolve, reject) => {  
    const proxyAgent = new HttpsProxyAgent('http://http://51.77.10.128:3128/');
    fetch('https://api.lunarcrush.com/v2?requestAccess=lunar&platform=web&device=Chrome&deviceId=LDID-93f01967-5868-4ca1-92f2-2dd62966e097&validator=pTh0fpwO5ZwZnS0fpvhvvrrwvpwwt0pO&clientVersion=lunar-20211013&userAgent=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F94.0.4606.81%20Safari%2F537.36&viewportSize=982x754&screenSize=1536x864&locale=id-ID&token=null', {
        agent: proxyAgent,   
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
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});


const linkclick = (key) => new Promise((resolve, reject) => {  
    const proxyAgent = new ProxyAgent('http://amin4udin:Coegsekali1@91.239.130.17:12323')
    fetch(`https://api.lunarcrush.com/v2?data=track&key=${key}`, {
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
    for (let i = 0; i < 100; i++) {
//getkeyregist
    const funkey = await getkey()
    const key = funkey.split(',')[0].split(':')[1].replace(/"/g,"");
    const seed = funkey.split(',')[1].split(':')[1].replace(/"/g,"");
//linkclick
    const click = await linkclick(key)
    console.log(click)
    }
})();
