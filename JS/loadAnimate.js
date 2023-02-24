(function () {

    $(function () {
        $('#index').fullpage({
            // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
            afterLoad: function (anchorLink, index) {
                if (index == 2) {
                    setTimeout(function () {
                        $("#index .section2  .contents .content1").fadeIn(1000).css({
                            "animation": "fadeUp",
                            "animation-duration": "1s",
                            // "animation-delay": "0.5s",
                        });
                    }, 250);


                    setTimeout(function () {
                        $("#index .section2  .contents .content2").fadeIn(1000).css({
                            "animation": "fadeDown",
                            "animation-duration": "1s",
                            // "animation-delay": "0.5s",
                            opacity: "1"
                        });
                    }, 500);




                    setTimeout(function () {
                        $("#index .section2  .contents .content3").fadeIn(1000).css({
                            "animation": "fadeUp",
                            "animation-duration": "1s",
                            // "animation-delay": "0.75s",
                            opacity: "1"
                        });
                    }, 750);

                    setTimeout(function () {
                        $("#index .section2  .contents .content4").fadeIn(1000).css({
                            "animation": "fadeDown",
                            "animation-duration": "1s",
                            // "animation-delay": "1s",
                            opacity: "1"
                        });
                    }, 1000);


                    setTimeout(function () {
                        $("#index .section2  .contents .content5").fadeIn(1000).css({
                            "animation": "fadeUp",
                            "animation-duration": "1s",
                            // "animation-delay": "1s",
                            opacity: "1"
                        });

                    }, 1000);

                    setTimeout(function () {
                        $("#index .section2  .contents .content6").fadeIn(1000).css({
                            "animation": "fadeDown",
                            "animation-duration": "1s",
                            // "animation-delay": "1.15s",
                            opacity: "1"
                        });
                    }, 1150);

                    setTimeout(function () {
                        $("#index .section2  .contents .content7").fadeIn(1000).css({
                            "animation": "fadeUp",
                            "animation-duration": "1s",
                            // "animation-delay": "1.5s",
                            opacity: "1"
                        });
                    }, 1500);

                    setTimeout(function () {
                        $("#index .section2  .contents .content8").fadeIn(1000).css({
                            "animation": "fadeDown",
                            "animation-duration": "1s",
                            // "animation-delay": "1.75s",
                            opacity: "1"
                        });
                    }, 1750);

                    setTimeout(function () {
                        $("#index .section2  .contents .content9").fadeIn(1000).css({
                            "animation": "fadeUp",
                            "animation-duration": "1s",
                            // "animation-delay": "2s",
                            opacity: "1"
                        });
                    }, 2000);

                    setTimeout(function () {
                        $("#index .section2  .contents .content10").fadeIn(1000).css({
                            "animation": "fadeDown",
                            "animation-duration": "1s",
                            // "animation-delay": "2.25s",
                            opacity: "1"
                        });
                    }, 2000);


                }
                // if (index == 3) {
                //     $('.section3').find('div').delay(500).animate({
                //         bottom: '0'
                //     }, 1500, 'easeOutExpo');
                // }
                // if (index == 4) {
                //     $('.section4').find('p').fadeIn(2000);
                // }
                // if (index == 5) {
                //     $('.section5').find('p').fadeIn(2000);
                // }
                // if (index == 6) {
                //     $('.section6').find('p').fadeIn(2000);
                // }
                if (index == 7) {
                    setTimeout(function () {
                        $("#index .section7 .img1").fadeIn(1000).css({
                            "animation": "section7_ImgSildeDown",
                            "animation-duration": "1s",
                        });
                    }, 250);
                    setTimeout(function () {
                        $("#index .section7 .img2").fadeIn(1000).css({
                            "animation": "section7_ImgSildeUp",
                            "animation-duration": "1s",
                        });
                    }, 250);
                }
                // if (index == 8) {
                //     $('.section8').find('p').fadeIn(2000);
                // }
                // if (index == 9) {
                //     $('.section9').find('p').fadeIn(2000);
                // }
            },
            onLeave: function (index, direction) {
                if (index == 2) {

                    setTimeout(function () {
                        $("#index .section2  .contents .content1").fadeOut().css({
                            "animation": "fadeDown",
                            "animation-duration": "1s",
                            // "animation-delay": "0.5s",
                        });
                    }, 500);


                    setTimeout(function () {
                        $("#index .section2  .contents .content2").fadeOut().css({
                            "animation": "fadeUp",
                            "animation-duration": "1s",
                            // "animation-delay": "0.5s",
                            opacity: "1"
                        });
                    }, 500);

                    setTimeout(function () {
                        $("#index .section2  .contents .content3").fadeOut().css({
                            "animation": "fadeDown",
                            "animation-duration": "1s",
                            // "animation-delay": "0.75s",
                            opacity: "1"
                        });
                    }, 500);

                    setTimeout(function () {
                        $("#index .section2  .contents .content4").fadeOut().css({
                            "animation": "fadeUp",
                            "animation-duration": "1s",
                            // "animation-delay": "1s",
                            opacity: "1"
                        });
                    }, 500);


                    setTimeout(function () {
                        $("#index .section2  .contents .content5").fadeOut().css({
                            "animation": "fadeDown",
                            "animation-duration": "1s",
                            // "animation-delay": "1s",
                            opacity: "1"
                        });

                    }, 500);

                    setTimeout(function () {
                        $("#index .section2  .contents .content6").fadeOut().css({
                            "animation": "fadeUp",
                            "animation-duration": "1s",
                            // "animation-delay": "1.15s",
                            opacity: "1"
                        });
                    }, 500);

                    setTimeout(function () {
                        $("#index .section2  .contents .content7").fadeOut().css({
                            "animation": "fadeDown",
                            "animation-duration": "1s",
                            // "animation-delay": "1.5s",
                            opacity: "1"
                        });
                    }, 500);

                    setTimeout(function () {
                        $("#index .section2  .contents .content8").fadeOut().css({
                            "animation": "fadeUp",
                            "animation-duration": "1s",
                            // "animation-delay": "1.75s",
                            opacity: "1"
                        });
                    }, 500);

                    setTimeout(function () {
                        $("#index .section2  .contents .content9").fadeOut().css({
                            "animation": "fadeDown",
                            "animation-duration": "1s",
                            // "animation-delay": "2s",
                            opacity: "1"
                        });
                    }, 400);

                    setTimeout(function () {
                        $("#index .section2  .contents .content10").fadeOut().css({
                            "animation": "fadeUp",
                            "animation-duration": "1s",
                            // "animation-delay": "2.25s",
                        });
                    }, 400);

                }
                // if (index == '3') {
                //     $('.section3').find('p').delay(500).animate({
                //         bottom: '-120%'
                //     }, 1500, 'easeOutExpo');
                // }
                // if (index == '4') {
                //     $('.section4').find('p').fadeOut(2000);
                // }
                // if (index == '5') {
                //     $('.section5').find('p').fadeOut(2000);
                // }
                // if (index == '6') {
                //     $('.section6').find('p').fadeOut(2000);
                // }
                if (index == '7') {
                    setTimeout(function () {
                        $("#index .section7 .img1").fadeOut(1000).css({
                            "animation": "section7_ImgSildeUp",
                            "opacity": "1"
                        });
                    }, 750);
                    setTimeout(function () {
                        $("#index .section7 .img2").fadeOut(1000).css({
                            "animation": "section7_ImgSildeDown",
                            "opacity": "1"
                        });
                    }, 750);
                }
                // if (index == '8') {
                //     $('.section8').find('p').fadeOut(2000);
                // }
                // if (index == '9') {
                //     $('.section9').find('p').fadeOut(2000);
                // }
            }
        });
    });

})();