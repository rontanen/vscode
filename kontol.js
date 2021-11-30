const fetch = require('node-fetch');
const cheerio = require('cheerio')

const getlinkmail = (domain,name) => new Promise((resolve, reject) => {
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
    .then((res) => res.text())
    .then((result) => {
    //const $ = cheerio.load(result)
    //const node = $("a:nth-child(1) > span")//.attr("href");
    //const kodeasli = node.split('=')[2]
        resolve(result)
    })
    .catch((err) => reject(err));
});   

    (async() => {
        const domain = 'playfuny.com'
        const email = 'kimberlynagosto1bdnc@playfuny.com'
        const maiil = await getlinkmail(domain,name)
        console.log(maiil)
    })();