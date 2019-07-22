// 实现顶部标签页的显示、隐藏
$('.logo-icon span').bind('click', function() {
    // 获取span标签的class属性值
    let ifClose = $('.logo-icon span').attr('class');
    // console.log(ifClose);
    // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
    // 如果要检索的字符串值没有出现，则该方法返回 -1。
    if (ifClose.indexOf("remove") != -1) {
        // 隐藏
        $('.links-area').addClass("hide");
        $('#moreIcon').addClass("glyphicon-th-list");
        $('#moreIcon').removeClass("glyphicon-remove");
        $('#moreIcon').removeClass("moreIcon-active");
    } else {
        // 显示
        $('.links-area').removeClass("hide");
        $('#moreIcon').removeClass("glyphicon-th-list");
        $('#moreIcon').addClass("glyphicon-remove");
        $('#moreIcon').addClass("moreIcon-active");
    }
});

// 封装方法：点击时导航条隐藏
function miss() {
    // 获取span标签的class属性值
    let ifClose = $('.logo-icon span').attr('class');
    // console.log(ifClose);
    // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
    // 如果要检索的字符串值没有出现，则该方法返回 -1。
    if (ifClose.indexOf("remove") != -1) {
        $('.links-area').addClass("hide");
        $('#moreIcon').addClass("glyphicon-th-list");
        $('#moreIcon').removeClass("glyphicon-remove");
        $('#moreIcon').removeClass("moreIcon-active");
    }
};
// 点击导航栏图标时，隐藏
$('.nav-pills li').bind('click', function() {
    miss();
});
// 点击页面其他位置时，隐藏
$('.tab-content').bind('click', function() {
    miss();
});
// 下载按钮，暂未启用
$('#download').bind('click', function() {
    alert("暂未启用");
});
// 第一次加载时为小屏幕时，自动改变标签页class属性
if ($(window).width() < 768) {
    $('.tab-pane').addClass("in");
    $('.tab-pane').addClass("active");
};
// 通过屏幕大小，改变tab-pane元素的class属性值
// $(window).resize()可以监听屏幕尺寸变化
$(window).resize(function() {
    if ($(window).width() < 768) {
        $('.tab-pane').addClass("in");
        $('.tab-pane').addClass("active");
    } else {
        $('.tab-pane').removeClass("in");
        $('.tab-pane').removeClass("active");
        // 当屏幕由小变大时，将页面切换到首页
        $('#home').addClass("in");
        $('#home').addClass("active");
        // 当屏幕由小变大时，将导航栏状态重置到首页
        $('.mynav li').removeClass("active");
        $('.mynav li:first-child').addClass("active");
    }
});