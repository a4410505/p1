$(document).ready(function(){
	$(".loading_ball_1").attr('ondragstart','return false');
	$(".loading_ball_2").attr('ondragstart','return false');
$(".expand").animate({width:"100%"},3000,function(){
	$(".loading").css("display","none");
});
});


$(function(){
var canvas=$("#canvas")[0];

canvas.width=500;
canvas.height=800;

var context = canvas.getContext("2d");
var ax = 0;
var bx = 50;
var by = 763;
var vx = 6*Math.random();
var vy = 10;

var bricks = [];


var a = brick(context,0,775,100,25,"black","sliver");
var b = ball(context,bx,by,10,"blue","sliver");


for(var i = 0;i<5;i++)
	for(var j = 0;j<8;j++)
{
//var x = 100*i
//var y = j*25;
var R = Math.floor(Math.random()*255);
var G = Math.floor(Math.random()*255);
var B = Math.floor(Math.random()*255);
var color = "rgb("+R+","+G+","+B+")";
//var brick1=brick(context,x,y,100,25,color,"white");
//bricks[i]=brick1;

var abrick ={ x : 100*i,
	          y: j*25};
bricks[i,j]=abrick;
abrick1(context);
};

	var timer =setInterval(
		function(){
	context.clearRect(bx-10,by-10,20,20);
	bx +=vx;
	by -=vy;
	ball(context,bx,by,10,"blue","sliver");
	if(by<=10){
		vy=-10;
	}
	else if(by>=760&&ax<=bx&&bx<=(ax+100)){
		vy=10;
	}
	else if(by>=canvas.height-5){
		context.clearRect(0,0,canvas.width,canvas.height);
		context.fillStyle="#058";
		context.font = "bold 40px sans-serif";
		context.textAlign="center";
		context.fillText("Game Over",250,400);
		context.font = "bold 20px sans-serif"	
		clearInterval(timer);
		$("#canvas").unbind("mousemove");
	    var r = confirm("再来一次？");
	    if(r==true){
	    	window.location.reload();
	    }
	}
	else if(bx>=(canvas.width-10)){
		vx =-10*Math.random();
	}
	else if(bx<=10){
		vx =10*Math.random();
	}

	},
	50
	)



$("#canvas").bind("mousemove",function s1 (e){
	ax = e.clientX - canvas.getBoundingClientRect().left;
	if(ax<=canvas.width-99){
    context.clearRect(0,775,500,25)
	brick(context,ax,775,100,25,"black","sliver");
	}
});


function abrick1(cxt){
cxt.beginPath();
cxt.rect(bricks[i,j].x,bricks[i,j].y,100,25);
cxt.closePath();

cxt.fillStyle = color;
cxt.strokeStyle = "white";

cxt.fill();
cxt.stroke();
}


});


function ball(cxt,x,y,raidus,fillColor,strokeColor){
	cxt.beginPath();
	cxt.arc(x,y,raidus,0,2*Math.PI);
	cxt.closePath();
	
	cxt.fillStyle = fillColor;
	cxt.strokeStyle = strokeColor;
	
	cxt.fill();
	cxt.stroke();
}


function brick(cxt,x,y,width,height,fillColor,strokeColor){
cxt.beginPath();
cxt.rect(x,y,width,height);
cxt.closePath();

cxt.fillStyle = fillColor;
cxt.strokeStyle = strokeColor;

cxt.fill();
cxt.stroke();
}

