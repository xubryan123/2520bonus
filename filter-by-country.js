const through = require("through2");
const { Transform, pipeline } = require("stream");

const filterByCountry = (country) => {
    return through.obj(function(buf, enc, next){
        if (buf.country === country) {
            next(null, buf)
        }else{
            next()
        }
    })
}

module.exports = { filterByCountry }