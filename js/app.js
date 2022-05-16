import { isWebp } from './components/isWebp.js'

isWebp()

const $burgerButton = document.querySelector('.menu__burger-button')

$burgerButton.addEventListener('click', () => {
	document.body.classList.toggle('active')
	$burgerButton.classList.toggle('active')
})
