$(document).ready(function(){
  $(".loading").css("display","block");
  $(".expand").animate({width:"100%"},5000,function(){
  	$(".loading").css("display","none");
  });
});

function rota(){
var x= 0;
var y= 0;
$("#Arrow_up").bind("click",function(){
	x++;
	$("#C1").css({"transform":"rotateX("+x*90+"deg)","transition":"1s"});
});

$("#Arrow_down").bind("click",function(){
	--x;
	$("#C1").css({"transform":"rotateX("+x*90+"deg)","transition":"1s"});
});

$("#Arrow_left").bind("click",function(){
	y++;
	$("#C1").css({"transform":"rotateY("+y*90+"deg)","transition":"1s"});
});

$("#Arrow_right").bind("click",function(){
	--y;
	$("#C1").css({"transform":"rotateY("+y*90+"deg)","transition":"1s"});
});
};
rota();
