const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

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



    
const register = (datra) => new Promise((resolve, reject) => {
    fetch('https://api.mydoorwallet.com/api/v1/auth/signup', {
        method: 'POST',
        headers: {
        'authority': 'api.mydoorwallet.com',
        'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'accept': 'application/json, text/plain, */*',
        'content-type': 'application/json;charset=UTF-8',
        'authorization': 'Bearer',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://mydoorwallet.com',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://mydoorwallet.com/',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
    },
        body: JSON.stringify(datra)
    })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

(async() => {
    for (let i = 0; i < 100; i++) {
    const indoName = await generateIndoName();
    const { result } = indoName;
    const user = result[0].email;
    const first = result[0].firstname;
    const last = result[0].lastname;
    const phone = result[0].phone;

    const datra = {
        "utm_campaign":"",
        "utm_content":"",
        "utm_source":"",
        "fname":first,
        "lname":last,
        "email":user,
        "zipcode":"66263",
        "phone":phone,
        "password":"Toor2002",
        "ip":"182.1.73.115"
    }

    const regist = await register(datra);
    console.log(result)
    var hasil = await regist
    hasil = JSON.parse(hasil)
    hasil = JSON.stringify(hasil)
    fs.appendFileSync('localStorage.txt',`\n${hasil}`);
}
})();