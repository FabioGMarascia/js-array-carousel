const slides = document.getElementsByClassName("slide");
const next_btn = document.getElementById(`next_btn`);
let active_img;

next_btn.addEventListener(`click`, function () {
	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];
		console.log(slide);
		if (slide.classList.contains(`active`)) {
			slide.classList.remove(`active`);
			active_img = i;
		}
	}

	slides[active_img + 1].classList.add(`active`);
});
