const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
let img = document.querySelector('.logo-foot')
btn.addEventListener('click', btnClick)

function btnClick() {
	console.log(content.classList)
	if (content.classList.contains('hidden')) {
		btn.textContent = 'Скрыть'
		img.classList.add('button-go-img')
	} else {
		btn.textContent = 'Показать всё'
		img.classList.remove('button-go-img')
	}
	content.classList.toggle('hidden')
}
// ---swiper---
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 2,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})
