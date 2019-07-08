$('.logo-icon span').bind('click', function() {
    let ifClose = $('.logo-icon span').attr('class');
    // console.log(ifClose);
    if (ifClose.indexOf("remove") != -1) {
        $('.links-area').addClass("hide");
        $('#moreIcon').addClass("glyphicon-th-list");
        $('#moreIcon').removeClass("glyphicon-remove");
        $('#moreIcon').removeClass("moreIcon-active");
    } else {
        $('.links-area').removeClass("hide");
        $('#moreIcon').removeClass("glyphicon-th-list");
        $('#moreIcon').addClass("glyphicon-remove");
        $('#moreIcon').addClass("moreIcon-active");
    }
});