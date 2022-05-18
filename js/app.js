import { isWebp } from './components/isWebp.js'

isWebp()

const $burgerButton = document.querySelector('.menu__burger-button')
const $joinButton = document.querySelector('.header__join')

$burgerButton.addEventListener('click', () => {
	document.body.classList.toggle('active')
	$burgerButton.classList.toggle('active')
})
$joinButton.addEventListener('click', () => {
	console.log('Вибрация!')
	window.navigator.vibrate([400, 200, 400])
})
