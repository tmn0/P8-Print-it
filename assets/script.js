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
const Arrow_Left_Alert = document.querySelector(".arrow_left")
Arrow_Left_Alert.addEventListener('click', show_alert); 
function show_alert() {
  alert("clic!");
}

const Arrow_Right_Alert = document.querySelector(".arrow_right")
Arrow_Right_Alert.addEventListener('click', show_alert); 
function show_alert() {
  alert("clic!");
}





// Dots


const slide = document.querySelector('.banner');
const bullets = document.querySelectorAll('.dot');

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {

    
    const activeBullet = document.querySelector('.dot_selected');
    activeBullet.classList.remove('active');
    bullet.classList.add('active');
	  });
});
