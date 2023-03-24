(function(){
	
	"use strict";
  const body = document.body;

  // Add an event listener to the window object that listens for the "wheel" event
  window.addEventListener("wheel", function(event){
  
    // Calculate the amount to scroll horizontally based on the direction and magnitude of the scroll event
    const scrollAmount = event.deltaY;
  
    // Update the scrollLeft property of the document.body element
    body.scrollLeft += scrollAmount;

    console.log(scrollAmount)
  });

})();