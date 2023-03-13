/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
import Splide from "@splidejs/splide";

const defaultSplide = {
	mediaQuery: "min",
	type: "loop",
	trimSpace: false,
	focus: "center",
	perPage: 3,
	autoHeight: true,
	autoWidth: true,
	gap: 23,
	autoplay: true,
	interval: 4000,
	breakpoints: {
		768: {
			type: "loop",
			trimSpace: true,
			focus: "center",
			perPage: 3,
			autoHeight: true,
			autoWidth: true,
			gap: 33,
			autoplay: true,
			interval: 4000,
		},
	},
};

// Exclusive to Banner format
const bannerSplide = {
	mediaQuery: "min",
	type: "loop",
	trimSpace: false,
	focus: "center",
	perPage: 3,
	autoHeight: true,
	autoWidth: true,
	gap: 23,
	autoplay: true,
	interval: 4000,
	breakpoints: {
		1200: {
			type: "loop",
			trimSpace: false,
			focus: "center",
			perPage: 1,
			autoHeight: false,
			autoWidth: false,
			height: "440px",
			width: "1200px",
			gap: 33,
			autoplay: true,
			interval: 4000,
		},
	},
};

function initDefaultSliders() {
	const elms = document.getElementsByClassName("splide");
	for (let i = 0; i < elms.length; i++) {
		const configs = elms[i].classList.contains("splide--banner")
			? bannerSplide
			: defaultSplide;

		new Splide(elms[i], { ...configs }).mount();
	}
}

export default initDefaultSliders;
