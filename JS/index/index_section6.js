
(
    function () {

        var imgList = $("#index .section6 .imgs .L-img");

        $("#index .section6 .right .peoplesList .people").each(function () {
            $(this).hover(function () {
                let index = $(this).index();
                $("#index .section6 .imgs .L-img").each(
                    function () {
                        if (index == $(this).index()) {
                            $(this).fadeIn(200).siblings().fadeOut(200);
                        }
                    }
                   
                );
                // $(this).css("color", "red");

            })
        })

    })();



