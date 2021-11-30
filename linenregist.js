const fetch = require('node-fetch');
const cheerio = require('cheerio')
const fs = require('fs');
const random = require('random-name');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
const UserAgents = require('user-agents');
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

const funcgetlink = (email) => new Promise((resolve, reject) => {  
fetch('https://generator.email/', {
    headers: {
        'authority': 'generator.email',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'accept-language': 'id-ID,id;q=0.9',
        'cookie': `_ga=GA1.2.912907824.1637998498; _gid=GA1.2.1611239844.1637998498; __gads=ID=d4166c0d5b56f4e2-223de5e849cf0019:T=1637998497:RT=1637998497:S=ALNI_Maq1ebBvll2fCLzXrUj-x7e8YJmnA; surl=${email}`
    }
})
.then((res) => res.text())
.then((result) => {
const $ = cheerio.load(result)
const node = $(".p:nth-child(4) > a").text()
//const kodeasli = node.split('=')[2]
    resolve(node)
})
.catch((err) => reject(err));
});

const funcregist = (email) => new Promise((resolve, reject) => {  
fetch('https://leads.kickofflabs.com/lead/155411', {
    method: 'POST',
    headers: {
        'Connection': 'keep-alive',
        'Cache-Control': 'max-age=0',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'accept': 'application/json',
        'content-type': 'application/json',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://linen.app',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://linen.app/',
        'Accept-Language': 'id-ID,id;q=0.9',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"email":email,"__rid":"38637d45-5dab-48a8-884a-a715939a6488","__uid":"703f7d1a-343f-4b25-9039-fa52e29dfa9e","__sid":"ed342160-363f-44e0-878f-adc614992d20","__kid":"1WVBG4","__url":"https://linen.app/?kid=1WVBG4","__lid":"155411","__language":"id-ID","__custom":{},"__source":"kf","__mm":204,"__kd":2})
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});


(async() => {
    for (let i = 0; i < 500; i++) {
//createemail
    const domain = ['playfuny.com'];
    const email = `${random.first()}${random.middle()}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
    console.log(email)
//regist
    const regist = await funcregist(email)
    console.log(regist)
//getlink
    //const link = await funcgetlink(email)
    //console.log(link)
//gotolink
await delay(5000)
const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
    slowMo: 0,
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-accelerated-2d-canvas',
        '--no-zygote',
        '--no-first-run',
        '--ignore-certificate-errors',
        '--ignore-certificate-errors-spki-list',
        '--disable-dev-shm-usage',
        '--disable-infobars',
        '--window-size=1920x1080'
    ]
});

const page = await browser.newPage();

await page.emulateTimezone("Asia/Jakarta");
const userAgent = new UserAgents();
await page.setUserAgent(userAgent.toString());
await page.setDefaultNavigationTimeout(0);

await page.goto(`http://generator.email/${email}`, {
    waitUntil: 'networkidle0',
    timeout: 120000,
});

const kliker = 'td > p:nth-child(4) > a'
await page.click(kliker)

await delay(7500)
await browser.close();
hasiljadi = JSON.stringify(email)
    fs.appendFileSync('linenakun.txt',`\n${hasiljadi}`);
    }
})();
