const express = require('express')
const route = express.Router()

exports.getName = function (req, res) {
    res.send('<h2>EXPORT</h2>')

}
route.get('/:id/:mode', (req, res) => {
    let topics = [
        'Node',
        'PHP',
        'HTML'
    ]
    let _html = `
        <a href="/topic/0/">Node</a><br>
        <a href="/topic/1/">PHP</a><br>
        <a href="/topic/2/">HTML</a><br>
        
        ${topics[req.params.id]}
    `
    // res.send(_html)

    res.send("##" + req.params.id + " _ " + req.params.mode)
})


route.get('/', (req, res) => {
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


module.exports = route