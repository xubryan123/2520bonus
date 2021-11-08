const through = require("through2")

const filterByCountry = (country, col) => {
    if (col.country === country) {
        return col.profit
    } else {
        return 0
    }
}

// const filterByCountry = (country) => {
//     return through(function (buf, enc, next){
//         if (buf.country === country) {
//             console.log(buf.country, buf.profit)
//             next(null, buf.profit)
//         }
//         next(null, 0)
//     })
// }

// { type: 'Snacks', country: 'Bahrain', profit: '65285.76' }
// { type: 'Snacks', country: 'Iceland', profit: '91399.68' }
// { type: 'Office Supplies', country: 'Belgium', profit: '520150.00' }  
// { type: 'Meat', country: 'North Korea', profit: '178063.60' }
// { type: 'Personal Care', country: 'Jamaica', profit: '146049.68' }    

module.exports = { filterByCountry }