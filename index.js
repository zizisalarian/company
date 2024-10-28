// fixed navbar
window.addEventListener('scroll', () => {
    let header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 0)
})



// comment slider
let slides = document.getElementsByClassName("comment-card");
let mainLine = document.querySelector('.comments .main-line')
let cursor = document.querySelector('.comments .cursor')
document.querySelector('.comments .last').innerHTML =   slides.length



let cursorHeight = (mainLine.clientHeight/slides.length)
cursor.style.height = cursorHeight + 'px';
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  slides[0].style.display = "flex";
  function showSlides(n) {
      let i;
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    cursor.style.top = (cursorHeight* (slideIndex-1)) + 'px'
    slides[slideIndex-1].style.display = "flex"; 
  }

// news slider
let newsSlide = document.getElementsByClassName("last-news-card");
let mainLineNews = document.querySelector('.last-news .main-line')
let cursorNews = document.querySelector('.last-news .cursor')
document.querySelector('.last-news .last').innerHTML =   newsSlide.length
let cursorHeightNews = (mainLineNews.clientHeight/newsSlide.length)
cursorNews.style.height = cursorHeightNews + 'px';
let slideIndexNews = 1;
showSlidesNews(slideIndexNews);

function plusSlidesNews(n) {
    showSlidesNews(slideIndexNews += n);
  }

  newsSlide[0].style.display = "flex";
  function showSlidesNews(n) {
      let i;
    if (n > newsSlide.length) {slideIndexNews = 1}    
    if (n < 1) {slideIndexNews = newsSlide.length}
    for (i = 0; i < newsSlide.length; i++) {
      newsSlide[i].style.display = "none";  
    }
    cursorNews.style.top = (cursorHeightNews* (slideIndexNews-1)) + 'px'
    newsSlide[slideIndexNews-1].style.display = "flex"; 
  }


//   product slider
let productSlide = document.querySelectorAll(".introduce-2 .introduce-cards");
console.log(productSlide , 'lmlkn');


let slideIndexproduct = 1;
showSlidesproduct(slideIndexproduct);

function plusSlidesproduct(n) {
    showSlidesproduct(slideIndexproduct += n);
  }

  productSlide[0].style.display = "flex";
  function showSlidesproduct(n) {
      let i;
    if (n > productSlide.length) {slideIndexproduct = 1}    
    if (n < 1) {slideIndexproduct = productSlide.length}
    for (i = 0; i < productSlide.length; i++) {
      productSlide[i].style.display = "none";  
    }
    productSlide[slideIndexproduct-1].style.display = "flex"; 
  }
