/*!
 * jQuery backTotop plugin v1.0
 *
 * Date: Sat Oct 13 17:17:47 2012 EDT
 * Requires: jQuery v1.3+
 *
 * Copyright 2013, Siddhartha Gudipati
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 *
 * Examples can be found at http://websiddu.github.com/backTotop/examples.html
 *
*/

;(function ($, window, document, undefined) {

  var BackToTop = function(elem, options) {
      this.elem = elem;
      this.$elem = $(elem);
      this.$backTotopLink  = null;
      this.options = options;

    }

  BackToTop.prototype = {
  defaults:
    {
      buttonShowanimation: 'fade', // animation type fade/show/slide
      buttonShowanimationTime: 'medium',// can be fast/slow/medium or any number in milli seconds
      easing: "swing", // easing effect if jquery ui or any easing plugin is included
      scrollBottomOffset: 100, // display the scroll to top button when user scroll this many pixels
      text: "Back to top &uarr;", // the text inside the back to top!!
      backTotopLink : $("<a></a>", {
        "class": "back-to-top",
        "id": "back-top",
        "href":"javascript:void(null)"
      }),
      scrollTopOffset: 0, // scroll to top until this many px from top
      cssClass: "", // theme your back to top button
      scrollTime: 'medium', // can be fast/slow/medium or any number in milli seconds
      isWindow: false,
      focusOuthide: true,
      focusOuthideHideTime : 1000,
      focusOuthideShowTime :'medium',
      buttonAlignTo: "left", //left / right
      buttonPos:{
        top: "",
        left: "",
        right: 10,
        bottom: 10
      }
    },
  init: function() {
      this.config = $.extend({}, this.defaults, this.options);
      var thiz = this;
      var cssOpts = {};
      if (this.config.backTotopLink.length > 0)
         this.config.backTotopLink = this.config.backTotopLink.clone();



      this.config.backTotopLink
        .html(this.config.text)
        .addClass(this.config.cssClass)
        .appendTo(this.config.isWindow ? "body" : this.$elem)
        .hide();

      if(this.config.isWindow === true){
        this.$elem  = $(window);
          cssOpts = {
              position: "fixed",
              left:  this.config.buttonPos.left + "px",
              top: this.config.buttonPos.top + "px",
              bottom: this.config.buttonPos.bottom + "px",
              right: this.config.buttonPos.right + "px",
            }
      }
      else{
      var boxMargin = parseInt(this.$elem.css("marginLeft").replace("px", "")),
          boxPadding = parseInt(this.$elem.css("paddingLeft").replace("px", ""));
        cssOpts = {
            position: "absolute",
            top:
              (
                this.$elem.position().top
                + this.$elem.height()
                - this.config.buttonPos.bottom
              )
              + "px",
            left:
              (
                this.config.buttonPos.left === ""
                ?
                  this.$elem.position().left
                  + this.$elem.width()
                  + boxMargin
                  - this.config.buttonPos.right
                  - this.config.backTotopLink.width()
                :
                  this.config.buttonPos.left
                  + boxMargin
                  + boxPadding
              )
              + "px"
          }
        }

      this.config.backTotopLink.css(cssOpts);

      this.$elem.on("scroll", function(){
        $.proxy(thiz.handleScroll(), thiz);
      });

      this.config.backTotopLink.on("click", function(e){
        e.preventDefault();
        $.proxy(thiz.returnTop(), thiz);
      });

    this.focusOuthide();

      return this;
    },

    focusOuthide:function(){
      var thiz = this;
      if(this.config.focusOuthide === true && this.config.isWindow != true){
        this.$elem.bind("mouseleave", function(e){
          thiz.hideBackTotopButton(thiz.config.focusOuthideHideTime);
        }).bind("mouseenter", function(e){
          if( thiz.$elem.scrollTop() > thiz.config.scrollBottomOffset)
            thiz.showBackTotopButton(thiz.config.focusOuthideShowTime);
        });
      }
    },
    showBackTotopButton: function(animTime){
       if(this.config.buttonShowanimation === "fade"){
        this.config.backTotopLink.fadeIn(animTime);
       }else if(this.config.buttonShowanimation === "show" ){
        this.config.backTotopLink.show(animTime);
       }else if(this.config.buttonShowanimation === "slide" ){
        this.config.backTotopLink.slideDown(animTime);
       }
    },
    hideBackTotopButton: function(animTime){
      if(this.config.buttonShowanimation === "fade"){
        this.config.backTotopLink.stop().fadeOut(animTime);
       }else if(this.config.buttonShowanimation === "show" ){
        this.config.backTotopLink.hide(animTime);
       }else if(this.config.buttonShowanimation === "slide" ){
        this.config.backTotopLink.stop(),slideUp(animTime);
       }
    },
  returnTop:function(){
      // scroll body to 0px on click
      var thiz = this,
        scrollUnit = this.config.isWindow ? $("body,html") : this.$elem;

      scrollUnit.animate({
          scrollTop: thiz.config.scrollTopOffset + "px"
      }, this.config.scrollTime, this.config.easing ,function(){

      });
    },
    handleScroll: function() {


      if(this.$elem.scrollTop() > this.config.scrollBottomOffset) {
        this.showBackTotopButton(this.config.buttonShowanimationTime);
      } else {
        this.hideBackTotopButton(this.config.buttonShowanimationTime);
      }
    }
  }

  BackToTop.defaults = BackToTop.prototype.defaults;

  $.fn.backTotop = function(options) {
    return this.each(function(){
      new BackToTop(this, options).init();
    });
  }


})(jQuery, window, document);