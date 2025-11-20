// list of filepaths for the audios 

const imgs = document.querySelectorAll('.head');
// set a number variable
// to keep track of which image is showing in the list
// this will also start at 0 (the first image)
// when the page loads
let currentIndex = 0;

// function to update visibility
// idx = index = the number we are giving the function
function updateVisibility(idx) {
    // for each image in the list of imgs 
    imgs.forEach((img, i) => {
    // give the current image (i) the 'visible' class
    img.classList.toggle('visible', i === idx);
    });
}

// when the left button is clicked
document.getElementById('left-btn').addEventListener('click', function() {
    // -1 from the current index
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    // update the visibility
    updateVisibility(currentIndex);
});

// when the right button is clicked
document.getElementById('right-btn').addEventListener('click', function() {
    // +1 to the current index
    currentIndex = (currentIndex + 1) % imgs.length;
    // update the visibility
    updateVisibility(currentIndex);
});

// this will run the function once at the start
// to make sure the first image is visible
updateVisibility(currentIndex);

// sensor to sense when the icons are clicked (could b buttons)
// change function called that changes the icons 

