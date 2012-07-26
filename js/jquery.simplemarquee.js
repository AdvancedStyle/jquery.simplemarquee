jQuery(function($){
	$.fn.simplemarquee = function(options){
		var settings = $.extend( {
		  'speed'         : 5000
		}, options);
		var html = '';
		var width = 0;
		return this.each(function() {
			if($(this).length){
				html = $(this).html()+'<span class="spacer"></span>';
				$(this).html('<div class="section">'+html+'</div>');
				width = $('.section',this).width();
				var n = 0;
				for(i=0;i<30;i++){
					$('.section',this).append(html);
					if($('.section',this).width() > $(this).width()){
						n++;
					}
					if(n > 1){
						break;
					}
				}
				animateit($('.section',this));
			}
		});
		function animateit(obj){
			obj.animate({left: '-'+width+'px'},settings.speed,'linear',function(){
				obj.css('left','0px');
				animateit(obj);
			});
		}
	}
});