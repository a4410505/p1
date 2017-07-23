var x = 0;
var y = 0;
function t1(){
	x ++;
	$("#C1").css({"transform":"rotateX("+x*90+"deg)","transition":"1s"});
};

function t2(){
	$("#C1").css({"transform":"rotateX("+-x*90+"deg)","transition":"1s"});
	x ++;
};

function t3(){
	y ++;
	$("#C1").css({"transform":"rotateY("+y*90+"deg)","transition":"1s"});
};

function t4(){
	y ++;
	$("#C1").css({"transform":"rotateY(-"+y*90+"deg)","transition":"1s"});
};