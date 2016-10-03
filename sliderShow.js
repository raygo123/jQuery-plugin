$(function(){

	// $.fn.sliderShow = function(opt){
	$.fn.extend({
		sliderShow : function(opt){

			var defaults = {
				"autoPlay" : true,
				"autoPlayTime" : 2000,
				"eventType" : "click"
			};

			$.extend(defaults,opt);

			return this.each(function(){

				var window_width = $(window).width(),
				featured = $(this),
				featured_wrapper = featured.find(".featured-wrapper"),
				featured_row = featured.find(".views-row"),
				banner_num = featured_row.size(),
				x = 0,
				timer = null;

				setIcom();
				init_banner();
				banner_click();


				if(defaults.autoPlay) {
					set_timer();
					featured.hover(
						function(){
							clearInterval(timer);
						},
						function(){
							set_timer();
						}
					);
				}
				
				function set_timer() {
					timer = setInterval(function(){
						if(x<banner_num-1){
							x++;
						}else{
							x = 0;
						}
						featured.find(".count .menu li").eq(x).trigger("click");		
					},defaults.autoPlayTime);
				}
				
				function banner_click(){
					featured.find(".count .menu li").on(defaults.eventType,function(){
						var index = $(this).index();
						featured_wrapper.animate({marginLeft:-1*window_width*index});
						x = index;
					});
				}

				function init_banner() {
					featured_wrapper.width(window_width*banner_num);
					featured_row.width(window_width);
				}

				function setIcom() {
					featured.append('<div class="count"><ul class="menu"></ul></div>');
					for(var i=1; i<banner_num+1; i++){
						featured.find(".count .menu").append('<li>'+i+'</li>');
					}
				}
			});
		}
	});
		// var defaults = {
		// 	"autoPlay" : true,
		// 	"autoPlayTime" : 2000,
		// 	"eventType" : "click"
		// };

		// $.extend(defaults,opt);

	// 	return this.each(function(){

	// 		var window_width = $(window).width(),
	// 		featured = $(this),
	// 		featured_wrapper = featured.find(".featured-wrapper"),
	// 		featured_row = featured.find(".views-row"),
	// 		banner_num = featured_row.size(),
	// 		x = 0,
	// 		timer = null;

	// 		setIcom();
	// 		init_banner();
	// 		banner_click();


	// 		if(defaults.autoPlay) {
	// 			set_timer();
	// 			featured.hover(
	// 				function(){
	// 					clearInterval(timer);
	// 				},
	// 				function(){
	// 					set_timer();
	// 				}
	// 			);
	// 		}
			
	// 		function set_timer() {
	// 			timer = setInterval(function(){
	// 				if(x<banner_num-1){
	// 					x++;
	// 				}else{
	// 					x = 0;
	// 				}
	// 				featured.find(".count .menu li").eq(x).trigger("click");		
	// 			},defaults.autoPlayTime);
	// 		}
			
	// 		function banner_click(){
	// 			featured.find(".count .menu li").on(defaults.eventType,function(){
	// 				var index = $(this).index();
	// 				featured_wrapper.animate({marginLeft:-1*window_width*index});
	// 				x = index;
	// 			});
	// 		}

	// 		function init_banner() {
	// 			featured_wrapper.width(window_width*banner_num);
	// 			featured_row.width(window_width);
	// 		}

	// 		function setIcom() {
	// 			featured.append('<div class="count"><ul class="menu"></ul></div>');
	// 			for(var i=1; i<banner_num+1; i++){
	// 				featured.find(".count .menu").append('<li>'+i+'</li>');
	// 			}
	// 		}
	// 	});
	// }
});