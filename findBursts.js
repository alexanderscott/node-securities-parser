var fs = require('fs'),
    async = require('async'),
    securities = require('./data/secdata.json')
    bursts = [];
    
async.forEach(securities, function(secBiz, callback){
    
    var monthCount = secBiz.data.length; // for convenience
    
    var burst={
        maxGrowth : 0, //assumes the company has had at least 1 period of growth
        abbrev : secBiz.abbrev,
        periodStart : 0,
        periodEnd : 0,
        dataStart : new Date(secBiz.dataStart)
    };
    
    function findMax(period){
        if(period == monthCount){
            bursts.push(burst);
            callback();
        } else {
            function done() {
                findMax(period+1); // loop to a longer period
            }
            for(i=period;i < monthCount;i++){
                var growth = (secBiz.data[i] - secBiz.data[i-period])/secBiz.data[i-period];  // growth function as defined
                if(growth > burst.maxGrowth){
                    burst.periodStart = i-period;
                    burst.periodEnd = i;
                    burst.maxGrowth = growth;
                }
                
                if(i == (monthCount-1)){ return done()};
            }
        }
    }
    
    findMax(1); // begin first-order loop
       
       
}, function(err){
    if (err) throw err;
    
    // sort on maxGrowth
    async.sortBy(bursts, function(item, cb1){cb1(null, -item.maxGrowth); }, function(err, results){
        
        //display to stdout in series
        async.forEachSeries(results, function(burst, cb2){
            var startDate = new Date(burst.dataStart);
            var endDate = new Date(burst.dataStart);
            startDate.setMonth(startDate.getMonth()+burst.periodStart);
            endDate.setMonth(startDate.getMonth()+burst.periodEnd);
            
            console.log(burst.abbrev+" : "+(burst.maxGrowth*100).toFixed(2)+"% growth from "+
                        startDate.toDateString().substring(4).replace(/\s[0-9][0-9]\s/," ") +
                        " to "+endDate.toDateString().substring(4).replace(/\s[0-9][0-9]\s/," "));
                        
            cb2();
            
        }, function(err){
            if (err) throw err;
        });
    });
});
