// import initDefaultSliders from "./helpers/sliders";
import { configMenuMobileLinks } from "./helpers/toggle-menu-mobile";
import "./styles/main.scss";

window.addEventListener("load", () => {
	configMenuMobileLinks();
	// initDefaultSliders();

	document.body.classList.remove("invisible");
	document.body.focus();

	const navLinks = [
		...document.querySelectorAll(".header__nav-link, .header__nav-mobile-link"),
	];
	navLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			const href = link.getAttribute("href");
			const section = document.querySelector(href);
			section.scrollIntoView(false);
		});
	});
});
