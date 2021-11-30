const fetch = require('node-fetch');
const cheerio = require('cheerio')
const fs = require('fs');
const random = require('random-name');
const readlineSync = require('readline-sync');

const randstr = (length) =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });

const getkey = () => new Promise((resolve, reject) => {  
    fetch('https://api.lunarcrush.com/v2?requestAccess=lunar&platform=web&device=Chrome&deviceId=LDID-93f01967-5868-4ca1-92f2-2dd62966e097&validator=pTh0fpwO5ZwZnS0fpvhvvrrwvpwwt0pO&clientVersion=lunar-20211013&userAgent=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F94.0.4606.81%20Safari%2F537.36&viewportSize=982x754&screenSize=1536x864&locale=id-ID&token=null', {
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

const getkey2 = () => new Promise((resolve, reject) => {  
    fetch('https://api.lunarcrush.com/v2?requestAccess=lunar&platform=web&device=Chrome&deviceId=LDID-93f01967-5868-4ca1-92f2-2dd62966e097&validator=pTh0fpwO5ZwZnS0fpvhvvrrwvpwwt0pO&clientVersion=lunar-20211013&userAgent=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F94.0.4606.81%20Safari%2F537.36&viewportSize=982x754&screenSize=1536x864&locale=id-ID&token=null', {
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


const click = (key) => new Promise((resolve, reject) => {
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

const sendemail = (seed,email,key) => new Promise((resolve, reject) => {  
    fetch(`https://api.lunarcrush.com/v2?data=auth&version=ksjdf7dfk3&action=get-code&seed=${seed}&email=${email}&key=${key}`, {
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
    .then((res) => res.text())
    .then((res) => {
        resolve(res);
    })
    .catch((err) => {
        reject(err);
    });
    });


    const getverifymael = (domain,name) => new Promise((resolve, reject) => {
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
        const $ = cheerio.load(result)
        const node = $("p:nth-child(5) > a").attr("href");
        //const kodeasli = node.split('=')[2]
            resolve(node)
        })
        .catch((err) => reject(err));
    });   

const verifemail = (token,key1,id) => new Promise((resolve, reject) => {  
    fetch(`https://api.lunarcrush.com/v2?data=auth&action=confirm-token&token=${token}&challenge=${id}&freakshowCode=r1uRb6Pr03nub5nOO69P90srx9Qu605su7rZt0eP5es0ce&tsl=10&key=${key1}`, {
    headers: {
        'authority': 'api.lunarcrush.com',
        'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'accept': '*/*',
        'origin': 'https://confirm.lnr.app',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://confirm.lnr.app/',
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
    
const confirmemail = (id,veriftoken,key) => new Promise((resolve, reject) => {  
    fetch(`https://api.lunarcrush.com/v2?data=auth&action=confirm-check&challenge=${id}&verify_token=${veriftoken}&share=7LpAKN&referral=&key=${key}`, {
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
.then(res => res.json())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});


    (async() => {
        console.log('pilih 1 buat confirm ,pilih semsbarang buat create acoun')
        const berapaRef = readlineSync.question(' (ex. 1) ? ');
    if(berapaRef === "1"){
    //randomname
    const domain = ['playfuny.com'];
    const email = `${random.first()}${random.middle()}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
    console.log(email)
//getkeyregist
    const funkey = await getkey()
    const key = funkey.split(',')[0].split(':')[1].replace(/"/g,"");
    const seed = funkey.split(',')[1].split(':')[1].replace(/"/g,"");
//clicklink
    const linkclik = await click(key)
    //console.log(linkclik)
//register
    const register = await sendemail(seed,email,key)
    const id = register.split(',')[7].split(':')[2].replace(/"/g,"");
    const veriftoken = register.split(',')[8].split(':')[1].replace(/"/g,"");
    //console.log(register)
//confirmail
    const confirmemail1 = await confirmemail(id,veriftoken,key)
    console.log(confirmemail1)
//filesytem
    const hasil = email+','+id+','+veriftoken+','+key
    console.log(hasil)
    hasiljadi = JSON.stringify(hasil)
    fs.appendFileSync('hasil.txt',`\n${hasiljadi}`);
        }
        if(berapaRef === "2"){
        const dataLocalStorage = await fs.readFileSync('hasil.txt', 'utf-8').split('\n');

        for (let index = 0; index < dataLocalStorage.length; index++) {
        const element = dataLocalStorage[index];
        const email = element.split(',')[0]
        const name = email.split('@')[0].replace(/"/g,"");
        const domain = email.split('@')[1]
        const link = await getverifymael(domain,name)
        linknya = JSON.stringify(link)
        fs.appendFileSync('linknyakuy.txt',`\n${linknya}`);
        }
            if(berapaRef === "3"){
            const dataLocalStorage = await fs.readFileSync('hasil.txt', 'utf-8').split('\n');

            for (let index = 0; index < dataLocalStorage.length; index++) {
            const element = dataLocalStorage[index];
            const id = element.split(',')[1]
            const veriftoken = element.split(',')[2]
            const key = element.split(',')[3].replace(/"/g,"");
        //getkey
            //const funkey = await getkey()
            //const key = funkey.split(',')[0].split(':')[1].replace(/"/g,"");
        //confirmlogin
            const confirmemail1 = await confirmemail(id,veriftoken,key)
            console.log(confirmemail1)
           }
        }
        }


    })();
