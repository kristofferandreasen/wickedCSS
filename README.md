# wickedCSS
A library for CSS3 animations.

The animations include regular CSS3 animations to be used in all settings. 
Additionally, the library includes a number of wicked animations, which aren't applicable in all situations.
They can be fun to play with.

For examples and documentation [View Project Page](http://kristofferandreasen.github.io/wickedCSS/).

# Usage

To use the library, simply download and link to the file in your header.

    <link rel="stylesheet" href="wickedcss.min.css"/>
    
Or the non-minified version.

    <link rel="stylesheet" href="wickedcss.css"/>
    
Simply add the animation class to your element and it will perform your wicked animation.

    <div class="barrelRoll"> Place your content here </div>
    
In this case, the contents of the div will perform the barrelRoll animation. All the classes can be found on the [Project Page](http://kristofferandreasen.github.io/wickedCSS/).

The classes can be applied to all elements including images.

    <img src="images/mushroom.png" class="spinner"/>

##### Classes

- floater
- barrelRoll
- rollerRight
- rollerLeft
- heartbeat
- pulse
- rotation
- sideToSide
- zoomer
- zoomerOut
- spinner
- wiggle
- shake
- pound
- slideUp
- slideDown
- slideRight
- slideLeft
- fadeIn
- fadeOut
- rotateInRight
- rotateInLeft
- rotateIn
- bounceIn

# Customizations

##### Show on scroll
In order to show the animations on scroll, the library can be integrated with [wow.js](http://mynameismatthieu.com/WOW/).
The animation will fire when the element enters the screen. Remember to include jQuery before wow.js like so:
    
*Jquery with local fallback:*

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
    
*wow.js*  

    <script src="js/wow.min.js"></script>
    <script>
    new WOW().init();
    </script>

It can be used like this:

    <div class="wow barrelRoll"> Content to Reveal Here </div>
    
##### Show on scroll - Alternative
The animation can alternatively be triggered at a specific position. In this example it will be triggered when the element is 450 pixels from the top of the screen.

```javascript
    <script>
    	$(window).scroll(function() {
    		$('#animatedElement').each(function(){
    		var imagePos = $(this).offset().top;
    
    		var topOfWindow = $(window).scrollTop();
    			if (imagePos < topOfWindow+450) {
    				$(this).addClass("barrelRoll");
    			}
    		});
    	});
    </script>
```