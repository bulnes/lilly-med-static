import { tns } from "tiny-slider/src/tiny-slider";

const defaultSliderConfig = {
	container: ".slider-default",
	preventScrollOnTouch: "auto",
	controls: false,
	navPosition: "bottom",
	loop: false,
	items: 2,
	gutter: 23,
	swipeAngle: false,
	speed: 400,
	rewind: true,
	center: true,
	autoWidth: true,
	responsive: {
		768: {
			items: 3,
			gutter: 33,
			center: false,
			loop: true,
		},
	},
};

function initDefaultSliders() {
	const defaultSliders = [...document.querySelectorAll(".slider-default")];

	defaultSliders.forEach((sliderContainer) => {
		const uniqueId = `slider-${Math.random().toString(36).substr(2, 9)}`;
		// eslint-disable-next-line no-param-reassign
		sliderContainer.id = uniqueId;

		tns({ ...defaultSliderConfig, container: `#${uniqueId}` });
	});
}

export default initDefaultSliders;
