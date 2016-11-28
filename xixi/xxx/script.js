var http = require("http");
var fs = require("fs");
var xlsx = require("node-xlsx");

// var list = xlsx.parse("/Users/emerge_2/Downloads/嘉宾同步1124—大阳更新.xlsx");


// var file = require('fs').readFileSync('schedule.json').toString("utf8");
// var json = JSON.parse(file);
// var res = [];
// for(var i = 0; i < json.length; i++){
//   var col = json[i];
//   var host = null;
//   res.push({
//       date: col.date?col.date.trim():null,
//       part: col.part?col.part.trim():null,
//       slot: col.slot?col.slot.trim():null,
//       position: col.position?col.position.trim():null,
//       time: col.time?col.time.trim():null,
//       name: col.name?col.name.trim():null,
//       speakers: col.speakers?col.speakers.trim().replace(/\r\n/g,','):null
//   });
// }
// fs.writeFile('./wise.json',JSON.stringify(res));

// var data = list[1].data;
// var res = [];
// var _date = '';
// var _part = '';
// var _slot = '';
// var _pos = '';
// for(var i = 0; i < data.length; i++){
//   if(data[i].length > 1){
//     var _t = data[i];
//     if(_t[0]){
//       _part = _t[0];
//       _slot = _t[1];
//       _pos = _t[2];
//     }
//     res.push({
//       date: _date,
//       part: _part,
//       slot: _slot,
//       position: _pos,
//       time: _t[3],
//       name: _t[4],
//       speakers: _t[5]
//     })
//   }else{
//     _date = data[i][0] || _date;
//   }
// }

// for(var i = 0; i < list.length; i++){
//     fs.writeFile(`./${list[i].name}.json`,JSON.stringify(list[i].data));
// }

//   "排序",
//         "归属",
//         "姓名",
//         "公司",
//         "职位",
//         "照片",
//         "签名",
//         "上不上",
//         "独角兽",
//         "未来",
//         "投资人",
//         "时代",
//         "企服",
//         "简介"


// var file = fs.readFileSync('嘉宾资料.json').toString('utf8');
// var json = JSON.parse(file);
// var path = '/Users/emerge_2/Downloads/嘉宾1124 2/';
// var res = [];

// json.forEach((v)=>{
//     res.push({
//         id: v[0],
//         genera: v[1],
//         name: v[2],
//         company: v[3],
//         title: v[4],
//         sign: v[6]?true:false,
//         on: v[7]?true:false,
//         unicorn: v[8]?true:false,
//         future: v[9]?true:false,
//         investor: v[10]?true:false,
//         epoch: v[11]?true:false,
//         es: v[12]?true:false,
//         desc: v[13]?v[13]:null
//     });
// });

// fs.readdir(path, function(err, files) {
//     files.forEach(function(filename) {
//         var newPath = res.find(v=>!!filename.match(v.name));
//         var oldPath = path + filename;
//         if(newPath){
//             newPath = path + newPath.id + '.png';
//             fs.rename(oldPath, newPath, function(err) {
//                 if (!err) {
//                     console.log(filename + '副本替换成功!')
//                 }
//             })
//         }
//     })
// });

// fs.writeFile('./speakers.json',JSON.stringify(res));
var file = fs.readFileSync('../../data/schedule.json').toString('utf8');
var json = JSON.parse(file);
var res = []
json.forEach(v=>{
	var time = v.time.split(' – ');
	if(time[1]){
		var start_time = time[0];
		var end_time = time[1];
		var sp = v.speakers?v.speakers.split(','):[];
		var speakers = sp.map(x => {var xxx = x.split(' ');return xxx[xxx.length - 1]})
		res.push(Object.assign({},v,{speakers:speakers.join(','),start_time,end_time}))
	}
})
fs.writeFile('../../data/schedule3.json',JSON.stringify(res));