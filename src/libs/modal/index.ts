const showModal = (selector: HTMLElement) => {
	selector.style.display = "flex"
	selector.style.animation = "slideIn 0.5s forwards"
}

const hideModal = (selector: HTMLElement) => {
	selector.style.animation = "slideOut 0.5s forwards"
	setTimeout(() => {
		selector.style.display = "none"
	}, 500)
}

const toggleModal = (selector: HTMLElement) => {
	if (selector.style.display === "none" || selector.style.display === "") {
		showModal(selector)
	} else {
		hideModal(selector)
	}
}
export { toggleModal }
