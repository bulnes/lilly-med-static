/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
import Splide from "@splidejs/splide";

const defaultSplide = {
	mediaQuery: "min",
	trimSpace: false,
	focus: "center",
	perPage: 3,
	autoHeight: true,
	autoWidth: true,
	gap: 23,
	autoplay: true,
	breakpoints: {
		768: {
			trimSpace: true,
			focus: "center",
			perPage: 3,
			autoHeight: true,
			autoWidth: true,
			gap: 33,
			autoplay: true,
		},
	},
};

// Exclusive to Banner format
const bannerSplide = {
	mediaQuery: "min",
	trimSpace: false,
	focus: "center",
	perPage: 3,
	autoHeight: true,
	autoWidth: true,
	gap: 23,
	autoplay: true,
	breakpoints: {
		1200: {
			trimSpace: false,
			focus: "center",
			perPage: 1,
			autoHeight: false,
			autoWidth: false,
			height: "440px",
			width: "1200px",
			gap: 33,
			autoplay: true,
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
