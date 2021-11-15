'use strict';

const svgButtons = document.body.querySelectorAll('.list__buttons svg');

svgButtons.forEach( button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

import { swiper } from "./components/swiper";
swiper();
