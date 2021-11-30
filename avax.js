const fetch = require('node-fetch');


const funcgetlink = (email) => new Promise((resolve, reject) => {  
fetch('https://faucet.avax-test.network/api/token', {
    method: 'POST',
    headers: {
        'authority': 'faucet.avax-test.network',
        'x-kl-ajax-request': 'Ajax_Request',
        'accept': 'application/json, text/plain, */*',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'sec-ch-ua-platform': '"Windows"',
        'content-type': 'application/json;charset=UTF-8',
        'origin': 'https://faucet.avax-test.network',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://faucet.avax-test.network/',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'cookie': '',//'_ga=GA1.2.1777916253.1630604050',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"g-recaptcha-response":"03AGdBq25YCU7pMJsQm3-UOeByoGVQ22hII_fcto4UQx_Ay7WXzRvCKRTQKbPmCohPVM6fbrAFjowqSBuPzYfJ-4BBWHavtTMnPkVBO5P-gbz3Y5xJ6anU5ju8nVbVBG2k7r32zH5-Dep56qHVD37xCilD_VzxGLQQJmQnxpHytazwop2qSG1TTthlc3NzCHiw1X-p2urYKjxUdk69Cmtltk1Kug3RinMv5KepZpc9rGAnTkGXj74kP94HOnAiALjUhStR9aZZvuN1aQNyGA5Z-5u809KNn-Fl5im6TbcoyvK5_KCzwDWJtc1oPlEiEAEFDALlegPJEhiauVfFTRGhORePSNl5x2w1Pc2rLjkfnfUtySjseTTGDC_V93jlQ4OWJYW_OjP5CYEZl5Wlgc7cHe5tdfpguGHYfTFvGi1yCpYLD54bqcmM_rDMlzTvbnD7hgo2fyyrqE6zdx9mS_szME2U8pZvQ0jClIC_Z1DHT64FDUOeP8L09Xk","address":"0xDD287Ac8A352C619b0434116130964faa4a8F67B"})
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});


(async() => {
const avax = await funcgetlink()
console.log(avax)


})();