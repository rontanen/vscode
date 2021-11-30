const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
const UserAgents = require('user-agents');
const delay = require('delay');

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

    await page.goto('http://clicks.kickofflabs.email/ls/click?upn=mlTqM5LG55nIqgzaDsGH-2FkJYCBLR2mJmbCGUM3qQG6K7K4NHGrZDCu8ZfCyHCrrFYhPtTOP9Ns1qjErPPozCW1Obr3TNU1c40O4ksEtZoEhllceLx5dfL8E-2FvsYE5LTn39RO_IZk0cTjtImEmr-2BTxBJBpLUdzm9y2OVbDbl5r6flp2ZhnYndmbomKfc-2BHh12ae4Oz17wT-2FT5MO0AMMqWmSFfVxZTU4-2B671Ou2CER2PjsVXzIWvYKHN-2F8fWzatLquxSUscMTXhdXFMnsHFm5fKqMRPwUUFzI6IftgM15Fv1-2Bbd40ulD1ctctynfbS4zoE79BViXeVXmAMv1s7KR-2Bd3ZYwB1HH4Eu4KUa-2B4Uh7OPigRikOowWGgGPaZ3IzprCHEDSDLUe0LLSEUrHoC0xViS89Nqe4GfhAUSqnpT3B5XPREHs5qr2ERvIZBfe5LErMqHy-2F5', {
        waitUntil: 'networkidle0',
        timeout: 120000,
    });

})();