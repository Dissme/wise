window.findSpeaker = function (name) {
    for (var i in $$$edgeData$$$.speaker) {
        if ($$$edgeData$$$.speaker[i].name == name)
            return $$$edgeData$$$.speaker[i];
    }
}

window.$$$wrap$$$ = function () {

    edge.iconset(edgeroot);

    if (window.word !== null) {
        window.fresult = search_all(word);
        window.gresult = search_match(word);
        if (window.gresult.length == 0) {
            if (window.fresult.length < 3) {
                window.gresult = fresult;
                window.fresult = [];
            }
        }

        if (gresult.length == 0 || gresult.length > 3) {
            if ((/(场景|changjing|场景搜索|这里|context|here)/i.test(window.word))) {
                gresult = [];
                fresult = fillScores($$$edgeData$$$);
            }
            else if ((/(议程|议程安排|安排|agenda|schedule|时间)/i.test(window.word))) {
                gresult = [];
                fresult = fillScores({ schedule: $$$edgeData$$$.schedule });
            }
            else if ((/(演讲嘉宾|参会|人|VIP)/i.test(window.word))) {
                gresult = [];
                fresult = fillScores({ speaker: $$$edgeData$$$.speaker });
            }
            else if ((/(合作|start|up|伙伴|media|公司)/i.test(window.word))) {
                gresult = [];
                fresult = fillScores({ company: $$$edgeData$$$.company });
            }else if (/(参展|项目|project)/.test(window.word)) {
                gresult = [];
                fresult = fillScores({ investor: $$$edgeData$$$.investor });
            }
        }

    }

    var res = [
        "templates/common.html",
        "templates/list.html",
        "templates/about.html",
        "templates/detail.html"
    ];

    if (window.word == null) {
        res.push("templates/index.html");
    } else {
        res.push("templates/contentPage.html");
    }

    

    edge.deploy(projroot, res, function () {
        hookSuggestion();
    });

}