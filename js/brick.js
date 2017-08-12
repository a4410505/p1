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
var vx = 6;
var vy = 10;
var bricks = [];
var row=5;
var col=5;

bricks=new Array(row);
	for(i = 0;i<row;i++){
		bricks[i]=new Array(col);
	for(j = 0;j<col;j++){
		bricks[i][j]=1;
}		
}

context.fillStyle="#058"
context.font="40px sans-serif";
context.textAlign="center";
context.fillText("点击开始游戏",250,400);
context.fill();


$("#canvas").bind("mousedown",function(){

function draw(){
	brick(context,ax,775,100,25,"black","sliver");
	 
	for(i = 0;i<row;i++){
	for(j = 0;j<col;j++){
		
	if(bricks[i][j]==1){
		if(i*95<=bx&&bx<=(i*100+105)&&by<=(j*25+35)){
		bricks[i][j]=0;
	 	vy =-10;
	 }

	 brick(context,i*100,j*25,100,25,"red","white")
	}
	
  }
}
	
	bx +=vx;
	by -=vy;
	ball(context,bx,by,10,"blue","sliver");
	
}

function pz(){
	if(by<=10){
		vy=-10;
	}
	else if(by>=760&&ax<=bx&&bx<=(ax+100)){
		vy=10;
		vx =vx;
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
		vx =-vx;
	}
	else if(bx<=10){
		vx =-vx;
	}
}
  
  
	var timer =setInterval(
		function update (){
	context.clearRect(0,0,canvas.width,canvas.height);
	draw();
	pz();
	
	},
	50
	)


$("#canvas").bind("mousemove",function s1 (e){
	if(ax<=canvas.width-99){
	ax = e.clientX - canvas.getBoundingClientRect().left;
	}
	
	if(ax>=canvas.width-99){
		ax = canvas.width-99;
	}
});

$("#canvas").unbind("mousedown");
})

});



function brick(cxt,x,y,width,height,fillColor,strokeColor){
cxt.beginPath();
cxt.rect(x,y,width,height);
cxt.closePath();

cxt.fillStyle = fillColor;
cxt.strokeStyle = strokeColor;

cxt.fill();
cxt.stroke();
}

function ball(cxt,x,y,raidus,fillColor,strokeColor){
	cxt.beginPath();
	cxt.arc(x,y,raidus,0,2*Math.PI);
	cxt.closePath();
	
	cxt.fillStyle = fillColor;
	cxt.strokeStyle = strokeColor;
	
	cxt.fill();
	cxt.stroke();
}




