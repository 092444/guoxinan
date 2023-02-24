(function () {

    var backgroundImg = [
        "../Images/index/1.png",
        "../Images/index/1.2.jpg",
        "../Images/index/1.3.jpg",
        "../Images/index/1.4.jpg"
    ]

    $(".section .section1_bottom ul li").click(function () {
        // 获取轮播图片索引
        var _index = $(this).index();

        $(this).css("background-position", " 31px 0").siblings().css("background-position", "0 0");

        var path = 'url("' + backgroundImg[_index] + '")';
        console.log(path);
        // $(".section1").css("background", path);


        /**-------------------------------------------------------------------- */
        /*
        function pointer(pointer_index) {
            rotate_1 = pointer_index;
            $("#background_image").animate({ opacity: "0" }, 1000, function () { $(this).css("background-image", "url('image/top/" + pointer_index + ".jpg')") });
            $("#background_image").animate({ opacity: "1" }, 1000);
            rotate_1--;
            if (rotate_1 == 0) {
                rotate_1 = 4;
            }
            setTimeout("pointer(" + rotate_1 + ")", 10000);
        }
        setTimeout("pointer(" + rotate_1 + ")", 10000);



        $("#background_image").animate({ opacity: "0" }, 1000, function () { $(this).css("background-image", "url('image/top/" + pointer_index + ".jpg')") });


        $("#background_image").animate({ opacity: "1" }, 1000);*/

        /**------------------------------------------- */
    })



})();