const slides = document.getElementsByClassName(`slide`);
const thumbs = document.getElementsByClassName(`thumb`);
const next_btn = document.getElementById(`next-btn`);
const prev_btn = document.getElementById(`prev-btn`);
let active_img_i;
let active_thumb_i;

next_btn.addEventListener(`click`, function () {
	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];
		const thumb = thumbs[i];

		if (slide.classList.contains(`active`) && thumb.classList.contains(`active-thumb`)) {
			slide.classList.remove(`active`);
			active_img_i = i;
			thumb.classList.remove(`active-thumb`);
			active_thumb_i = i;
		}
	}

	let next_img_i = active_img_i + 1;
	let next_thumb_i = active_thumb_i + 1;

	if (next_img_i >= slides.length) {
		slides[0].classList.add(`active`);
		thumbs[0].classList.add(`active-thumb`);
	} else {
		slides[next_img_i].classList.add(`active`);
		thumbs[next_thumb_i].classList.add(`active-thumb`);
	}
});

prev_btn.addEventListener(`click`, function () {
	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];
		const thumb = thumbs[i];

		if (slide.classList.contains(`active`) && thumb.classList.contains(`active-thumb`)) {
			slide.classList.remove(`active`);
			active_img_i = i;
			thumb.classList.remove(`active-thumb`);
			active_thumb_i = i;
		}
	}

	let prev_img_i = active_img_i - 1;
	let prev_thumb_i = active_thumb_i - 1;

	if (prev_img_i < 0) {
		slides[4].classList.add(`active`);
		thumbs[4].classList.add(`active-thumb`);
	} else {
		slides[prev_img_i].classList.add(`active`);
		thumbs[prev_thumb_i].classList.add(`active-thumb`);
	}
});
