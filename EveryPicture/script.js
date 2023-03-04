(function(){
    'use strict';
    console.log('reading js');

    // Your script goes here...
    const sliderContent = document.querySelector('.slider');
    // Get the width of the slider
    const sliderWidth = sliderContent.offsetWidth;
    // Clone the slider and give the cloned version a class of ".b"
    const cloned = sliderContent.cloneNode(true);
    cloned.className = "b";
    // Add the cloned slider to to the .slider div so there are two copies of pictures
    document.querySelector('.slider').appendChild(cloned);

    // Get the :root from the stylesheet (which has CSS variables listed)
    const root = document.querySelector(':root');
    // set the left position of the slider so half of it is off the left side of the window.
    const endLeftPos = `-${sliderWidth}px`;
    // set the custom variable inside the stylesheet. 
    // This variable is used in the @keyframe animation   
    root.style.setProperty('--sliderwidth', endLeftPos);
    //console.log(getComputedStyle(root).getPropertyValue('--sliderwidth'));

    // Add the animate class to the slider, which will animate it.
    document.querySelector('.slider').classList.add("animate");

    // Add an event listener for hovering over the slider to pause it
    document.querySelector('.slider').addEventListener('mouseover', function(){
        document.querySelector('.animate').style.animationPlayState = 'paused';
    });

    //Add an event listener to restart the animation after pausing stopped.
    document.querySelector('.slider').addEventListener('mouseout', function(){
        document.querySelector('.animate').style.animationPlayState = 'running';
    });
    console.log('prueba de sonido uno dos uno dos');
})();

