
// (
//     function () {
//         var designW = 4000;  //设计稿宽
//         var font_rate = 100;
//         //适配
//         document.getElementsByTagName("html")[0].style.fontSize = document.body.offsetWidth / designW * font_rate + "px";
//         document.getElementsByTagName("body")[0].style.fontSize = document.body.offsetWidth / designW * font_rate + "px";

//         //监测窗口大小变化
//         window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
//             document.getElementsByTagName("html")[0].style.fontSize = document.body.offsetWidth / designW * font_rate + "px";
//             document.getElementsByTagName("body")[0].style.fontSize = document.body.offsetWidth / designW * font_rate + "px";
//         }, false);
//     }
// )();

var FS = {};
(function (win, FS) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var dpr = 1;
    var scale = 1;
    var fontBase = 16;
    // 仅ios考虑2/3倍方案，其他设备下，仍旧使用1倍的方案
    if (/i(Phone|Pod|Pad)/.test(navigator.userAgent)) {
        var ratio = win.devicePixelRatio;
        dpr = ratio >= 3 ? 3 : (ratio >= 2 ? 2 : 1);
    } else {
        dpr = 1;
    }
    scale = 1 / dpr;
    docEl.setAttribute('data-dpr', dpr);
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', width=device-width, maximum-scale=' + scale + ', user-scalable=no');
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        FS.rem = rem;
    }
    var tid = null;
    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = fontBase * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function (e) {
            doc.body.style.fontSize = fontBase * dpr + 'px';
        }, false);
    }
    refreshRem();
    FS.dpr = dpr;
    FS.rem2px = function (d) {
        var val = parseFloat(d) * FS.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    FS.px2rem = function (d) {
        var val = parseFloat(d) / FS.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }
})(window, FS);

