var file = require('fs').readFileSync("./schedule1").toString("utf8");
file = file.split("\n");

var day = 7;
var schedule = [];

for (var l = 0; l < file.length; l++) {
    if(file[l].indexOf('---') == 0) {
        day++;
        continue;
    }
    var cols = file[l].split("\t");
    var date = day;
    var start = cols[0].trim().split("-")[0].trim()
    var end = cols[0].trim().split("-")[1].trim()
    var name = cols[1];
    var speakers = cols[2];
    schedule.push({
        name: name,
        speakers: speakers,
        start_time: start,
        end_time: end,
        date: day.toString()
    });
}

console.log(JSON.stringify(schedule));