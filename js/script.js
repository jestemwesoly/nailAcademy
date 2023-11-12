// NAV TOGGLE
const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.nav-btn')

const navToggle = () => {
	nav.classList.toggle('visible')
}

navBtn.addEventListener('click', navToggle)
