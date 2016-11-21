	var fs = require('fs');
	var request = require("request");
	var cheerio = require("cheerio");
	 
	var url = 'http://huodong.36kr.com/wise3/';
	var speakers = [],company = [];
	var id = 0;

	request(url, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var $ = cheerio.load(body);
			//speaker
			$('.participent .list li').each(function () {
				id += 1;
				var dir = 'speaker';
				var src = $(this).find('img').attr('src');
				var s = src.split('/');
				var date = s[s.length - 3];
				var img = id + '.png';
				var name = $(this).find('.person').text();
				var company = $(this).find('.company').text();
				var position = $(this).find('.position').text();
				console.log('正在下载' + src);
				download(src, dir, img);
				speakers.push({id: id, date: date, name: name, company: company, position: position});
				console.log('下载完成');
			});

			fs.writeFileSync('./speaker.json',JSON.stringify(speakers));

			//todo: company 没有各种信息！！！！！明天记得要！！！！！
			// $('.media ul li').each(function () {
				
			// });
		}
	});
	 

	var download = function(url, dir, filename){
		request.head(url, function(err, res, body){
			request(url).pipe(fs.createWriteStream(dir + "/" + filename));
		});
	};