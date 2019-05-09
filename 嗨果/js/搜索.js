$(function(){
	$(".nav-b>input").toggle(function(){
		$(".nav-b-b").show();
	},function(){
		$(".nav-b-b").hide();
	})
	$(".one-a").toggle(function(){
		$(".one-b").show();
	},function(){
		$(".one-b").hide();
	})
	

	$(".right>img").hover(function(){
		$(".box>.right>.re").show();
		$(".box>.right>.wenzi").html("周一至周四24点更新")
		
	},function(){
		$(".box>.right>.re").hide();
		$(".box>.right>.wenzi").html("接档剧《浪花一朵朵》")
	})
	$(".right-ba").click(function(){
		$(".zhan").show();
//		$(".right-ba").hide();
	})
	$(".zhan-a").click(function(){
		$(".zhan").hide();
//		$(".right-ba").show();
	})
	
	$(".right-ba").click(function(){
		$(".right-ba").html("...")
		
	},function(){
		$(".right-ba").html("26")
	})
	$(".zhan-a").click(function(){
		$(".right-ba").html("26")
		
	},function(){
		$(".right-ba").html("...")
	})
	$("#right>img").hover(function(){
		$("#re").show();
		$("#wenzi").html("周一至周四24点更新")
		
	},function(){
		$("#re").hide();
		$("#wenzi").html("接档剧《浪花一朵朵》")
	})
	$("#right-ba").click(function(){
		$("#zhan").show();
//		$(".right-ba").hide();
	})
	$("#zhan-a").click(function(){
		$("#zhan").hide();
//		$(".right-ba").show();
	})
	$("#right-ba").click(function(){
		$("#right-ba").html("...")
		
	},function(){
		$("#right-ba").html("26")
	})
	$("#zhan-a").click(function(){
		$("#right-ba").html("26")
		
	},function(){
		$("#right-ba").html("...")
	})
	 $(".nav-b-b > ul > li").on("click", "label", function() {
        $(this).toggleClass('aa').next('.bb').slideToggle(1);
        $(this).parent().siblings().children('.bb').slideUp(1);
        $(this).parent().siblings().children('label').removeClass('aa');
      });
})