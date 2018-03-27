/*
@requre
 */
/*============================================*/
const config = require('./config.js')
const common = require('./lib/common.js')
const path = require('path')
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const router = express.Router()

/*============================================
* config
============================================*/
app.locals.pretty = true;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({//form->post
    extended: false
}))
app.listen(config.port, () => {
    console.log('start SERVER')
    common.log(__dirname);
})

/* Route 경로 설정 */
let indexFile = __dirname + '/public/index.html'
app.get('/template', (req, res) => {
    res.render('temp', {time: Date(), title: 'This is my title!!'})
})
app.get('/form', (req, res) => {
    res.render('form')
})
app.post('/form_receiver', (req, res) => {
    let title = req.body.title
    let desc = req.body.desc
    res.send(title + ' / ' + desc)
})
app.use('/router', require('./routers'))
app.use('/login', require('./routers/login.js'))

//DB
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('link-to-mongodb',(err,database)=>{
    console.log("---------")
    console.log(database)
})

module.exports = app