const toggleMenuMobile = () => {
	const menu = document.querySelector(".header__nav-mobile");

	const visible = "header__nav-mobile--visible";
	const invisible = "header__nav-mobile--invisible";

	if (menu.classList.contains(visible)) {
		menu.classList.remove(visible);
		menu.classList.add(invisible);
	} else {
		menu.classList.remove(invisible);
		menu.classList.add(visible);
	}
};

export const configMenuMobileLinks = () => {
	const links = document.querySelectorAll("[data-menu-mobile-link]");
	links.forEach((link) => {
		link.addEventListener("click", toggleMenuMobile);
	});
};

export default toggleMenuMobile;
