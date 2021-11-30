const fetch = require('node-fetch');
const readline = require("readline-sync");
const crypto = require("crypto");
const delay = require('delay');
const device =  crypto.randomBytes(8).toString("hex")
const cookie = 'PHPSESSID=0a69c4104583a0af75ec50517b3d224d' //COOKIE IRVANSEKEDE
const reff = 'ronytan619' //REFF

const functionCheckNumber = (nomor) => new Promise((resolve, reject) => {
    fetch(`https://api.nanovest.io/v1/account/phone-number/availability?countryCode=62&phoneNumber=${nomor}`, { 
        method: 'GET'
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionSendOtp = (nomor) => new Promise((resolve, reject) => {

    const bodys = {
        "countryCode": "62",
        "phoneNumber": nomor
    }

    fetch('https://api.nanovest.io/v1/auth/otp', { 
        method: 'POST',
        body: JSON.stringify(bodys),
        headers: {
            'Host': 'api.nanovest.io',
            'accept': 'application/json, text/plain, */*',
            'x-device-id': device,
            'x-timezone': 'Asia/Shanghai',
            'accept-language': 'ID',
            'content-type': 'application/json',
            'content-length': 48,
            'accept-encoding': 'gzip',
            'user-agent': 'okhttp/3.12.12'
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionVerifOtp = (nomor, otp) => new Promise((resolve, reject) => {

    const bodys = {
        "countryCode": "62",
        "phoneNumber": nomor,
        "code": otp
    }

    fetch('https://api.nanovest.io/v1/auth/token', { 
        method: 'POST',
        body: JSON.stringify(bodys),
        headers: {
            'Host': 'api.nanovest.io',
            'accept': 'application/json, text/plain, */*',
            'x-device-id': device,
            'x-timezone': 'Asia/Shanghai',
            'accept-language': 'ID',
            'content-type': 'application/json',
            'content-length': 48,
            'accept-encoding': 'gzip',
            'user-agent': 'okhttp/3.12.12'
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionReff = (token, reff) => new Promise((resolve, reject) => {
    fetch(`https://api.nanovest.io/v1/referral/referral-code/submit/${reff}`, { 
        method: 'POST',
        headers: {
            'Host': 'api.nanovest.io',
            'accept': 'application/json, text/plain, */*',
            'x-device-id': device,
            'x-timezone': 'Asia/Shanghai',
            'authorization': `bearer ${token}`,
            'accept-language': 'ID',
            'content-type': 'application/json',
            'content-length': 48,
            'accept-encoding': 'gzip',
            'user-agent': 'okhttp/3.12.12'
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const funcordernumber = () => new Promise((resolve, reject) => {
    fetch('https://irvankedeotp.com/pages/order/ajax/order.php', {
        method: 'POST',
        headers: {
            'authority': 'irvankedeotp.com',
            'x-kl-ajax-request': 'Ajax_Request',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'accept': '*/*',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
            'origin': 'https://irvankedeotp.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://irvankedeotp.com/pages/order/',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': `${cookie}`
        },
        body: 'country_id=6&service_id=100'
    })
    .then(res => res.text())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
    });
    
    const funccekstatus = () => new Promise((resolve, reject) => {
    fetch('https://irvankedeotp.com/pages/order/ajax/get_orders_datatables.php?draw=30&columns%5B0%5D%5Bdata%5D=0&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=1&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=2&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=3&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=4&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=5&columns%5B5%5D%5Bname%5D=&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=6&columns%5B6%5D%5Bname%5D=&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=true&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=asc&start=0&length=10&search%5Bvalue%5D=&search%5Bregex%5D=false&_=1638065482986', {
        headers: {
            'authority': 'irvankedeotp.com',
            'x-kl-ajax-request': 'Ajax_Request',
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://irvankedeotp.com/pages/order/',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': `${cookie}`
        }
    })
    .then(res => res.text())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
    });
    
    const funcsetready = (id) => new Promise((resolve, reject) => {
    fetch('https://irvankedeotp.com/pages/order/ajax/set_status.php', {
        method: 'POST',
        headers: {
            'authority': 'irvankedeotp.com',
            'x-kl-ajax-request': 'Ajax_Request',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'accept': 'text/html, */*; q=0.01',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
            'origin': 'https://irvankedeotp.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://irvankedeotp.com/pages/order/',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': `${cookie}`
        },
        body: `id=${id}&status=ready`
    })
    .then(res => res.text())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
    });
    

const funchapusnomor = (id) => new Promise((resolve, reject) => {
    fetch('https://irvankedeotp.com/pages/order/ajax/set_status.php', {
        method: 'POST',
        headers: {
            'authority': 'irvankedeotp.com',
            'x-kl-ajax-request': 'Ajax_Request',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'accept': 'text/html, */*; q=0.01',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
            'origin': 'https://irvankedeotp.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://irvankedeotp.com/pages/order/',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': `${cookie}`
        },
        body: `id=${id}&status=success`
    })
    .then(res => res.text())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
    });


(async () => {
    for (let i = 0; i < 500; i++) {
        const ordernomer = await funcordernumber()
            const order = await ordernomer.split(':')[2].replace(/"/g,"").replace(/}/g,"")
            if(order == 'gagal order'){
                console.log('nomor belum tersedia')
            }else{
                console.log(order) 
        
         //while (order == "sukses membeli nomor virtual"){

            const statusorder = await funccekstatus()
        //console.log(statusorder)
                const id = await statusorder.split('"')[9]
                const nomor = await statusorder.split("'")[1].replace(/62/g,"");
                console.log("nomer : "+nomor)

            const setready = await funcsetready(id)
            console.log("Mengaktifakn nomor")


        const checkNumber = await functionCheckNumber(nomor)
        if(checkNumber.data ==  { available: true }|| checkNumber.message == null){
            //console.log(checkNumber)
            console.log("Nomor belum kepake")

            const sendOtp = await functionSendOtp(nomor)
            const hasil = JSON.stringify(sendOtp)
            console.log(hasil)
            if(sendOtp.message == null){
                console.log('OTP berhasil dikirim')
                
                //const otp = readline.question('OTP : ')

            await delay(20000)


                const statusorder = await funccekstatus()
                const otp = await statusorder.split("'")[3].replace(/JANGAN BERITAHU KODE RAHASIA KE SIAPA PUN termasuk pihak nanovest. Kode rahasia verifikasi nanovest kamu adalah/g,"").replace(/ /g,"").split('.')[0]
                console.log("kode otp : "+otp)

                const verifOtp = await functionVerifOtp(nomor, otp)
                if(verifOtp.message == null){
                    console.log('OTP benar, aktivasi sukses')

                    const token = verifOtp.data.token

                    const inReff = await functionReff(token, reff)
                    if(inReff.message == null){
                        console.log(`Reff sukses [${reff}]`)
                            const hapusnomor = await funchapusnomor(id)
                                console.log(`Menghapus nomor\n`)

                            await delay(2000)
                    } else {
                        console.log(`Reff gagal [${reff}]\n`)
                    }

                } else {
                    console.log('OTP salah, aktivasi gagal\n')
                }
            } else {
                console.log('OTP gagal dikirim\n')
            }

       } else {
            console.log('Nomor sudah terdaftar\n')
       }
    }
}

})();