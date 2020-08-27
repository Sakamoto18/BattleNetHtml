//鼠标悬浮/离开  动画效果
$(function() {
				$(".m1").mouseenter(function() {
					$(".m1").animate({ "bottom": "-50px" }, 500);
//					this.stop();
					//$(".showMin").css("bottom": "0px");
				});
				$(".m1").mouseleave(function() {
					$(".m1").animate({ "bottom": "-222px" }, 500);
//					this.stop();
				});
				$(".m2").mouseenter(function() {
					$(".m2").animate({ "bottom": "-50px" }, 500);
					//$(".showMin").css("bottom": "0px");
				});
				$(".m2").mouseleave(function() {
					$(".m2").animate({ "bottom": "-222px" }, 500);
				});
				$(".m3").mouseenter(function() {
					$(".m3").animate({ "bottom": "-50px" }, 500);
					//$(".showMin").css("bottom": "0px");
				});
				$(".m3").mouseleave(function() {
					$(".m3").animate({ "bottom": "-222px" }, 500);
				});
			})