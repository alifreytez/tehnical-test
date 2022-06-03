function Menu({ menuSelector = null, timeOperation = 0 }) {
	this.menu = document.querySelector(menuSelector);
	this.timeOperation = timeOperation;
	this.opened = false;
}

Menu.prototype.open = function() {
	console.log("abrir");
	if (this.opened)
		return false;

	this.menu.classList.add("display");
	setTimeout(() => {
		this.menu.classList.add("showed");
		this.opened = true;
	}, 20);
}
Menu.prototype.close = function() {
	console.log("cerrar");
	if (!this.opened)
		return false;

	this.menu.classList.remove("showed");
	setTimeout(() => {
		this.menu.classList.remove("display");
		this.opened = false;
	}, this.timeOperation);
}

export default Menu;