//控制地图移入
$(".map .mappoint").mouseenter(function(){
    $(this).find(".city").hide()
    $(this).find(".coordinate").show()
    }
)
$(".map .mappoint").mouseleave(function(){
    $(this).find(".coordinate").hide()
    $(this).find(".city").show()
    }
)
