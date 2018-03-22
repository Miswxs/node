/*
@requre
 */
/*============================================*/
const common = require('./lib/common.js')
const express = require("express")
const app = express()
const router = express.Router()
const fs = require('fs')
const hostname = '127.0.0.1'
const PORT = process.env.PORT || 3000
/*============================================
* config
============================================*/
app.locals.pretty = true;
app.set('views', './views')
app.set('view engine', 'jade')
app.use(express.static('public'))
/*============================================
*
* router
*
============================================*/
let indexFile = __dirname + '/public/index.html'
app.get('/template', (req, res) => {

    res.render('temp',{time:Date(),title:'This is my title!!'})
})
app.get('/', (req, res) => {
    res.send('test ')
})
app.get('/login', (req, res) => {
    res.send('login')
})
app.get('/dynamic', (req, res) => {
    var lis = '';
    for (var i = 0; i < 5; i++) {
        lis += '<li>coding</li>'
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link type="text/css" rel="StyleSheet" href="./css/common.css">
</head>
<body>
<ul>
${lis}
</ul>
${time}
dynamic.html
<p>test</p>
</body>
</html>`
    res.send(output)
})
/*
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.sendFile(indexFile);
})
app.get('/about/', function (req, res) {
    res.send('<h1>T2EST</h1>')
})
router.get('/module/', (req, res) => {
    res.send('<h1>module</h1>')
})
*/
app.listen(PORT, () => {
    console.log('start SERVER')
    console.log(__dirname);
})
