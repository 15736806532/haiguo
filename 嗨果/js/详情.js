$(function(){
	$("#b1>img,#b1_1").hover(function(){
		$("#b1_1").show()
	},function(){
		$("#b1_1").hide()
	})
	
	$("#b1_1").hover(function(){
		$("#p1").hide()
		$("#p2").show()
	},function(){
		$("#p2").hide()
		$("#p1").show()
	})
	
	$("#b1_1").click(function(){
		$("#p1").hide()
		$("#p2").hide()
		$("#p3").show()
		$("#b1_1").css("background","orange")
	})
	
	$("#b2>li>span").hover(function(){
		$(this).children("div").show()
	},function(){
		$("#b2>li>span>div").hide()
	})
	
	
})