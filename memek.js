const fetch = require('node-fetch');
const cheerio = require('cheerio')
const random = require('random-name');
const delay = require('delay');

const randstr = (length) =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });

const sendmail = (name,email) => new Promise((resolve, reject) => {  
fetch(`https://app.viral-loops.com/api/v2/events`, {
    method: 'POST',
    headers: {
        'authority': 'app.viral-loops.com',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'x-ucid': 'TqEXFdpalhve9tAcb7mXq2ni460',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'accept': '*/*',
        'origin': 'https://envoy.art',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://envoy.art/',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"params":{"event":"registration","user":{"firstname":name,"lastname":"","email":email,"extraData":{},"consents":{}},"referrer":{"referralCode":"GnJdPRN"},"refSource":"copy","acquiredFrom":"popup"},"publicToken":"TqEXFdpalhve9tAcb7mXq2ni460"})
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});

const getlinkmail = (domain,name) => new Promise((resolve, reject) => {
    fetch('https://generator.email/inbox8/', {
        headers: {
            'authority': 'generator.email',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'sec-gpc': '1',
            'sec-fetch-site': 'none',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-language': 'en-US,en;q=0.9',
            'cookie': `embx=%5B%22${name}%40${domain}%22%5D; surl=${domain}%2F${name}`
        }
    })
    .then((res) => res.text())
    .then((result) => {
    //const $ = cheerio.load(result)
    //const node = $("p:nth-child(5) > a").attr("href");
    //const kodeasli = node.split('=')[2]
        resolve(res)
    })
    .catch((err) => reject(err));
});   

const verif = (dt,name,email) => new Promise((resolve, reject) => {
    fetch(`https://envoy.art/launch/?dt=${dt}&autoTrigger=1&payload=%7B%22user%22%3A%7B%22firstname%22%3A%22${name}%22%2C%22lastname%22%3A%22%22%2C%22email%22%3A%22${email}%22%2C%22extraData%22%3A%7B%7D%2C%22consents%22%3A%7B%7D%7D%2C%22referrer%22%3A%7B%22referralCode%22%3A%22GnJdPRN%22%7D%2C%22refSource%22%3A%22copy%22%7D`, {
        headers: {
            'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
        }
    })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
    });


(async() => {
//generateemail
for (let i = 0; i < 500; i++) {
    const domain = ['playfuny.com'];
    const email = `${random.first()}${random.middle()}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
    const name = random.first()
    //sendemail
    const sendlink = await sendmail(name,email)
    console.log(sendlink)
    const dt = sendlink.split(',')[0].split(':')[1].replace(/"/g,"");
    console.log(dt)
    console.log(name)
    console.log(email)
    await delay(2000)
//verif
    const verifmail = await verif(dt,name,email)
    //console.log(verifmail)
    
}
})();