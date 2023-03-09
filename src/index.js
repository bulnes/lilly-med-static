import initDefaultSliders from "./helpers/sliders";
import "./styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
	document.body.classList.add("visible");
});

window.addEventListener("load", () => {
	initDefaultSliders();
});
