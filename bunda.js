const Captcha = require("2captcha");
const keyCaptcha = '1b9ed84a0414a1900ca1b58c0fd8c9e1';
const solver = new Captcha.Solver(keyCaptcha);
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const indoName = await generateIndoName();
const { result } = indoName;
const user = result[0].username;
const name = result[0].firstname.toLowerCase() + result[0].lastname.toLowerCase();
const phone = result[0].phone;

const getRequestId = (siteKey, pageUrl) => new Promise((resolve, reject) => {
    fetch(`http://2captcha.com/in.php?key=7a12ec8473e8c16c5b085b5c7fc28e78&method=userrecaptcha&googlekey=${siteKey}&pageurl=${pageUrl}`)
    .then(async res => {
        const result = {
            response: await res.text()
        }

        resolve(result);
    })
    .catch(e => {   
        reject(e)
    })
});


const getCaptchaResponse = (taskId) => new Promise((resolve, reject) => {
    fetch(`http://2captcha.com/res.php?key=7a12ec8473e8c16c5b085b5c7fc28e78&action=get&id=${taskId}`)
    .then(async res => {
        const result = {
            response: await res.text()
        }

        resolve(result);
    })
    .catch(e => {
        reject(e)
    })
});

const generateIndoName = () =>
    new Promise((resolve, reject) => {
        fetch("https://swappery.site/data.php?qty=1", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });


const gettoken = () => new Promise((resolve ,reject) => {
    fetch('https://ruangnyamanbunda.com/poinnyaman/daftar', {method: 'GET'})
    .then(res => res.text())
    .then(result => {
        const $ = cheerio.load(result)
        const token = $('meta[name="google-site-verification"]').attr('content')
        resolve(token)
    })
});

const regist = (token,gCaptchaResponse) => new Promise((resolve, reject) => {
    fetch('https://ruangnyamanbunda.com/poinnyaman/daftar', {
        method: 'POST', body: `_token=${token}&email=${user}%40gmail.com&name=${user}&full_name=${name}&phone=${phone}&password=Toor2002&password_confirmation=Toor2002&referral_code=USPV1282&agreement=true&g-recaptcha-response=${gCaptchaResponse}`})
    .then(res => res.text())
    .then(result => resolve(result))
    .catch(err => reject(err))
});

//for (i = 1;i < 100; i++)
(async () => {
    const indoName = await generateIndoName();
    const { result } = indoName;
    const user = result[0].username;
    const name = result[0].firstname.toLowerCase() + result[0].lastname.toLowerCase();
    const phone = result[0].phone;

    const googleSiteKey = '6LdWfJkcAAAAAEYNYcczqewRNfv-MzVt0GK3gq09';
    const googlePageUrl = 'https://ruangnyamanbunda.com/poinnyaman/daftar';

    const requestIdResult = await getRequestId(googleSiteKey, googlePageUrl);
    const taskId = requestIdResult.response.split('|')[1];
    console.log(requestIdResult)

    let captchaResponse;

    do {
        captchaResponse = await getCaptchaResponse(taskId);
        console.log(captchaResponse)
    } while (captchaResponse.response === 'CAPCHA_NOT_READY');


    const gCaptchaResponse = captchaResponse.response.split('|')[1]
    console.log(captchaResponse)

    const token = await gettoken();
    const payload = `_token=${token}&email=${user}%40gmail.com&name=${user}&full_name=${name}&phone=${phone}&password=Toor2002&password_confirmation=Toor2002&referral_code=USPV1282&agreement=true&g-recaptcha-response=${gCaptchaResponse}`
    const test = await payload
    console.log(test)
    const register = await regist(payload,gCaptchaResponse);
    console.log(register)



})();
