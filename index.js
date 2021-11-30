const Captcha = require("2captcha");
const keyCaptcha = '1b9ed84a0414a1900ca1b58c0fd8c9e1';
const solver = new Captcha.Solver(keyCaptcha);
const fetch = require('node-fetch');
const jwt_decode = require('jwt-decode');
const cheerio = require('cheerio')

const email = `lasot59675@okhko.com`;

const randstr = length =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });



function getString(start, end, all) {
    const regex = new RegExp(`${start}(.*?)${end}`);
    const str = all
    const result = regex.exec(str);
    return result;
}




const functionGetTokenAction = (sitekey) => new Promise((resolve, reject) => {
    fetch(`http://2captcha.com/in.php?key=${keyCaptcha}&method=userrecaptcha&version=v3&action=action&min_score=0.3
    &googlekey=${sitekey}&pageurl=https://mail.ledgermail.io/auth/signup`, {
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


const functionGetToken = (email, domain) => new Promise((resolve, reject) => {
    fetch(`https://generator.email/${domain}/${email}`, {
        method: "get",
        headers: {
            accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "accept-encoding": "gzip, deflate, br",
            cookie: `_ga=GA1.2.659238676.1567004853; _gid=GA1.2.273162863.1569757277; embx=%5B%22${email}%40${domain}%22%2C%22hcycl%40nongzaa.tk%22%5D; _gat=1; io=io=tIcarRGNgwqgtn40O${randstr(3)}; surl=${domain}%2F${email}`,
            "upgrade-insecure-requests": 1,
            "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
        }
    })
        .then(res => res.text())
        .then(text => {
            const instagramLinkConfirmation = getString('<div id="email-table"><a href="', '"', text);
            resolve(instagramLinkConfirmation);
        })
        .catch(err => reject(err));
});

const functionGetEmail = (email, token, domain) => new Promise((resolve, reject) => {
    fetch(`https://generator.email/${email}/${token}`, {
        method: "get",
        headers: {
            accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "accept-encoding": "gzip, deflate, br",
            cookie: `_ga=GA1.2.659238676.1567004853; _gid=GA1.2.273162863.1569757277; embx=%5B%22${email}%40${domain}%22%2C%22hcycl%40nongzaa.tk%22%5D; _gat=1; io=io=tIcarRGNgwqgtn40O${randstr(3)}; surl=${domain}%2F${email}%2F${token}`,
            "upgrade-insecure-requests": 1,
            "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
        }
    })
        .then(res => res.text())
        .then(text => {

            // #email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > div.center-card > div.card-inner > div:nth-child(2) > a
            const token = getString('a href="https://mail.ledgermail.io/auth/email-verification?token=', '"', text);
            console.log(token)
            resolve(token);
        })
        .catch(err => reject(err));
});

const functionGetLink = (email, domain) =>new Promise((resolve, reject) => {
    fetch(`https://generator.email/${domain}/${email}`, {
        method: "get",
        headers: {
            accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "accept-encoding": "gzip, deflate, br",
            cookie: `_ga=GA1.2.659238676.1567004853; _gid=GA1.2.273162863.1569757277; embx=%5B%22${email}%40${domain}%22%2C%22hcycl%40nongzaa.tk%22%5D; _gat=1; io=io=tIcarRGNgwqgtn40O${randstr(3)}; surl=${domain}%2F${email}`,
            "upgrade-insecure-requests": 1,
            "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
        }
    })
        .then(res => res.text())
        .then(text => {
            const $ = cheerio.load(text);
            const src = $("#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > div.center-card > div.card-inner > div:nth-child(5) > a").attr("href");
            resolve(src);
        })
        .catch(err => reject(err));
});





const create = (gCaptchaToken, gCpatchaToken3, data) => new Promise((resolve, reject) => {
    const datra = {
        "firstName": data.firstName,
        "lastName": data.lastName,
        "email": data.email,
        "DoB": "2000-05-10",
        "referralCode": data.refferal,
        "name": "",
        "entryTime": 1630350633469,
        "reCaptchaToken": gCpatchaToken3,
        "exitTime": 1630350654600
    }
    console.log(datra, gCaptchaToken)
    fetch('https://mail.ledgermail.io/v3/api/auth/verification-mail', {
        method: 'POST',
        headers: {
            'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
            'accessToken': gCaptchaToken,
            'sec-ch-ua-mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json, text/plain, */*',
            'Referer': 'https://mail.ledgermail.io/',
            'authentication': ''
        },
        body: JSON.stringify(datra)
    }).then(res => res.text())
        .then(res => resolve(res))
        .catch(err => reject(err))
});

const verif = (gCaptchaToken, emailToken, body) => new Promise((resolve, reject) => {
    const datra = { "firstName": body.firstName, "lastName": body.lastName, "DoB": body.DoB, "emailId": body.email, "password": "paswordMuApa321!", "token": emailToken, "referralCode": body.referralCode };
    fetch('https://mail.ledgermail.io/v3/api/auth/signup', {
        method: 'POST',
        headers: {
            'authority': 'd32uscg0d7yvt0.cloudfront.net',
            'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
            'accept': 'application/json, text/plain, */*',
            'authentication': '',
            'accesstoken': gCaptchaToken,
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
    const linkAccess = 'https://mail.ledgermail.io/referral/LM612BD429AEBC9FF4527E4FDB';
    const actionToken = await functionGetTokenAction('6Lfz7_MbAAAAACmu3k85v-qW2aSjLTdIOR3s68Vy');
    const requestId = actionToken.split('|')[1];
    let resultActionToken = {
        request: ''
    }
    do {
        resultActionToken = await functionGetRealTokenAction(requestId);
        console.log(resultActionToken)
    } while (resultActionToken.request === 'CAPCHA_NOT_READY');

    const theRealActionToken = resultActionToken.request;


    const resultTokenCaptcha3 = () => new Promise((resolve, reject) => {
        solver
            .recaptcha("6Lf7qSocAAAAAGsmRfzTIPd5BbMGSLx_CM2SZj42", linkAccess)

            .then((res) => {
                resolve(res)
            }).then(err => reject(err));
    })



    const firstName = `rohit`;
    const lastName = `mehra`;


    const body = {
        firstName,
        lastName,
        email,
        refferal: ''
    };

    // const solbeCapthcaResult = await resultTokenCaptcha();
    // const gCpatchaToken = solbeCapthcaResult.data;

    const solbeCapthcaResult3 = await resultTokenCaptcha3();
    const gCpatchaToken3 = solbeCapthcaResult3.data;
    console.log(theRealActionToken, 'access token')
    console.log(gCpatchaToken3, 'gcaptcah body')
    const resultCreate = await create(theRealActionToken, gCpatchaToken3, body);

    const jsonResult = JSON.parse(resultCreate);
    console.log(jsonResult)
    if (jsonResult.message === 'Verification mail sent to your mail id') {
        // let token;
        // do {
        //     token = await functionGetToken(name, email.split('@')[1]);
        //     console.log(token)
        // } while (!token);

        // let realToken = token[1].split('/')[3]

        // let linkConfirm;
        // do {
        //     linkConfirm = await functionGetEmail(name, realToken, email.split('@')[1]);
        // } while (!linkConfirm);

        let linkConfirm;
        do {
            linkConfirm = await functionGetLink(name, email.split('@')[1]);
            console.log(linkConfirm)
        } while (!linkConfirm);


        const emailToken = linkConfirm.split('=')[1];
        const decoded = jwt_decode(emailToken);
        console.log(decoded)

        const resultTokenCaptcha2 = () => new Promise((resolve, reject) => {
            solver
                .recaptcha("6Lf7qSocAAAAAGsmRfzTIPd5BbMGSLx_CM2SZj42", `${linkAccess}`)

                .then((res) => {
                    resolve(res)
                }).then(err => reject(err));
        })

        const solbeCapthcaResult2 = await resultTokenCaptcha2();
        const gCpatchaToken2 = solbeCapthcaResult2.data;

        const resultVerif = await verif(gCpatchaToken2, emailToken, decoded)
        console.log(resultVerif)
    }


})();