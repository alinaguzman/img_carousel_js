var carousel = document.getElementById('carousel');
var position = 0;

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var start = document.getElementById('start-slideshow');
var stop = document.getElementById('stop-slideshow');

    carousel.style.marginLeft = 0;

// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2

// Create onclick events to advance the images

next.onclick = function(event) {
    // code you put in here will be run when the next button is clicked
    if (position === -1224){
        position = 0;
        carousel.style.marginLeft = position + "px";
    } else {
    position += -612;
    carousel.style.marginLeft = position + 'px';
    }
};

previous.onclick = function(event){
    if (position === 0){
        position = -1224;
        carousel.style.marginLeft = position + "px";
    } else {
        position += 612;
        carousel.style.marginLeft = position + 'px';
    }
};

start.onclick = function startSlideShow() {
    showTimer = window.setInterval(next.onclick, 1000);
};

stop.onclick = function stopSlideShow() {
    window.clearInterval(showTimer);
    start.style.marginLeft = '0px'
};

var slideTimer = null;
function slideRight(){
        position -= 5;
        carousel.style.marginLeft = position + 'px';
}

function slide(){
    slideTimer = window.setInterval(slideRight, 30);
}

//The following 4 events deal with opacity changes to the buttons when hovered over and out
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
stop.onmouseover = function(event){
    this.style.opacity = .9;
};
start.onmouseover = function(event){
    this.style.opacity = .9;
};
start.onmouseout = function(event){
    this.style.opacity = .4;
};
stop.onmouseout = function(event){
    this.style.opacity = .4;
};

