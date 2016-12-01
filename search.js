window.$$$wrap$$$ = function () {

    //deal with all sch data
    for (var i in $$$edgeData$$$) {
        for(var j in $$$edgeData$$$[i]) {
            if($$$edgeData$$$[i][j].name) {
                $$$edgeData$$$[i][j].qname = encodeURIComponent($$$edgeData$$$[i][j].name.split("\n")[0]);
            }
        }
    }

    window.word = edge.query("q");
    if (window.word != null && window.word.trim().length == 0) {
        window.word = null;
    }

    window.iconmap = {
        "speaker": "street-view",
        "investor": "star",
        "schedule": "calendar",
        "company": "rocket",
        "search": "search"
    };

    window.scores = {
        speaker: {
            name: 5,
            position: 3,
            desc: 0.5
        },
        investor: {
            name: 5,
            area: 2,
            desc: 0.5,
            type: 1
        },
        schedule: {
            name: 5,
            speakers: 3
        },
        company: {
            name: 5,
            level: .5,
            desc: 3
        }
    };

    window.suggestion = {
        speaker: {
            name: 5,
            position: 3,
            desc: 0.5
        },
        investor: {
            name: 5,
            area: 2,
            desc: 0.5,
            type: 1
        },
        schedule: {
            name: 5,
            speakers: 3
        },
        company: {
            name: 5,
            level: .5,
            desc: 3
        },
        search: {
            name: 300
        }
    };

    window.lihaiScore = {
        speaker: {
            name: 3,
            // title: 3,
        },
        investor: {
            name: 3
        },
        schedule: {
            name: 3
        },
        company: {
            name: 5
        }
    };

    window.search_all = function (kw) {
        return search(kw, $$$edgeData$$$, scores);
    }

    window.suggestions = function (kw) {
        return search(kw, $$$edgeData$$$, suggestion);
    }

    window.search_match = function (kw) {
        var res = search(kw, $$$edgeData$$$, lihaiScore, 4);
        return res;
    }

    window.fillScores = function (dataSet) {
        //key -> arr -> obj
        var result = []
        for (var i in dataSet) {
            for (var j = 0; j < dataSet[i].length; j++) {
                result.push(
                    {
                        key: i,
                        score: 100,
                        obj: dataSet[i][j]
                    }
                );
            }
        }
        return result;
    }

    window.hookSuggestion = function (dataSet, scoreScheme) {
        var elem = $$$(document.querySelector(".searchbar input"));
        var container = $$$(document.querySelector(".searchbar .sug"));

        elem.bind("propertychange change click keyup input paste", function (event) {
            // If value has changed...
            if (elem.data('oldVal') != elem.val()) {
                // Updated stored value
                elem.data('oldVal', elem.val());
                var searched = suggestions(elem.val());
                container.children().remove();
                i = 4;
                while (searched.length > 0 && i > 0) {
                    i--;
                    var e = searched.pop();
                    var tmp = $$$template("search_sug", { icon: iconmap[e.key], keyword: encodeURIComponent(e.obj.name), text: e.obj.name }).appendTo(container);
                    tmp.click(function () {
                        window.location.href = "/?q=" + encodeURIComponent(e.obj.name);
                    })
                }
            }
        });
    }


    //deal with all sch data
    for (var i = 0; i < $$$edgeData$$$.schedule.length; i++) {
        var cur = $$$edgeData$$$.schedule[i];
        console.log(cur);
        cur.start = dayhourTotime(cur.date, cur.start_time, 11);
        cur.end = dayhourTotime(cur.date, cur.end_time, 11);
    }

};