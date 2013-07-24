var carousel = document.getElementById('carousel');
var position = 0;
// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');

    carousel.style.marginLeft = 0;

// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2

// Create onclick events to advance the images

next.onclick = function(event) {
    // code you put in here will be run when the next button is clicked
    if (position === -1224){
        position = 0;
        carousel.style.marginLeft = 0 + "px";
    } else {
    position += -612;
    carousel.style.marginLeft = position + 'px';
    }
};

previous.onlick = function(event){
    position += 612;
    carousel.style.marginLeft = position + 'px';
};

//The following 4 events deal with opacity changes to the button when hovered over and out
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
