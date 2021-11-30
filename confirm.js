const fetch = require('node-fetch');
const cheerio = require('cheerio')
const fs = require('fs');

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

const getkode = (name,domain) => new Promise((resolve, reject) => {
    fetch('https://generator.email/inbox6/', {
        headers: {
            'authority': 'generator.email',
            'cache-control': 'max-age=0',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'sec-fetch-site': 'none',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': `_ga=GA1.2.924411071.1631760118; __gads=ID=7df89103a9b7c9bb-22ee8799a4cb002e:T=1631760118:RT=1631760118:S=ALNI_MbhRaD4249RbdMRYl3YQhkRL6AvcA; embx=%5B%${name}%40${domain}%22%2C%22krystlealairdvoq0%40playfuny.com%22%2C%22rickigiffyfbtmt%40playfuny.com%22%2C%22ethelinddavide3jr2b%40playfuny.com%22%2C%22carmeliakippyvyrqq%40playfuny.com%22%2C%22ahmadsd8sd%40playfuny.com%22%2C%22fkarimnady55m%40ndgbmuh.com%22%2C%22rdr.sohaib14%40hooeheee.com%22%2C%222charee%40domy.me%22%2C%22mmuhammed.sami.9o%40klttec.com%22%2C%220miromiso.marodiv%40xolymail.ga%22%2C%225abd.alkader20224%40microcenter.io%22%2C%225saradra%40supoa.site%22%2C%22hachraf.u%40zetgets.com%22%2C%225kimo_mohamed93a%402wslhost.com%22%2C%22cmuhammadawais.t%40rmtmarket.ru%22%5D; surl=playfuny.com/perlmaxbku8h`
        }
    })
    .then((res) => res.text())
    .then((result) => {
    const $ = cheerio.load(result)
    const node = $("p:nth-child(5) > a").attr("href");
    const kodeasli = node.split('=')[2]
        resolve(kodeasli)
    })
    .catch((err) => reject(err));
});   

const confirmmail = (id,newkode,kentod) => new Promise((resolve, reject) => {
fetch(`https://api.lunarcrush.com/v2?data=auth&action=confirm-token&token=${newkode}&challenge=${id}&freakshowCode=51qCe6Blw3bw95xvh5vh98srQ0h9c11S79Onp4fe5Dpsu1&tsl=10&key=${kentod}`, {
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


const confirmcheck = (id,keyes,kentod) => new Promise((resolve, reject) => {
    fetch(`https://api.lunarcrush.com/v2?data=auth&action=confirm-check&challenge=${id}&verify_token=${keyes}&share=&referral=&key=${kentod}`, {
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

    (async() => {

        const dataLocalStorage = await fs.readFileSync('hasil.txt', 'utf-8').split('\n');

        for (let index = 0; index < dataLocalStorage.length; index++) {
            const element = dataLocalStorage[index];
            const email = element.split(',')[2].split(':')[1].replace(/"/g,"");
            const keyes = element.split(',')[8].split(':')[1].replace(/"/g,"");
            const id = element.split(',')[7].split(':')[2].replace(/"/g,"");
            const name = email.split('@')[0];
            const domain = email.split('@')[1];
            //console.log(domain)

            const ref = '7LpAKN'

            const key = await getkey()
            console.log(key)
            const kentod = key.split(',')[0].split(':')[1].replace(/"/g,"");
            const newkode = await getkode(name,domain)
            console.log(keyes)
            console.log(newkode)
            console.log(email)
            console.log(id)
            const confirm = await confirmmail(id,newkode,ref,kentod)
            console.log(confirm)
            const verif = await confirmcheck(id,keyes,kentod)
            console.log(verif)
            //hasil = JSON.stringify(confirm)
            //fs.appendFileSync('lunaraccount.txt',`\n${hasil}`);
        }
        



      //  const key = await getkey()
   // const { token } = key;
     //   const confirm = await confirmmail(token)
      //  console.log(confirm)
    })();