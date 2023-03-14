/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
import Splide from "@splidejs/splide";

const defaultSplide = {
	mediaQuery: "min",
	type: "slide",
	trimSpace: false,
	focus: "center",
	perPage: 3,
	autoHeight: true,
	autoWidth: true,
	gap: 23,
	autoplay: false,
	interval: 4000,
	breakpoints: {
		768: {
			type: "loop",
			trimSpace: true,
			focus: 0,
			perPage: 3,
			autoHeight: true,
			autoWidth: true,
			gap: 33,
			autoplay: false,
			interval: 4000,
		},
	},
};

const defaultAtLeat3Splide = {
	...defaultSplide,
	breakpoints: {
		768: {
			...defaultSplide.breakpoints[768],
			type: "slide",
			arrows: false,
			pagination: false,
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
	arrows: true,
	pagination: true,
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
			interval: 4000,
		},
	},
};

const bannerWith1Splide = {
	...bannerSplide,
	type: "slide",
	arrows: false,
	pagination: false,
};

function getConfig(children, isBanner) {
	if (isBanner) {
		return children.length < 2 ? { ...bannerWith1Splide } : { ...bannerSplide };
	}
	return children.length < 4
		? { ...defaultAtLeat3Splide }
		: { ...defaultSplide };
}

function initDefaultSliders() {
	const elms = document.getElementsByClassName("splide");
	for (let i = 0; i < elms.length; i++) {
		const isBanner = elms[i].classList.contains("splide--banner");
		const children = [...elms[i].querySelectorAll(".splide__slide")];

		const configs = getConfig(children, isBanner);

		new Splide(elms[i], { ...configs }).mount();
	}
}

export default initDefaultSliders;
