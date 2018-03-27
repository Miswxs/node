/*
@date :2018.3.21
@example : common.jswww
 */
const colors = require('colors');

/* console.log => log( 'text' ); */
const log = console.log.bind(console)
module.exports = {
    'log': function (str) {
        log(colors.blue(str))
    },
    'test': function () {
        console.log(this)
        console.log('bbb')
    }
}