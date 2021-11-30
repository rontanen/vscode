const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
const UserAgents = require('user-agents');
const random = require('random-name');
const fetch = require('node-fetch');
const cheerio = require('cheerio')
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


(async() => {
    const browser = await puppeteer.launch({
        headless: false,
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

    await page.goto('https://lnr.app/s/20d3xG', {
        waitUntil: 'networkidle0',
        timeout: 120000,
    });


    await page.goto('https://lunarcrush.com/login', {
        waitUntil: 'networkidle0',
        timeout: 120000,
    });
    //randomname
const domain = ['playfuny.com'];
const email = `${random.first()}${random.middle()}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
const name = email.split('@')[0]
const formemail = ".css-11aywtz"
const submit = ".css-16my406:nth-child(1)"

   // await delay(2000)
console.log(email)
    await page.type(formemail, email)
    await delay(2000)
    await page.click(submit)
//getlinkverif
    await delay(10000)
    const link = await getverifymael(domain,name)
    console.log(link)
})();