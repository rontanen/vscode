const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
const UserAgents = require('user-agents');
const delay = require('delay');

(async() => {
    for (let i = 0; i < 500; i++) {
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

    await page.goto('https://link.getvybes.co/p/ronytan')
    await page.waitForSelector('.link-item:nth-child(1) > img');
    await delay(5000)
    const kliker = '.link-item:nth-child(1) > img'
    await page.click(kliker)
    await delay(10000)
    console.log(i)
 ;

    await browser.close();
    }

})();