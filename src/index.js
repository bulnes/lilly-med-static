import initDefaultSliders from "./helpers/sliders";
import { configMenuMobileLinks } from "./helpers/toggle-menu-mobile";
import "./styles/main.scss";

window.addEventListener("load", () => {
	configMenuMobileLinks();
	initDefaultSliders();

	document.body.classList.remove("invisible");
	document.body.focus();
});

window.addEventListener("resize", () => {
	// reload page on resize
	window.location.reload();
});
