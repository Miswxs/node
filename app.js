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
*
* router
*
============================================*/

function routerProvider(path) {
    if (path === "/") {
        res.send('<h1>TEST</h1>')
    } else if (path === "/about/") {
        res.send('<h1>About</h1>')
    }
}

/*============================================
*
* router
*
============================================*/
let indexFile = __dirname + '/public/index.html'
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
app.listen(PORT, () => {
    console.log(__dirname);
})
