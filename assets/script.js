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
]



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




// Dots

function Dots () {
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
Dots();


  

  /*bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      
      const activeBullet = document.querySelector('.dot_selected');
      activeBullet.classList.remove('active');
      bullet.classList.add('active');
      });
      
  });*/



const imgFolder = './assets/images/slideshow/';
const bannerImg = document.querySelector('.banner-img');

function InitialCarouselImg() {  
  bannerImg.setAttribute('src', imgFolder + slides[0].image);  
}
InitialCarouselImg();





const nextButton = Arrow_Right;


nextButton.addEventListener('click', e => { 
  bannerImg.setAttribute('src', imgFolder + slides(+1).image);
  
})








var CurrentIndex
  Arrow_Left.addEventListener('click' , abc => {
    const dotList = Array.from(document.querySelector('.dots').children)
    const currentIndex = dotList.findIndex((dot, index) => {dot.classList.contains('dot_selected')});  

    slides.forEach((slide, index) => {
  const slideElement = document.createElement('div');
  slideElement.classList.add('slide');
  slideElement.innerHTML = `
    <img src="${slide.image}" alt="banner image ${index + 1}">
    <p class="tag-line">${slide.tagLine}</p>
  `});
  
  })




  
let slidesMaxIndex = slides.length
console.log(slidesMaxIndex)

function nextButtonLoop () {
  if (currentIndex >= slidesMaxIndex);
  InitCarouselImg ();
}

function prevButtonLoop () {
  if (currentIndex <= -1);
  InitCarouselImg ();
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
  let slides = document.getElementsByClassName("mySlides");
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
