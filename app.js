/*
@requre
 */
/*============================================*/
const common = require('./lib/common.js')
const path = require('path')
const express = require("express")
const app = express()
const router = express.Router()
const hostname = '127.0.0.1'
const PORT = process.env.PORT || 3000

/*============================================
* config
============================================*/
app.locals.pretty = true;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade')
app.use(express.static('public'))
app.listen(PORT, () => {
    console.log('start SERVER')
    console.log(__dirname);
})
/*============================================
* routers
============================================*/
let indexFile = __dirname + '/public/index.html'
app.get('/template', (req, res) => {
    res.render('temp', {time: Date(), title: 'This is my title!!'})
})

app.use('/router', require('./routers'))
app.use('/login', require('./routers/login.js'))

module.exports = app