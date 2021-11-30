const Captcha = require("2captcha");
const keyCaptcha = '1b9ed84a0414a1900ca1b58c0fd8c9e1';
const fetch = require('node-fetch');
const jwt_decode = require('jwt-decode');
const readlineSync = require('readline-sync');


const functionGetTokenAction = (sitekey, pageurl) => new Promise((resolve, reject) => {
    fetch(`http://2captcha.com/in.php?key=${keyCaptcha}&method=userrecaptcha&version=v3&action=action&min_score=0.3
    &googlekey=${sitekey}&pageurl=${pageurl}`, {
        method: "get"
    })
        .then(res => res.text())
        .then(text => {
            resolve(text);
        })
        .catch(err => reject(err));
});


const functionGetRealTokenAction = (id) => new Promise((resolve, reject) => {
    fetch(`http://2captcha.com/res.php?key=${keyCaptcha}&action=get&json=1&id=${id}`, {
        method: "get"
    })
        .then(res => res.json())
        .then(text => {
            resolve(text);
        })
        .catch(err => reject(err));
});

const verif = (accessToken, emailToken, body) => new Promise((resolve, reject) => {
    const datra = { "firstName": body.firstName, "lastName": body.lastName, "DoB": body.DoB, "emailId": body.email, "password": "Kholif57!", "token": emailToken, "referralCode": body.referralCode };
    fetch('https://mail.ledgermail.io/v3/api/auth/signup', {
        method: 'POST',
        headers: {
            'authority': 'd32uscg0d7yvt0.cloudfront.net',
            'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
            'accept': 'application/json, text/plain, */*',
            'authentication': '',
            'accesstoken': '03AGdBq25WW2QBLfrihGrsRRLNwq0hVBhrTZa2KsLYP8yFRJYt0kr70ARuXGBKDYIWdUQYr_D_WbQ5w-kcZFIk0QtZDmhVKDpXpkM1mDOCoGEPRm7uQbHi-rE0JVI6A8BWAAFFUd85uksIh21xmf7R9FmtUbqLFhysYG1d2USMxq_x73tizd4Q60Hr9jnRAlWp1TuZVgJ_Mj5fdMmxN-zTMaTpLLSILtzSfXeBxMY0xPxLTd1T7lh8MObr5hQ1n9qhKWk1hkJHwjiuUBgkvLmmLEqx481FbgM4SfvTS7y5TJ7utlOqTHVsZDzpiDcVEXAKJj4kFenC6ZZpBKYtNW1ONdCu9KSXSi_NQnuRo1gaKAWaqgb2e_AvjlcE3AbA97G-BxznQXxQ5NzQqdCn5GJYONUwQtygvpveZNm8ieqmkoB-YvfSVo4gGHXHqVIQBE6jyiROu_3uyIgc',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
            'content-type': 'application/json;charset=UTF-8',
            'origin': 'https://mail.ledgermail.io',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://mail.ledgermail.io/',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
        },
        body: JSON.stringify(datra)
    }).then(res => res.text())
        .then(res => resolve(res))
        .catch(err => reject(err))
});



(async () => {
    const emailToken = readlineSync.question('Masukan jwt nya : ')
    const decoded = jwt_decode(emailToken);
    console.log(decoded)

    const actionToken3 = await functionGetTokenAction('6Lfz7_MbAAAAACmu3k85v-qW2aSjLTdIOR3s68Vy', `https://mail.ledgermail.io/v3/auth/email-verification?token=${emailToken}`);
    const requestId3 = actionToken3.split('|')[1];
    let resultActionToken3 = {
        request: ''
    }
    do {
        resultActionToken3 = await functionGetRealTokenAction(requestId3);
        console.log(resultActionToken3, '3')
    } while (resultActionToken3.request === 'CAPCHA_NOT_READY');

    const theRealActionToken2 = resultActionToken3.request;

    const resultVerif = await verif(theRealActionToken2, emailToken, decoded)
    console.log(resultVerif)

})();