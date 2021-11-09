const parse = require('csv-parse');
const { filterByCountry } = require('./filter-by-country.js');
const { sumProfit } = require('./sum-profit.js');
const {pipeline} = require("stream");
const csvParser = parse({columns: true})
const {createReadStream, createWriteStream} = require("fs");
const {createGunzip} = require('zlib');

let profitList = []

pipeline(
    createReadStream("data.csv.gz"),
    createGunzip(),
    csvParser,
    filterByCountry("Italy"),
    sumProfit(),
    process.stdout,
    (err) => {
        if (err){
            console.log(err)
            process.exit(1)
        }
        console.log('done')
    }
)

