var file = require('fs').readFileSync("./speaker").toString("utf8");
file = file.split("\n");

var speaker = [];

for (var l = 0; l < file.length; l++) {
    var cols = file[l].split("\t");
    var id = cols[0];
    var name = cols[1].trim() == "" ? cols[2] : cols[1];
    var corp = cols[3] || cols[4];
    var title = cols[5].trim() == "" ? cols[6] : cols[5];
    var desc = cols[7].trim();
    
    speaker.push({
        id: id,
        name: name,
        title: corp + " " + title,
        desc: desc
    });
}

console.log(JSON.stringify(speaker));