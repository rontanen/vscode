const fetch = require('node-fetch');


    const gettoken = () => new Promise((resolve, reject) => {
        fetch('https://api.lunarcrush.com/v2?requestAccess=lunar&platform=web&device=Chrome&deviceId=LDID-13527091-66f3-48b1-b191-5773aa3bcacd&validator=fT5vO0pfwwhTnZufufpf5OOT00TuS0Sr&clientVersion=lunar-20211013&userAgent=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F94.0.4606.81%20Safari%2F537.36&viewportSize=982x754&screenSize=1536x864&locale=id-ID&token=null', {
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

    const register1 = () => new Promise((resolve, reject) => {
        fetch('https://api.lunarcrush.com/v2?data=auth&action=get-code&email=divavera1102%40gmail.com&key=cst3cq64l062x6gkv4r4rlodt0us49', {
            headers: {
                'authority': 'api.lunarcrush.com',
                'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
                'sec-ch-ua-platform': '"Windows"',
                'accept': '*/*',
                'origin': 'https://lunarcrush.com',
                'sec-fetch-site': 'same-site'
            }
        })
        .then(res => res.text())
        .then(text => {
            resolve(text);
        })
        .catch(err => reject(err));
    });
    
const register = () => new Promise((resolve, reject) => {
    fetch('https://api.lunarcrush.com/v2?data=auth&action=confirm-check&challenge=DxMAo6&verify_token=fgykzar2inyh6qskv4rrboz1owpk2&share=50RJxd&referral=&key=cst3cq64l062x6gkv4r4rlodt0us49', {
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

(async() => {
    for (let i = 0; i < 100; i++) {
    const regist = await register1();
    //const tokene= result[0].token;
    console.log(regist)

    }
})();