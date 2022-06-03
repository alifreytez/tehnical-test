import Menu from './page-navigation-menu.js';

const menuOpenButton = document.getElementById("open-nav-menu"),
	menuCloseButton = document.getElementById("close-nav-menu"),
	menu = new Menu({ menuSelector: "#nav-menu", timeOperation: 500 });

menuOpenButton.addEventListener("click", menu.open.bind(menu));
menuCloseButton.addEventListener("click", menu.close.bind(menu));

// extra
document.querySelectorAll("#nav-menu .most-interested-site-links li").forEach(element => {
	element.addEventListener("click", () => {
		alert("you are leaving this page, lets goou!");
		menu.close();
	});
});