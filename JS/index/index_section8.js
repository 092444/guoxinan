(function () {
    $(function () {
        // 鼠标经过某个小li 有两步操作：
        $(".king li").hover(function () {
            // 1.当前小li 宽度变为40%， 同时里面的小图片淡出，大图片淡入
            $(this).stop().animate({
                width: "44%",
            }, 400).find(".imgdiv").css({
                "transition": "background-position .6s",
                "background-position": "center"
            });
            // 2.其余兄弟元素小li宽度变为15%
            $(this).siblings("li").stop().animate({
                "width": "14%",
            }, 400).find(".imgdiv").css({
                "transition": "background-position 0.1s",
                "background-position": "left"
            });;
        },

            function () {
                $(this).stop().animate({
                    "width": "20%",
                }, 250, "swing").siblings("li").stop().animate({
                    "width": "20%",
                }, 250, "swing");

                $(this).find(".imgdiv").css({
                    "transition": "background-position 0.105s",
                    "background-position": "left"
                });
            })

    });
})();