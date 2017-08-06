$(document).ready(function(){
	$(".loading_ball_1").attr('ondragstart','return false');
	$(".loading_ball_2").attr('ondragstart','return false');
$(".expand").animate({width:"100%"},3000,function(){
	$(".loading").css("display","none");
});
});


$(function(){
var x= 0;
var y= 0;
$(".a1").attr('ondragstart','return false');
$(".a2").attr('ondragstart','return false');
$(".a1").bind("click",function(){
	x++;
	$(".box_content").css({"transform":"rotateY("+x*60+"deg)","transition":"1s"});
});

$(".a2").bind("click",function(){
	--x;
	$(".box_content").css({"transform":"rotateY("+x*60+"deg)","transition":"1s"});
});

});