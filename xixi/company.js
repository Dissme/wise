var file = require('fs').readFileSync("./company").toString("utf8");
file = file.split("\n");

var company = [];

for (var l = 0; l < file.length; l++) {
    var cols = file[l].split("\t");
    var id = cols[0];
    var name = cols[1];
    if(cols[2]) {
        name += "\n" + cols[2];
    }
    var desc = cols[5];
    var url = cols[7];
    company.push({
        id: id,
        name: name,
        desc: desc,
        url: url
    });
}

console.log(JSON.stringify(company));