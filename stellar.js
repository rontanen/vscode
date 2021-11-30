const fetch = require('node-fetch');
const cheerio = require('cheerio')
const fs = require('fs');
const random = require('random-name');

const randstr = (length) =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });

  const randName = (length) =>
  new Promise((resolve, reject) => {
    var text = "";
    var possible =
      "1234567890";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    resolve(text);
  });
  
const getnewemail = () => new Promise((resolve, reject) => {
    fetch('https://generator.email/', {
        headers: {
            'authority': 'generator.email',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': '_ga=GA1.2.924411071.1631760118; __gads=ID=7df89103a9b7c9bb-22ee8799a4cb002e:T=1631760118:RT=1631760118:S=ALNI_MbhRaD4249RbdMRYl3YQhkRL6AvcA; embx=%5B%22cmuhammadawais.t%40rmtmarket.ru%22%5D'
        }
})
.then(res => res.text())
.then(result => {
    const $ = cheerio.load(result)
    const name = $("#userName").attr('value')
    const domain = $("#domainName2").attr('value')
    const email = name+"@"+domain
    resolve(email)
})
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
    .then(res => res.json())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

const click = (token) => new Promise((resolve, reject) => {
    fetch(`https://api.lunarcrush.com/v2?data=track&key=ltcmzwz7sk6jjokvce5t9om9blwp`, {
        method: 'POST',
        headers: {
            'authority': 'api.lunarcrush.com',
            'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
            'sec-ch-ua-platform': '"macOS"',
            'content-type': 'text/plain;charset=UTF-8',
            'accept': '*/*',
            'origin': 'https://lunarcrush.com',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://lunarcrush.com/',
            'accept-language': 'id-ID,id;q=0.9',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ "items": [{ "type": "referrer", "area": "web", "value":"https://lunarcrush.com/s/50RJxd"},{"type": "initialParams", "area": "dashboard", "value": "{}" }, { "type": "share-click", "area": "dashboard", "id": "50RJxd", "value": 1}]})
    })
        .then((res) => res.json())
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
});

const sendmail = (email) => new Promise((resolve, reject) => {
    fetch(`https://api.lunarcrush.com/v2?data=auth&version=ksjdf7dfk3&action=get-code&seed=42&email=${email}&key=azbf4peaznjbyfkvdj1ad358w22tt`, {
        headers: {
            'authority': 'api.lunarcrush.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
            'accept': '*/*',
            'sec-gpc': '1',
            'origin': 'https://lunarcrush.com',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://lunarcrush.com/',
            'accept-language': 'en-US,en;q=0.9'
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



(async() => {
    for (let i = 0; i < 5000; i++) {
    //const email = await getnewemail()
    //console.log(email) 
    //const key = await getkey()
    //const { token } = key;

    const domain = ['playfuny.com'];
    const email = `${random.first()}${random.middle()}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
    console.log(email)
    const kirimmail = await sendmail(email)
    console.log(kirimmail)
    hasil = JSON.stringify(kirimmail)
    fs.appendFileSync('hasil.txt',`\n${hasil}`);
    }

    //const email = "2charee@domy.me"
    //const name = email.split('@')[0];
    //const domain = email.split('@')[1];
    //const jsonResult = JSON.parse(kirimmail);
    //console.log(jsonResult)
//console.log("hay")
    //sleep.sleep();
//console.log("lahhhhh")
        //const cekmesagebaru = await cekmesage(name,domain)
   // const newkode = await getkode(name,domain)
   // const kode = newkode.replace(/\s+/g, '')
   // console.log(kode)
   // const regist = await confirmmail(kode,token)
    //console.log(regist)

    
    //console.log(kode)
    //}
})();
