;(function($, window, document, undefined) {

	var BackToTop = function(elem, options) {
			this.elem = elem;
			this.$backTotopLink  = $(elem);
			this.options = options;
			this.$window = $(window);
		}

	BackToTop.prototype = {
	default:
		{
			buttonShowanimation: 'slide', // animation type fade/show/slide
			buttonShowanimationTime: 'medium',// can be fast/slow/medium or any number in milli seconds
			scrollBottomOffset: 100, // display the scroll to top button when user scroll this many pixels
			text: "Back to top &uarr;", // the text inside the back to top!!
			backTotopLink : $("<a></a>", {
				"class": "back-to-top",
				"id": "back-top",
				"href":"javascript:void(null)"
			}),
			scrollTopOffset: 0, // scroll to top until this many px from top
			cssClass: "", // theme your back to top button
			appendTo: "body", //body or html
			scrollTime: "fast", // can be fast/slow/medium or any number in milli seconds

		},
	init: function() {
			this.config = $.extend({}, this.default, this.options);

			var thiz = this;
			this.config.backTotopLink
				.html(this.config.text)
				.addClass(this.config.cssClass)
				.appendTo(this.config.appendTo)
				.hide();

			this.$window.on("scroll", function(){
				$.proxy(thiz.handleScroll(), thiz);
			});

			this.config.backTotopLink.on("click", function(e){
				e.preventDefault();
				$.proxy(thiz.returnTop(), thiz);
			});

			return this;
		},
	returnTop:function(){
			// scroll body to 0px on click
			var thiz = this;
			$('body,html').animate({
					scrollTop: thiz.config.scrollTopOffset + "px"
			}, this.config.scrollTime);
		},
		handleScroll: function() {
			var animTime = this.config.buttonShowanimationTime;
			if(this.$window.scrollTop() > this.config.scrollBottomOffset) {
			 if(this.config.buttonShowanimation === "fade"){
				this.config.backTotopLink.fadeIn(animTime);
			 }else if(this.config.buttonShowanimation === "show" ){
			 	this.config.backTotopLink.show(animTime);
			 }else if(this.config.buttonShowanimation === "slide" ){
			 	this.config.backTotopLink.slideDown(animTime);
			 }
			} else {
			 if(this.config.buttonShowanimation === "fade"){
				this.config.backTotopLink.fadeOut(animTime);
			 }else if(this.config.buttonShowanimation === "show" ){
			 	this.config.backTotopLink.hide(animTime);
			 }else if(this.config.buttonShowanimation === "slide" ){
			 	this.config.backTotopLink.slideUp(animTime);
			 }
			}
		}
	}

	$.fn.backTotop = function(options) {
		new BackToTop(this, options).init();
	}


})(jQuery, window, document);