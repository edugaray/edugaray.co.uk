function rotate(){$("#next").click()}$(document).ready(function(){var e=5e3,s=setInterval("rotate()",e),l=$("#slides li").outerWidth(),t=-1*l;$("#slides li:first").before($("#slides li:last")),$("#slides ul").css({left:t}),$("#prev").click(function(){var e=parseInt($("#slides ul").css("left"))+l;return $("#slides ul").animate({left:e},200,function(){$("#slides li:first").before($("#slides li:last")),$("#slides ul").css({left:t})}),!1}),$("#next").click(function(){var e=parseInt($("#slides ul").css("left"))-l;return $("#slides ul").animate({left:e},200,function(){$("#slides li:last").after($("#slides li:first")),$("#slides ul").css({left:t})}),!1}),$("#slides").hover(function(){clearInterval(s)},function(){s=setInterval("rotate()",e)})});