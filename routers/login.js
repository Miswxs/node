var express = require('express')
var route = express.Router()
route.get('/', (req, res) => {
    res.send('<div>INDEX</div>')
})
route.get('/write', (req, res) => {
    res.send('<div>write</div>')
})
module.exports = route