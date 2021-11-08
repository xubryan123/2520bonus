const parse = require('csv-parse');
const { filterByCountry } = require('./filter-by-country.js');
const { sumProfit } = require('./sum-profit.js');
const {pipeline} = require("stream");
const csvParser = parse({columns: true})
const {createReadStream, createWriteStream} = require("fs");
const {createGunzip} = require('zlib');

let profitList = []

let sum = 0

// pipeline(
//     createReadStream("data.csv.gz"),
//     createGunzip(),
//     csvParser
//     // filterByCountry("Italy"),
//     .on("data", (col) => {
//         let profits = filterByCountry("Italy", col)
//         profitList.push(profits)
//     }),
//     // sumProfit(),
//     (err) => {
//         if (err){
//             console.log(err)
//             process.exit(1)
//         }
//         console.log(profitList)
//     }
// )


pipeline(
    createReadStream("data.csv.gz"),
    createGunzip(),
    csvParser
    .on("data", (col) => {
        let profits = filterByCountry("Italy", col)
        sum += parseFloat(profits)
    }),
    (err) => {
        if (err){
            console.log(err)
            process.exit(1)
        }
        console.log(sum.toFixed(2))
    }
)

