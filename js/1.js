
$(function(){
	var x = 0;
	$("#Arrow_left").attr('ondragstart','return false');
    $("#Arrow_right").attr('ondragstart','return false');
	var qArray = [];
	var qdiv = $(".qDiv");
	qdiv.each(function(index,value){
		$(value).css({
			"transform":"rotateZ("+45*(index)+"deg) translateY(-400px)",
		})
	})
	
	$("#Arrow_left").click(function(){
		--x;
		qdiv.each(function(index,value){
		$(value).css({
			"transform":"rotateZ("+45*(index-x)+"deg) translateY(-400px)",
			"transition":"0.5s linear"
		})
		})	
	})
	
	$("#Arrow_right").click(function(){
		x++;
		qdiv.each(function(index,value){
		$(value).css({
			"transform":"rotateZ("+45*(index-x)+"deg) translateY(-400px)",
			"transition":"0.5s linear"
		})
		})	
	})
	
})
