var edgeroot = 'http://wifi.lan';
// var edgeroot = 'http://192.168.40.37/'
window.edgeroot = edgeroot;
window.projroot = edgeroot + "/";

window.$Edge = {
    deps: [
        [edgeroot + '/utils/common.js'],
        [edgeroot + '/utils/pinyin.js'],
        [edgeroot + '/utils/searchutil.js'],

        [edgeroot + '/data/search.json'],
        [edgeroot + '/data/company.json'],
        [edgeroot + '/data/schedule.json'],
        [edgeroot + '/data/speaker.json'],
        [edgeroot + '/search.js'],
    ],
    init: [edgeroot + '/main.js']
};
