$(function(){
	$("html,body").animate({"scrollTop":"0"});
	
	$(".nav_fo>ul>li").hover(function(){
		var index=$(this).index();
		if (index==1) {
			$(".nav_fo>ul>li").eq(index).children("a").children("span").children("img").attr("src","im/icon-看过-白-hover.png")
		}
		if (index==2) {
			$(".nav_fo>ul>li").eq(index).children("a").children("span").children("img").attr("src","im/icon-上传-白-默认.png");
		}
		if (index==3) {
			$(".nav_fo>ul>li").eq(index).children("a").children("span").children("img").attr("src","im/icon-客户端-白-默认.png");
		}
	},function(){
		$(".nav_fo>ul>li").eq(1).children("a").children("span").children("img").attr("src","im/icon-看过-黑-默认.png")
	
		$(".nav_fo>ul>li").eq(2).children("a").children("span").children("img").attr("src","im/icon-上传-黑-默认.png");
		
		$(".nav_fo>ul>li").eq(3).children("a").children("span").children("img").attr("src","im/icon-客户端-黑-默认.png");
	})
	
	$(".bvbv>ul>li").hover(function(){
		
		var index=$(this).index();
		if (index==1) {
			$(".bvbv>ul>li").eq(index).children("a").children("span").children("img").attr("src","im/icon-看过-白-hover.png")
		}
		if (index==2) {
			$(".bvbv>ul>li").eq(index).children("a").children("span").children("img").attr("src","im/icon-上传-白-默认.png");
		}
		if (index==3) {
			$(".bvbv>ul>li").eq(index).children("a").children("span").children("img").attr("src","im/icon-客户端-白-默认.png");
		}
	},function(){
		$(".bvbv>ul>li").eq(1).children("a").children("span").children("img").attr("src","im/icon-看过-黑-默认.png")
	
		$(".bvbv>ul>li").eq(2).children("a").children("span").children("img").attr("src","img/icon-上传-黑-默认.png");
		
		$(".bvbv>ul>li").eq(3).children("a").children("span").children("img").attr("src","img/icon-客户端-黑-默认.png");
	})
	
	$("#xiala").click(function(){
		$(this).hide();
		$(".head_top").slideDown();
	})
	$("#shangqu").click(function(){
		$(".head_top").slideUp();
		$("#xiala").show()
	})
	$(".w_right").click(function(){
		$(".head_top>ul").animate({"left":"-1300px"})
		$(this).hide();
		$(".w_left").show()
	})
	$(".w_left").click(function(){
		$(".head_top>ul").animate({"left":"0px"});
		$(this).hide();
		$(".w_right").show()
	})
		
	$(".shoucang>img").hover(function(){
		$(this).attr("src","im/heart_h.png")
	},function(){
		$(this).attr("src","im/heart_t.png")
	})
	
	$(".jishu>ul>li").click(function(){
		var index=$(this).index();
		if (index==0) {
			$(".jishu2").show();
			$(".jishu3").hide();
			$(".jishu4").hide();
		}else if(index==1){
			$(".jishu2").hide();
			$(".jishu3").show();
			$(".jishu4").hide();
		}else{
			$(".jishu2").hide();
			$(".jishu3").hide();
			$(".jishu4").show();
		}
	})
	
	$(".the_second>ul>li").hover(function(){
		$(this).children().show().parent().siblings().children().hide()
	},function(){
		$(this).children().hide()
	})
	
	$(".dianshiju_right").hover(function(){
		$(this).children("div").animate({"top":"53px"})
	},function(){
		$(this).children("div").animate({"top":"80px"})
	})
	//评论区
	$("textarea").focus(function(){
		$(".pinglun_qu").css("border","1px solid green")
	}).blur(function(){
		$(".pinglun_qu").css("border","")
	})
	$(".pinglun_qu>button").click(function(){
		var nowdate=new Date();
		var year=nowdate.getFullYear();
		var mouth=nowdate.getMonth()+1;
		var day=nowdate.getDate();
		var textw=$("textarea").val();
		
		if ($("textarea").val()=="") {
			alert("请输入内容")
		}else{
			//随机名字
			var nameArray=["赵","钱","孙","李","周","吴","郑","王","张","陈"];
			var dd=["法","卅","文","德","达","道","岸"];
			var ii=Math.floor(Math.random()*7);
			var nn=Math.floor(Math.random()*9);
			var name=nameArray[nn]+dd[ii];
			
			
			var $li=$("<li></li>");
			var $divpltou=$("<div class='pltou'></div>");
			var $divpltime=$("<div class='pltime'></div>");
			var $divpltimeP=$("<p>"+name+"</p>");
			var $divpltimePSpan=$("<span></span>");
			var $text=$("<div class='text'></div>");
			var $textP=$("<p></p>");
			var $tall=$("<div class='tall'>"+textw+"</div>")
			var $textPldz=$("<div class='pldz'></div>");
			var $pl=$("<div class='pl'></div>");
			var $imgpinglun=$("<img src='./im/评论回复.png' />");
			var $imgpinglunSpan=$("<span>评论</span>");
			var $dz=$("<div class='dz'></div>");
			var $dzimg=$("<img src='./im/点赞.png' />");
//			var $zanshu=$("");
			var $dzSpan=$("<span>点赞(<span></span>)</span>");
			
			var fbtime=year+"-"+mouth+"-"+day;
			
			
			$divpltou.css("background",rgbcolor())
			
			function rgbcolor(){
				var r=Math.floor(Math.random()*255);
				var g=Math.floor(Math.random()*255);
				var b=Math.floor(Math.random()*255);
				return "rgb("+r+","+g+","+b+")";
			}
			
//			$dzSpan.append($zanshu);
			
			$dz.append($dzimg);
			$dz.append($dzSpan);
			$pl.append($imgpinglun);
			$pl.append($imgpinglunSpan);
			$textPldz.append($pl);
			$textPldz.append($dz);
			$text.append($tall);
			$text.append($textP);
			$text.append($textPldz);
			$divpltimePSpan.prepend(fbtime);
			$divpltimeP.append($divpltimePSpan);
			$divpltime.append($divpltimeP);
			
			
			$li.append($divpltou);
			$li.append($divpltime);
			$li.append($text)
			$li.append($textPldz);
			
			$("#dazongpinlun>ul").prepend($li)
			
			$("textarea").val("")
			
			
		}
		
	})
	
	//给别人点赞评论
	var num=0;
	$(".dz").click(function(){
		
		var num2=num++;
	
		if ($(this).children("span").children("span").html()=="") {
			
			$(this).children("span").children("span").html(num2)
		} 
		if ($(this).children("span").children("span").html()!=""){
			var aa=$(this).children("span").children("span").html();
			
			var cc=parseInt(aa);
			cc++;
			
			$(this).children("span").children("span").html(cc)
		}
		
		
	})
	
	$(".fanding").click(function(){
		$("html,body").animate({"scrollTop":"0"});
		$(".nav").fadeOut();
		$(".juqingjianjie").css({
				"position":"",
				"top":"",
				
			})
	})
	
	
	document.addEventListener("mousewheel",function(){
		var a=$(window).scrollTop();
//		console.log(a)
		if (a>690) {
			$(".nav").fadeIn(1000);
			$(".fanding").fadeIn(1000);
		} else{
			$(".nav").fadeOut();
			$(".fanding").fadeOut()
		}
		if (a>1650&&a<2700) {
			$(".juqingjianjie").css({
				"position":"fixed",
				"top":"50px",
			})
		} else{
			$(".juqingjianjie").css({
				"position":"",
				"top":"",
				
			})
		}
	})
	
	
})