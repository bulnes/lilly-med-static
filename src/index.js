import initDefaultSliders from "./helpers/sliders";
import { configMenuMobileLinks } from "./helpers/toggle-menu-mobile";
import "./styles/main.scss";

window.addEventListener("load", () => {
	configMenuMobileLinks();
	initDefaultSliders();

	document.body.classList.add("visible");
});
