
$(document).ready(function(){
	$(".loading_ball_1").attr('ondragstart','return false');
	$(".loading_ball_2").attr('ondragstart','return false');
$(".expand").animate({width:"100%"},3000,function(){
	$(".loading").css("display","none");
});
});


$(function(){
        var oldY= null;
        var oldX= null;
        var isdown = false;
        $(".ball1").attr('ondragstart','return false');
        $(".ball1").mousedown(function(e){
            isdown = true;
            oldY = e.clientY;
            oldX = e.clientX;
        });
        $("html").mousemove(function(e){
            if(isdown){
                $(".ball_box1").css("transform","rotateY("+-((e.clientX-oldX)*0.2)+"deg) rotateX("+((e.clientY-oldY)*0.2)+"deg)");
            }
        });
        $("html").mouseup(function(e){
            isdown = false;
            oldY = null;
            oldX = null;
        });
    });