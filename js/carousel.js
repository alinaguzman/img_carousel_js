var carousel = document.getElementById('carousel');

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');

carousel.style.marginLeft = 0;

// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2

// Create onclick events to advance the images

next.onclick = function(event){
    // code you put in here will be run when the next button is clicked

};

previous.onlick = function(event){

};

next.onmouseover = function(event){
    this.style.opacity = .9;
};

previous.onmouseover = function(event){
    this.style.opacity = .9;
};

next.onmouseout = function(event){
    this.style.opacity = .4;
};

previous.onmouseout = function(event){
    this.style.opacity = .4;
};
