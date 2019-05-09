$(function(){

$(document).on('scroll',function(){
				var src=$(document).scrollTop();
				console.log(src)
				if(src>=100){
					$("header").show();
			        $(".header_top").css("background","whitesmoke");
				}else{
					$(".header_top").css("background","rgba(255,255,255,0.4)");
				}
				//返回顶部
//				$('.back').animate({top:src+600},0);
//				$('.back').click(function(){
//					$(document).scrollTop(0);
//				})
            })

$(".nd").mouseenter(function(){
    			$(this).css("color","red")
    			$(".bm").css("color","black")
    			$(".yi").show();
    			$(".le").hide();
    		})
    		
    		$(".bm").mouseenter(function(){
    			$(this).css("color","red")
    			$(".nd").css("color","black")
    			$(".le").show();
    			$(".yi").hide();
    		})



	$("input").click(function(){
		$(this).val("");
		$(".input_contain").show();
	})
	$("input").mouseenter(function(){
//		$(".input_contain").show();
		
	}).mouseleave(function(){
		$(this).val("");
		$(".input_contain").hide();
	})
	$(".kan_right").hover(function(){
		$("").show();
	},function(){
		$("").show();
	})
	
	$(".sbyy>.shoubotu>li").hover(function(){
		$(this).children("img").css("transform","translateX(1px)");
		$(this).children("p").css("color","orange")
	},function(){
		$(this).children("img").css("transform","translateX(0px)");
		$(this).children("p").css("color","black")
	})
	$(".a>button").click(function(){
		$(".b").show();
		$(".a>button").hide();
		$(".b_ul").show()
	})
	$(".b>button").click(function(){
		$(".b").hide();
		$(".a>button").show();
		$(".b_ul").hide()
	})
	
	
	
	
	$(".internet-footer-right>ul>li").hover(function(){
		$(this).css({"box-shadow":"0px 0px 10px red","color":"gray"})
	},function(){
		$(this).css({"box-shadow":"0px 0px 0px 0px","color":"black"})
	})
	$("soubo_right_center>ul>li").hover(function(){
		$(this).parents(ul).siblings(".beimei").show().siblings(".neidi").hide();
	},function(){
	$(this).parents(ul).siblings(".neidi").show().siblings(".beimei").hide();
	})
	$(".huayu_last_bottom>ul>li").hover(function(){
		$(this).css({"box-shadow":"0px 0px 10px red","color":"gray"})
	},function(){
		$(this).css({"box-shadow":"0px 0px 0px 0px","color":"black"})
	})
	
	
	
	
	var index=0;
        var width=$(".section_lunbo_contain>ul>li").width()
		function move(){
            	index=index>7?0:index;
            	$(".section_lunbo_contain>ul>li").eq(index).show().siblings().hide()
            	$(".section_lunbo_contain_right>ul>li").eq(index).addClass("add").siblings().removeClass("add")
            }
            var time=setInterval(function(){
            	index++;
            	move();
            },3000)
            
            $(".section_lunbo").hover(function(){
            	clearInterval(time)
            },function(){
            	time=setInterval(function(){
            		index++;
            		move();
            	},3000)
            })
		   $(".section_lunbo_contain_right>ul>li").click(function(){
			   	index=$(this).index()
			   	move()
		   })
})


