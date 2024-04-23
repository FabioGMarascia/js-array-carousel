const slides = document.getElementsByClassName("slide");
const next_btn = document.getElementById(`next-btn`);
const prev_btn = document.getElementById(`prev-btn`);

let active_img_i;

next_btn.addEventListener(`click`, function () {
	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];

		if (slide.classList.contains(`active`)) {
			slide.classList.remove(`active`);
			active_img_i = i;
		}
	}

	let next_img_i = active_img_i + 1;

	if (next_img_i >= slides.length) {
		slides[0].classList.add(`active`);
	} else {
		slides[next_img_i].classList.add(`active`);
	}
});

prev_btn.addEventListener(`click`, function () {
	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];
		console.log(slide);
		if (slide.classList.contains(`active`)) {
			slide.classList.remove(`active`);
			active_img_i = i;
		}
	}

	let prev_img_i = active_img_i - 1;

	if (prev_img_i < 0) {
		slides[3].classList.add(`active`);
	} else {
		slides[prev_img_i].classList.add(`active`);
	}
});
