const load = require('cheerio').load


const $ = load('./test.html')

console.log($('div.post-body >div td'))
