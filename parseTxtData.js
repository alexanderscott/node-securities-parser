var fs = require('fs'),
    async = require('async'),
    securities = [],
    dataCollectionStart = new Date(2001, 10), // e.g. Nov 2001 - input the date of collection for reference later
    bizArr = fs.readFileSync('./data/secdata-raw.txt', 'utf8').split("\n"); // assuming the data is small enough to be stringified
    
async.forEach(bizArr, function(bizData, callback){
    var biz = {};
    var parseArr = bizData.split(" | ");
    
    biz.name = parseArr[0];
    biz.abbrev = parseArr[1];
    biz.dataStart = dataCollectionStart;
    biz.data = JSON.parse(parseArr[2]);
    
    securities.push(biz);
    callback();
    
}, function(err){
    fs.writeFile('./data/secdata.json', JSON.stringify(securities), function(err){
        if (err) throw err;
        console.log("text file parsed - see ./data/secdata.json");
    })
});
