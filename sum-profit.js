const through = require("through2")

// const sumProfit = (profitList) => {
//     for (profit of profitList){
//         sum += parseFloat(profit)
//     }
//     return sum
// }

const sumProfit = () => {
    return through(function (buf, enc, next){
        // if (buf.country === country) {
        //     console.log(buf.country, buf.profit)
        //     next(null, buf.profit)
        // }
        console.log(buf)
        next(null, 0)
    })
}

module.exports = { sumProfit }