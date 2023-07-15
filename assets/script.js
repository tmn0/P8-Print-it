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



// Banner Image
function changeBannerImg(imgPath) {
  document.querySelector('.banner-img').setAttribute('src', imgPath);
  document.querySelector('.banner-img').setAttribute('alt',"Banner Print-it");
}

function changeTagLine(text) {
  tagLineContainer.innerHTML = `
    <p class="tag-line">${text}</p>    
  `
}

// Initial banner
const bannerImg = document.querySelector('.banner-img');

function InitialCarouselImg() {  
  changeBannerImg(imgFolder + slides[0].image);
  changeTagLine(slides[0].tagLine);
  document.querySelector('#tagLineContainer').appendChild(tagLineContainer);
}
InitialCarouselImg();


// Bullet & Arrow behaviour
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