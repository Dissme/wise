var edgeroot = 'http://w161u73649.51mypc.cn:21755/';
window.edgeroot = edgeroot;
window.projroot = edgeroot + "/";

window.$Edge = {
    deps: [
        [edgeroot + '/utils/common.js'],
        [edgeroot + '/utils/pinyin.js'],
        [edgeroot + '/utils/searchutil.js'],
        [edgeroot + '/utils/three.min.js'],
        [edgeroot + '/utils/Projector.js'],
        [edgeroot + '/utils/CanvasRenderer.js'],
        [edgeroot + '/data/search.json'],
        [edgeroot + '/data/company.json'],
        [edgeroot + '/data/schedule.json'],
        [edgeroot + '/data/speaker.json'],
        [edgeroot + '/data/investor.json'],
        [edgeroot + '/search.js'],
    ],
    init: [edgeroot + '/main.js']
};

