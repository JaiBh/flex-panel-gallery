const panels= document.querySelectorAll(".panel")

// Cause the panel to expand
function toggleOpen() {
	this.classList.toggle("open")
}

// Cause the text to appear from the top and bottom
function toggleActive(e) {
	if(e.propertyName.includes("flex")) {
		this.classList.toggle("open-active")
	}
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen,));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive,));