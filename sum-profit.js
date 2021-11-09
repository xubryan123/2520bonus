const through = require("through2")

let sum = 0

const sumProfit = () => {
    return through.obj(function(buf, enc, next){
        console.log(buf)
        sum += parseFloat(buf.profit)
        next()
    },
    (next) => {
        next(null, `${sum.toFixed(2)}`)
    })
}

module.exports = { sumProfit }