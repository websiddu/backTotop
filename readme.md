backTotop
===========

A jquery plugin to implement the back to top button, when you have a long page and scrolled to bottom.

#### Plug it to your appliction

The first thing you need to do is download the jquery.backTotop.min.js and jquery.backTotop.css, place it your project.

You can use the below lines to import the files into your application by placing those two line in head tag or place it where it best suits in your app.

 		<link rel="stylesheet" href="css/jquery.ScrollTotop.css"></head>
  	<script src="js/jquery.backTotop.js"></script>

#### Start the plugin

After successful pluging in, we need to init the plugin as below

	  <script>
	    (function(){
	      $("body").backTotop({
	       isWindow: true // If you want backTotop for window
	      });
	    });
	  </script>

#### Options that you can play with

Here are the setting that you can input to the plugin, these are the default settings.

		{
		    buttonShowanimation: 'fade', // animation type fade/show/slide
		    buttonShowanimationTime: 'medium', // can be fast/slow/medium or any number in milli seconds
		    scrollBottomOffset: 100, // display the scroll to top button when user scroll this many pixels
		    text: "Back to top ↑", // the text inside the back to top!!
		    backTotopLink: $("<a></a>", {
		      "class": "back-to-top",
		      "id": "back-top",
		      "href": "javascript:void(null)"
		    }), // a dom object that acts a button
		    scrollTopOffset: 0, // scroll to top until this many px from top
		    cssClass: "", // theme your back to top button
		    scrollTime: "fast", // can be fast / slow / medium or any number in Milli seconds
		    isWindow: false, // make it true if you want for window
		    focusOuthide: true, //hides the button when mouse-out of the element (works only if isWindow: false)
		    focusOuthideHideTime: 1000, // slow, fast or medium or any number of Milli seconds
		    focusOuthideShowTime: 'medium', // slow, fast or medium or any number of Milli seconds
		    buttonPos: {
		      top: "",
		      left: "",
		      right: 10,
		      bottom: 10,
		    } // be intelligent mark only two
		}

#### FAQ's

##### Icons user from

http://fortawesome.github.com/Font-Awesome/

##### CSS reponsive framework used

http://foundation.zurb.com/

#### License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.