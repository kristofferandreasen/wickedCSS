# wickedCSS
A library for CSS3 animations.

The animations include regular CSS3 animations to be used in all settings. 
Additionally, the library includes a number of wicked animations, which aren't applicable in all situations.
They can be fun to play with.

For examples and documentation [View Project Page](https://kristofferandreasen.github.io/wickedcss/).

# Usage

To use the library, simply download and link to the file in your header.

    <link rel="stylesheet" href="wickedcss.min.css"/>
    
Or the non-minified version.

    <link rel="stylesheet" href="wickedcss.css"/>
    
Simply add the animation class to your element and it will perform your wicked animation.

    <div class="barrelRoll"> Place your content here </div>
    
In this case, the contents of the div will perform the barrelRoll animation. All the classes can be found on the [Project Page](https://kristofferandreasen.github.io/wickedcss/).

# Customizations

It's time to take a look at some further customizations. If your animated element is going to be displayed as part of the initial view, remember to set the elements visibility to hidden. You can use this snippet.

    .animationclass { visibility:hidden; }
    

    


