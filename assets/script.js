const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    
	}
];
const imgFolder = './assets/images/slideshow/';



// Alert test
const Arrow_Left = document.querySelector(".arrow_left")
/*Arrow_Left_Alert.addEventListener('click', show_alert); 
function show_alert() {
  alert("clic!");
}
*/

const Arrow_Right = document.querySelector(".arrow_right")
/*Arrow_Right_Alert.addEventListener('click', show_alert); 
function show_alert() {
  alert("clic!");
}
*/


let currentIndex = 0;
const tagLineContainer = document.createElement("div");



// Dots

function CreateDots () {
  const banner = document.querySelector('#banner');
  const bullets = document.querySelectorAll('.dot');

  slides.forEach((slide, index) => {
    const dotContainer = banner.querySelector('.dots');

    const bullet = document.createElement('div');
    bullet.classList.add('dot');

    dotContainer.appendChild(bullet);
    document.querySelector('.dots').children[0].classList.add('dot_selected');
  });
}
CreateDots();


  

  /*bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      
      const activeBullet = document.querySelector('.dot_selected');
      activeBullet.classList.remove('dot_selected');
      bullet.classList.add('dot_selected');
      });
      
  });*/


function changeBannerImg(imgPath) {
  document.querySelector('.banner-img').setAttribute('src', imgPath);
}

function changeTagLine(text) {
  tagLineContainer.innerHTML = `
    <p class="tag-line">${text}</p>;    
  `
}

const bannerImg = document.querySelector('.banner-img');


function InitialCarouselImg() {  
  changeBannerImg(imgFolder + slides[0].image);
  changeTagLine(slides[0].tagLine);
  document.querySelector('#tagLineContainer').appendChild(tagLineContainer);
}
InitialCarouselImg();





function changeCurrentBullet(currentIndex, nextIndex) {
  const bullets = document.querySelector('.dots').children;

  bullets[currentIndex].classList.remove("dot_selected");
  bullets[nextIndex].classList.add("dot_selected");
}


Arrow_Right.addEventListener("click", function () {
  console.log(currentIndex);

  if (currentIndex >= slides.length - 1) {
    currentIndex = 0;
    changeCurrentBullet(slides.length - 1, 0);
  } else {
    currentIndex++;
    changeCurrentBullet(currentIndex - 1, currentIndex);
  }

  changeBannerImg(imgFolder + slides[currentIndex].image);
  changeTagLine(slides[currentIndex].tagLine);

/*
  slides.forEach((slide, index) => {
  
  let slideElement = document.createElement('div');
*/
  //bannerImg.innerHTML = 
  //` <img src="${slides[currentIndex].image}" alt="banner image ${currentIndex}">
  //  <p class="tag-line">${slides.tagLine}</p> `;
  /* >>>>> Comment faire correspondre currentIndex avec par ex. img src="${slides.image} ? */
/*
  activeDot.classList.remove('dot_selected');
  let nextDot = classList.nextSibling;
  nextdot.classList.add('dot_selected');
  */
  /* >>>>> gérer les cas particuliers aux loops pour les dots*/
});


Arrow_Left.addEventListener("click", function () {
  console.log(currentIndex);

  if (currentIndex <= 0) {
    currentIndex = slides.length - 1;
    changeCurrentBullet(0, currentIndex);
  } else {
    currentIndex--;
    changeCurrentBullet(currentIndex + 1, currentIndex);
  }

  changeBannerImg(imgFolder + slides[currentIndex].image);
  changeTagLine(slides[currentIndex].tagLine);
});





/*
function NextButton () {
  Arrow_Right.addEventListener('click' , abc => {
    const dotList = Array.from(document.querySelector('.dots').children)
    const currentIndex = dotList.findIndex((dot, index) => {dot.classList.contains('dot_selected')});  

    slides.forEach((slide, index) => {
  const slideElement = document.createElement('div');
  slideElement.classList.add('slide');
  slideElement.innerHTML = `
    <img src="${slide.image}" alt="banner image ${index ++}">
    <p class="tag-line">${slide.tagLine}</p>;    
  `});

  })
}



/*
var currentIndex
  Arrow_Left.addEventListener('click' , abc => {
    const dotList = Array.from(document.querySelector('.dots').children)
    const currentIndex = dotList.findIndex((dot, index) => {dot.classList.contains('dot_selected')});  

    slides.forEach((slide, index) => {
  const slideElement = document.createElement('div');
  slideElement.classList.add('slide');
  slideElement.innerHTML = `
    <img src="${slide.image}" alt="banner image ${index ++}">
    <p class="tag-line">${slide.tagLine}</p>
  `});
  
  })
*/

/* 1) Initialiser à 0 le currentIndex*
   2) "" fleche de droite (const Arrow_Right)
/  3) les conditions (<>)





const nextButton = Arrow_Right;

function nextButtonClic () {

  nextButton.addEventListener('click', e => { 

  bannerImg.setAttribute('src', imgFolder + slides[0].image);
  activeDot.classList.remove('dot_selected');
  let nextDot = e.target.closest('dot');
  nextdot.classList.add('dot_selected');
  
  })
}
nextButtonClic();

/* reformule ligne 114, concaténer i pour index


const prevButton = Arrow_Left;

prevButton.addEventListener('click', e => { 

  bannerImg.setAttribute('src', imgFolder + slides(-1).image);
  activeDot.classList.remove('dot_selected');
  let nextDot = classList.previousSibling;
  nextdot.classList.add('dot_selected');
  
})






  
let slidesMaxIndex = slides.length
console.log(slidesMaxIndex)

function nextButtonLoop () {
  if (currentIndex >= slidesMaxIndex);
  InitCarouselImg ();
}

function prevButtonLoop () {
  if (currentIndex <= -1);
  
}
 



/*
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
*/


/*
  let altImg = 'Banner Print-it';
  const bannerImg = document.querySelector('.banner-img');

  bannerImg.setAttribute('alt', altImg);
  bannerImg.setAttribute('src', imgFolder + slides[0].image);
  document.querySelector('.dots').children[0].classList.add('dot_selected');
}

  var CurrentIndex
  Arrow_Left.addEventListener('click' , abc => {
    const dotList = Array.from(document.querySelector('.dots').children)
    const currentIndex = dotList.findIndex((dot, index) => {dot.classList.contains('dot_selected')});
  }   

  )
*/



/*
const slidesContainer = document.querySelector('.slides-container');
const bullets = document.querySelectorAll('.bullet');

// Create slides dynamically
slides.forEach((slide, index) => {
  const slideElement = document.createElement('div');
  slideElement.classList.add('slide');
  slideElement.innerHTML = `
    <img src="${slide.image}" alt="Slide ${index + 1}">
    <p class="tag-line">${slide.tagLine}</p>
  `;
  slidesContainer.appendChild(slideElement);
});

// Handle bullet click event
bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    // Update active bullet
    const activeBullet = document.querySelector('.bullet.active');
    activeBullet.classList.remove('active');
    bullet.classList.add('active');

    // Slide to the selected slide
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  });
});

*/







/*
"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

*/