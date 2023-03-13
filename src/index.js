import initDefaultSliders from "./helpers/sliders";
import { configMenuMobileLinks } from "./helpers/toggle-menu-mobile";
import "./styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
	document.body.classList.add("visible");
});

window.addEventListener("load", () => {
	configMenuMobileLinks();
	initDefaultSliders();
});
