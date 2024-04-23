const slides = document.getElementsByClassName("slide");
let active_img;

for (let i = 0; i < slides.length; i++) {
	const slide = slides[i];
	console.log(slide);
	if (slide.classList.contains(`active`)) {
		slide.classList.remove(`active`);
		active_img = i;
	}
}

slides[active_img + 1].classList.add(`active`);
