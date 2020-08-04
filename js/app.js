// array for background pictures
const pictures = ["slide-1.jpg", "slide-2.jpg", "slide-3.jpg", "slide-4.jpg", "slide-5.jpg"];

// Html selector 
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const content = document.querySelector('.slide-content');

let count = 0;
let length = pictures.length - 1;

// left arrow button event handler
leftBtn.addEventListener('click', function () {
  count--
  if (count < 0) {
    count = length;
  }
  content.style.backgroundImage = `url('img/${pictures[count]}')`;
});

// right arrow button event handler
rightBtn.addEventListener('click', function () {
  count++
  if (count > length) {
    count = 0;
  }
  content.style.backgroundImage = `url('img/${pictures[count]}')`;
});