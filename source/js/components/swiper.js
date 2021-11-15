import Swiper from 'swiper';

const width = document.body.querySelector('.swiper-slide').offsetWidth;
const screen = 1200;
const gap = 30;
let swiper = undefined;

if (window.matchMedia(`(max-width: ${screen}px)`).matches) {
	const setSwiper = () => {
		const swiper = new Swiper('.swiper-container', {
			loop: false,
			speed: 500,
			slidesPerView: 1,
			slidesPerGroup: 1,
			width: width + gap,
	
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}

	swiper = setSwiper;
}

export {swiper}
