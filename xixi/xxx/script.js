var http = require("http");
var fs = require("fs");
var xlsx = require("node-xlsx");
var cheerio = require("cheerio");

// var path = '/Users/emerge_2/Downloads/合作/合作logo/';
// var list = xlsx.parse('/Users/emerge_2/Downloads/WISE大会流程整理最！！！！终.xlsx');
// list.forEach(v=>{
//     fs.writeFile(v.name+'_schedule.json',JSON.stringify(v.data));
// })
// var file = fs.readFileSync('../../data/investor.json').toString('utf8');
// var file2 = fs.readFileSync('../../data/company.json').toString('utf8');
// [
//         "会议名称",
//         "地点",
//         "时间",
//         "环节",
//         "嘉宾",
//         null,
//         "颜色"
//     ],

// {
//         "date": "6",
//         "part": "WISE 独角兽峰会",
//         "slot": "全天",
//         "position": "二层\r\n1号会议厅\r\n1500人",
//         "time": "09:00 – 09:05",
//         "name": "开场视频",
//         "speakers": null,
//         "start_time": "09:00",
//         "end_time": "09:05"
//     },

// var json = JSON.parse(file);
// var json2 = JSON.parse(file2);
// var part = '';
// var position = '';
// json.forEach(v=>{
//     if(v.length){
//         part = v[0]||part;
//         position = v[1]||position;
//         console.log(v);
//         var time = v[2].split(' – ');
//         var start_time = time[0];
//         var end_time = time[1];
//         var date = 6;
//         if(/(时代峰会)|(企服年会)/.test(part)){
//             date = 7;
//             console.log(part);
//         };
//         var speakers = v[4]?v[4].split('\r\n'):[];
//         if(speakers){speakers = speakers.map(x=>x.replace(/｜.*/,'').trim())}
//         res.push({date,part,position,start_time,end_time,name: v[3],speakers:speakers.join(',')});
//     }
// })

// var o = {};
// json.forEach(v=>{
//     if(o[v.name]){
//         o[v.name].area = o[v.name].area + ' ' + v.area;
//     }else{
//         o[v.name] = v;
//     }
// })
// var res = [];
// for(var i in o){
//     res.push(o[i]);
// }
// json.forEach(v=>{
//     if(!v.svg)
//     json2.forEach(x=>{
//         if(v.name == x.name && x.svg)v.svg = x.svg
//     })
// })
// json2.forEach(v=>{
//     if(!v.svg)
//     json.forEach(x=>{
//         if(v.name == x.name && x.svg)v.svg = x.svg
//     })
// })
// fs.writeFile('investor.json',JSON.stringify(json));
// fs.writeFile('company.json',JSON.stringify(json2));
// [
//         null,
//         "级别",
//         "顺序",
//         "渠道",
//         "名称",
//         "备注"
//     ],

// var file = fs.readFileSync('工作表1_company.json').toString('utf8');
// var json = JSON.parse(file);
// var res = [];
// var dir = fs.readdirSync(path);

// var level1 = null;
// var level2 = '';
// json.forEach(v=>{
//     if(v.length){
//         if(v[2]){
//             level2 = v[1]||level2;
//             var channel = v[3]||null;
//             var fp = dir.find(x=>!!x.match(v[4]));
//             if(!fp){
//                 console.log(v[4]);
//                 res.push({level: level1+' '+level2,channel,name: v[4],alt: v[5],svg: null})
//             }else{
//                 var $ = cheerio.load(fs.readFileSync(path+fp));
//                 res.push({level: level1+' '+level2,channel,name: v[4],alt: v[5],svg: $.html('svg')});
//             }
//         }else{
//             level1 = v[1]||level1;
//         }
//     }
// })

// json.forEach(v=>{
//     if(v.length){
//         var fp = dir.find(x=>!!x.match(v[1])||!!x.match(v[0]));
//         console.log(fp);
//         var $ = cheerio.load(fs.readFileSync(path+fp));
//         res.push({
//             area: v[0]||null,
//             name: v[1]||null,
//             desc: v[2]||null,
//             href: v[3]||null,
//             type: v[4]||null,
//             svg: $.html('svg')
//         })
//     }
// })
// fs.writeFile('company.json',JSON.stringify(res));

// var file = fs.readFileSync('嘉宾资料xxx.json');
// var json = JSON.parse(file);
// var res = [];
// json.forEach(v=>{
//     if(v&&v[0])res.push({
//         id: v[0],
//         genera: v[1]||null,
//         name: v[2]||null,
//         company: v[3]||null,
//         position: v[4]||null,
//         sign: v[6]?true:false,
//         on: v[7]?true:false,
//         unicorn: v[8]?true:false,
//         future: v[9]?true:false,
//         investor: v[10]?true:false,
//         epoch: v[11]?true:false,
//         es: v[12]?true:false,
//         desc: v[13]||null
//     })
// })
// res.forEach(v=>{
//     Object.keys(v).forEach(x=>{
//         if(typeof v[x] == "string"){
//             v[x] = v[x].trim();
//         }
//     })
// })
// fs.writeFile('speaker.json',JSON.stringify(res));

// var path = '../../assets/speakers/';
// fs.readdir(path,(err,files)=>{
//     if(err)return console.log(err);
//     var i = 0;
//     files.forEach(filename=>{
//         if(/.png$/.test(filename))fs.rename(path + filename,'speaker/' + (filename.replace('.png','') - 1) + '.png');
//     })
// })
// [
//         "排序",
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
//     ],

// {
//         "id": 1,
//         "genera": "媒体",
//         "name": "柳传志",
//         "company": "联想",
//         "position": "联想控股董事长，联想集团创始人",
//         "sign": false,
//         "on": true,
//         "unicorn": true,
//         "future": false,
//         "investor": false,
//         "epoch": false,
//         "es": false,
//         "desc": null
//     },

// list.forEach(v=>{
//     fs.writeFile(v.name + 'xxx.json',JSON.stringify(v.data));
// })
// var file = fs.readdirSync('活动流程.json').toString("utf8");
// var json = JSON.parse(file);
// var res = [];
// json.forEach(v=>{
    
// })
// fs.writeFile('schedule.json',JSON.stringify(list));

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
// var path = '../../ipad/logo/';
// var res = '';
// fs.readdir(path, function(err, files) {
//     files.forEach(function(filename) {
// 		var $ = cheerio.load(fs.readFileSync(path+filename));
//         // var newPath = res.find(v=>!!filename.match(v.name));
//         // var oldPath = path + filename;
//         // if(newPath){
//         //     newPath = path + newPath.id + '.png';
//         //     fs.rename(oldPath, newPath, function(err) {
//         //         if (!err) {
//         //             console.log(filename + '副本替换成功!')
//         //         }
//         //     })
//         // }
// 		var h = $.html('svg');
// 		res+=`<div class="comp">${h}</div>`;
//     });
// 	fs.writeFile('svgs',res);
// });

// fs.writeFile('./speakers.json',JSON.stringify(res));
// var file = fs.readFileSync('../../data/schedule.json').toString('utf8');
// var json = JSON.parse(file);
// var res = []
// json.forEach(v=>{
// 	var time = v.time.split(' – ');
// 	if(time[1]){
// 		var start_time = time[0];
// 		var end_time = time[1];
// 		var sp = v.speakers?v.speakers.split(','):[];
// 		var speakers = sp.map(x => {var xxx = x.split(' ');return xxx[xxx.length - 1]})
// 		res.push(Object.assign({},v,{speakers:speakers.join(','),start_time,end_time}))
// 	}
// })
// fs.writeFile('../../data/schedule3.json',JSON.stringify(res));