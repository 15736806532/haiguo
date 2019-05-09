$(function(){
	$(".put").focus(function(){
				var text=$(this).val();
				if(text=="无心法师"){
					$(this).val("");
				}
				$(".chuxian").show()
			})
			$(".put").blur(function(){
				var text=$(this).val();
				if(text==""){
					$(this).val("无心法师");
				}
				$(".chuxian").hide()
		})
//	轮播	
        var index=0;
        var width=$(".zhong>ul>li").width()
		function move(){
            	index=index>9?0:index;
            	$(".zhong>ul>li").eq(index).show().siblings().hide()
            	$(".youce>ul>li").eq(index).addClass("add").siblings().removeClass("add")
            }
            var time=setInterval(function(){
            	index++;
            	move();
            },3000)
            
            $(".zhong").hover(function(){
            	clearInterval(time)
            },function(){
            	time=setInterval(function(){
            		index++;
            		move();
            	},3000)
            })
		   $(".youce>ul>li").click(function(){
			   	index=$(this).index()
			   	move()
		   })
		
    $(".dier>li").mouseenter(function(){
    	$(this).css("border-top","1px solid gray") 
    	$(this).css({"color":"red","background":"white"})
    	$(this).children(".dier1-1").css("background","url(img/play-hover.png)no-repeat 0px 0px")
    }).mouseleave(function(){
    	$(this).css("border-top","0px") 
    	$(this).css({"color":"black","background":"rgb(244,244,244)"})
    	$(this).children(".dier1-1").css("background","url(img/play_init.png)no-repeat 0px 0px")
    })
    $(".disi>li").mouseenter(function(){
    	$(this).css("border-top","1px solid gray") 
    	$(this).css({"color":"red","background":"white"})
    	$(this).children(".disi1-1").css("background","url(img/play-hover.png)no-repeat 0px 0px")
    }).mouseleave(function(){
    	$(this).css("border-top","0px") 
    	$(this).css({"color":"black","background":"rgb(244,244,244)"})
    	$(this).children(".disi1-1").css("background","url(img/play_init.png)no-repeat 0px 0px")
    })
    
    $(".you").click(function(){
    	$(".zuo").show()
    	$(".tupian").hide()
    	$(".tupian1").show()
    })
    $(".zuo").click(function(){
    	$(".zuo").hide()
    	$(".tupian1").hide()
    	$(".tupian").show()
    })
    
    $(".you11").click(function(){
    	$(".zuo11").show()
    	$(".pian").hide()
    	$(".pian1-1").show()
    })
    $(".zuo11").click(function(){
    	$(".zuo11").hide()
    	$(".pian1-1").hide()
    	$(".pian").show()
    })
    $(".sm").click(function(){
    	$(".top").hide()
    	$(this).hide()
    	$(".da").show()
    })
    $(".sm").mouseenter(function(){
    	$(".top").css("height","60px")
    	$(".top>img").css("top","0px")
    	$(".sm").css({"height":"60px","opacity":"0.4"})
    }).mouseleave(function(){
    	$(".top").css("height","50px")
    	$(".top>img").css("top","-181px")
    	$(".sm").css({"height":"50px","opacity":"0.7"})
    })
    $(".shang").click(function(){
    	$(".top").show()
    	$(".sm").show()
    	$(".da").hide()
    })
    
    $(".kkk>.hei1").mouseenter(function(){
    	$(".dianshi").show()
    })
    
    $(".dianshi").mouseleave(function(){
    	$(this).hide()
    })
    
    $(".right").click(function(){
    	$(".da2").hide()
    	$(".da3").show()
    })
    
     $(".left").click(function(){
    	$(".da3").hide()
    	$(".da2").show()
    })
     
     $(document).on('scroll',function(){
				var src=$(document).scrollTop();
				console.log(src)
				if(src>=100){
					$('.daohang').animate({top:src},0);
					$(".daohang").show();
				}else if(src<100){
					$(".daohang").hide();
				}else{
					$(".daohang").hide();
				}
           })
	//强势接档
	$(".f00>ul>li>.dv2,.f0-2>.u2>li>.dv2,.f2>ul>li>.dv2").hover(function(){
		$(this).children("p").show();
		$(this).prev(".dv1").children("p").hide()
	},function(){
		$(this).children("p").hide();
		$(this).prev(".dv1").children("p").show()
	})
	$(".f1>ul>li").hover(function(){
		$(this).children("img").animate({height:"120px"},0)
	},function(){
		$(this).children("img").animate({height:"108px"},0)
	})
	//电影
	$(".f3>div>ul>li:even,.f4>div>ul>li:even").hover(function(){
		$(this).css("color","orange")
	},function(){
		$(this).css("color","black")
	})
	$(".f3>div>ul>li:odd,.f4>div>ul>li:odd").css({"font-size":"30px","margin-top":"-10px"})
//	点击
	$(".f3>.bottom>span,.f4>.bottom>span").hover(function(){
		$(this).css("background","#DCDCDC")
	},function(){
		$(this).css("background","white")
	})
	$(".f3>.bottom>.lt").click(function(){
		$(".f3>.bottom>.dv2").hide()
		$(".f3>.bottom>.dv1").show()
		$(this).hide()
	})
	$(".f3>.bottom>.rt").click(function(){
		$(".f3>.bottom>.dv2").show()
		$(".f3>.bottom>.dv1").hide()
		$(".f3>.bottom>.lt").show()
	})
	$(".f4>.bottom>.lt").click(function(){
		$(".f4>.bottom>.dv2").hide()
		$(".f4>.bottom>.dv1").show()
		$(this).hide()
	})
	$(".f4>.bottom>.rt").click(function(){
		$(".f4>.bottom>.dv2").show()
		$(".f4>.bottom>.dv1").hide()
		$(".f4>.bottom>.lt").show()
	})
	$(".f3>.bottom>.dv1>ul>li>.dv2,.f3>.bottom>.dv2>ul>li>.dv2,.f4>.bottom>.dv1>ul>li>.dv2,.f4>.bottom>.dv2>ul>li>.dv2").hover(function(){
		$(this).children("p").show();
		$(this).prev(".dv1").children("p").hide()
	},function(){
		$(this).children("p").hide();
		$(this).prev(".dv1").children("p").show()
	})
	//为你推荐
	$(".f5>button").click(function(){
		$(".f5>.u-2").show()
		$(".f5>span").show()
	})
	$(".f5>span").click(function(){
		$(this).hide()
		$(".f5>.u-2").hide()
	})
//	娱乐热点
	$(".f6>div>ul>li:even,.f7>div>ul>li:even").hover(function(){
		$(this).css("color","orange")
	},function(){
		$(this).css("color","black")
	})
	$(".f6>div>ul>li:odd,.f7>div>ul>li:odd").css({"font-size":"30px","margin-top":"-10px"})

	$(".haizi>div>ul>li").mouseenter(function(){
		$(this).css("background","gainsboro")
		$(this).siblings().css("background","white")
	})
	$(".haizi>div>ul>li>b").click(function(){
		$(".haizi>div").hide()
		$(".haizi>.baby").show()
	})
	$(".haizi>.baby").click(function(){
		$(".haizi>div").show()
		$(this).hide()
	})
	
	$(".xin>span").hover(function(){
		$(this).children("b").show()
	},function(){
		$(".xin>span").children("b").hide()
	})

     
     var flag=true;
     $(".f0-2>.u2>li>span").hover(function(){
				if (flag) {
					$(this).children("img").eq(2).hide();
				}else{
					$(".f0-2>.u2>li>span>img").eq(2).hide();
					$(".f0-2>.u2>li>span>img").eq(1).hide();
				}
			},function(){
				if (flag) {
					$(this).children("img").eq(2).show();
				}else{
					$(".f0-2>.u2>li>span>img").eq(2).hide();
					$(".f0-2>.u2>li>span>img").eq(1).hide();
				}
			})
			
			$(".f0-2>.u2>li>span>img").eq(1).click(function(){
				flag=false;
				$(".f0-2>.u2>li>span>img").eq(1).hide();
			})
			$(".f0-2>.u2>li>span>img").eq(0).click(function(){
				flag=true;
				$(".f0-2>.u2>li>span>img").eq(1).show();
			})
     
     
//  返回顶部 
 
 
 $(".xin>span:nth-child(1)").click(function(){
 	$(document).scrollTop(0)
 })
    
})
