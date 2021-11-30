const fetch = require('node-fetch');
const cheerio = require('cheerio')
const fs = require('fs');

(async() => {
    //randomname
            const domain = ['playfuny.com'];
            const email = `${random.first()}${random.middle()}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
    //getkeyregist
            const funkey = await getkey()
            const key = funkey.split(',')[0].split(':')[1].replace(/"/g,"");
            const seed = funkey.split(',')[1].split(':')[1].replace(/"/g,"");
    //clicklink
            const linkclik = await click(key)
            console.log(linkclik)
    //register
            const register = await sendemail(seed,email,key)
            const id = register.split(',')[7].split(':')[2].replace(/"/g,"");
            const veriftoken = register.split(',')[8].split(':')[1].replace(/"/g,"");
            console.log(register)
    //ngambil_tokendarimail
            const token = await getverifymael(email)
            console.log(token)
    //getkeybuatconfirm
            const keybaru = await getkey2()
            const key1 = keybaru.split(',')[0].split(':')[1].replace(/"/g,"");
    //verifmail
            const verifemail1 = await verifemail(token,id,key1)
            console.log(verifemail1)
    //confirmail
            const confirmemail1 = await confirmemail(id,veriftoken,key)
            console.log(confirmemail1)
    
    
        })();