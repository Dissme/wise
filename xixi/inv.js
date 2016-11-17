var file1 = require('fs').readFileSync("./inv-11.7").toString("utf8");
file1 = file1.split("\n");

var file2 = require('fs').readFileSync("./inv-11.8").toString("utf8");
file2 = file2.split("\n");


var investor = {};

for (var l = 0; l < file1.length; l++) {
    var cols = file1[l].split("\t");
    investor[cols[0]] = {
        time: "7",
        tags: cols[1],
        name: cols[0],
        desc: cols[2],
        url: cols[3],
        id: 4 + l,
    };
}

for (var l = 0; l < file2.length; l++) {
    var cols = file2[l].split("\t");
    if (!investor[cols[0]]) {
        investor[cols[0]] = {
            time: "8",
            name: cols[0],
            tags: cols[1],
            desc: cols[2],
            url: cols[3],
            id: 42 + l
        };
    } else {
        investor[cols[0]].time += ",8";
    }
}

var out = [];
for (var i in investor) {
    out.push(investor[i]);
}
console.log(JSON.stringify(out));