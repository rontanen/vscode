const fetch = require('node-fetch');
const cheerio = require('cheerio');

const gettoken = () => new Promise((resolve ,reject) => {
    fetch('https://member.mldspot.com/sso/register', {method: 'GET'})
    .then(res => res.text())
    .then(result => {
        const $ = cheerio.load(result)
        const token  = $('input[name="_token"]').attr('value')
        resolve(token)
    })
});

const getcaptcha= () => new Promise((resolve ,reject) => {
    fetch('https://member.mldspot.com/sso/register', {method: 'GET'})
    .then(res => res.text())
    .then(result => {
        const $ = cheerio.load(result)
        const captcha  = $('tag[name="center"]').attr('src')
        resolve(captcha)
    })
});


const regist = (data) => new Promise((resolve, reject) => {
    fetch('https://member.mldspot.com/sso/register', {
        method: 'POST', body: data})
    .then(res => res.text())
    .then(result => resolve(result))
    .catch(err => reject(err))
});

(async () => {
    const token = await gettoken()
    const data = `name=endang+supriyati&email=divavera77%40gmail.com&password=Toor2002&password_confirmation=Toor2002&captcha=ggggg&_token=${token}`
      
      //register = await regist(data)
      //console.log(register)

      //console.log(data) 
      const captchares = await getcaptcha() 
      console.log(captchares)

})();