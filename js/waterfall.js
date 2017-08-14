


$(window).on("load",function(){
	waterfall();
	picclick();
	var dataInt={"data":[{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},
						 {"src":"16.jpg"},{"src":"17.jpg"},{"src":"18.jpg"},{"src":"19.jpg"},{"src":"20.jpg"},
						 {"src":"21.jpg"},{"src":"22.jpg"},{"src":"23.jpg"},{"src":"24.jpg"},{"src":"25.jpg"},
						 {"src":"26.jpg"},{"src":"27.jpg"},{"src":"28.jpg"},{"src":"29.jpg"},{"src":"30.jpg"}
	]}
	$(window).on("scroll",function(){
		if(checkScroll){
			$.each(dataInt.data,function(key,value){
				if($(".box").last().index()<29){
				var oBox = $("<div>").addClass("box").appendTo($("#content"));
				var oPic = $("<div>").addClass("pic").appendTo($(oBox));
				var oImg = $("<img>").attr("src","../img/waterfall/"+$(value).attr("src")).appendTo(oPic);
				}
			})
			waterfall();
			picclick();
		}
	})
	
})

function waterfall(){
	var box = $(".box");
	var boxW = box.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/boxW);
	$("#content").width(boxW*cols);
	var hArr = [];
	box.each(function(index,value){
		var boxH = box.eq(index).outerHeight();
	
		if(index<cols){
			hArr[index] = boxH;
		}else{
			var minH = Math.min.apply(null,hArr);
			var minHIndex = $.inArray(minH,hArr);
			$(value).css({
				"position":"absolute",
				"top":minH+'px',
				"left":minHIndex*boxW+'px'
			})
			hArr[minHIndex]+=box.eq(index).outerHeight();
		}	
	})
	
}

function checkScroll(){
	var lastBox = $(".box").last();
	var lastBoxDH = lastBox.offset().top+Math.floor(lastBox.outerHeight()/2);
	var scorllTop = $(window).scrollTop();
	var documentH=$(window).height();
	return (lastBoxDH<(scrollTop+documentH))?true:false
}

function picclick(){	
	var img = $("#content img")
	img.click(function(){
		var i = img.index(this)+1;
		$(".bigPic").css("display","block");
		$(".picView").attr("src","../img/waterfall/"+i+".jpg");
	})
	$(".r2").click(function(){
		$(".bigPic").css("display","none");
	})
}
