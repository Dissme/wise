var edgeroot = 'http://wifi.lan';
window.edgeroot = edgeroot;
window.projroot = edgeroot + "/";

window.$Edge = {
    deps: [
        [edgeroot + '/utils/common.js'],
        [edgeroot + '/utils/pinyin.js'],
        [edgeroot + '/utils/searchutil.js'],
        [edgeroot + '/data/search.json'],
        [edgeroot + '/data/company.json'],
        [edgeroot + '/data/investor.json'],
        [edgeroot + '/data/schedule.json'],
        [edgeroot + '/data/speaker.json'],
        [edgeroot + '/search.js'],
    ],
    init: [edgeroot + '/menu.js']
};