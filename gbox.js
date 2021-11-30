const fetch = require('node-fetch');
const cheerio = require('cheerio')
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



const create = () => new Promise((resolve, reject) => {
    fetch('https://gbox.space/api/user/register', {
        method: 'POST',
        headers: {
            'authority': 'gbox.space',
            'x-kl-ajax-request': 'Ajax_Request',
            'sec-ch-ua-mobile': '?0',
            'authorization': 'Zoiqkz-undefined',
            'content-type': 'application/json',
            'accept': 'application/json, text/plain, */*',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
            'origin': 'https://gbox.space',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': 'isLogin=',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({"code":"","email":"jadiaslas33@gmail.com","name":"wajah surtu","password":"L265a6AI2cpnz9bdJkRqUPPPz1KpPdf2Db25+1dJmIADz7eKiGWZMI2gZm++K7idRAjs9B2AzvmQ+GNPbIkQe5OPWs6W4lSLNZqn3RdJzVUxKC/y0YX/rUTun6C9Xy6ld3IM9IAlhEg0ANAFXl4cIEJe7SR2FetLVXbqSHRJYvI=","captchaVerification":"zzc6n1jsIev4W6KIh0j5XOmiY44ocYvyjy58NomZgOSN9Du0fnhDrjuQo9o7oLALF+4v9u68+Kaw+Jy9puiNOziacXVJP2nMF061mpTL61A="})
    })

    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});




(async() => {

    const indoName = await generateIndoName();
    const { result } = indoName;
    const email = result[0].email;
    const first = result[0].firstname;
    const last = result[0].lastname;
    const name = first+" "+last

    const regist = await create()
    console.log(regist)



})();