const body = document.querySelector('body')
const container = document.getElementById('container')
const user_name = document.getElementById('user_name')
//city
const cityArr = [
	'Вінниця',
	'Дніпро',
	'Донецьк',
	'Житомир', 
	'Запоріжжя',
	'Івано-Франківськ',
	'Київ',
	'Кропивницький',
	'Луганськ', 
	'Луцьк',
	'Львів',
	'Миколаїв',
	'Одеса',
	'Полтава',
	'Рівне', 
	'Суми',
	'Тернопіль', 
	'Ужгород', 
	'Харків', 
	'Херсон',
	'Хмельницький',
	'Черкаси', 
	'Чернівці', 
	'Чернігів'
]

const select_town = document.getElementById('select_town')

cityArr.forEach(e => {
	const option_city = document.createElement('option')
	option_city.id = option_city
	option_city.value = e
	select_town.appendChild(option_city)
	option_city.innerHTML = e
})

//poshta 
const nova_poshta = document.getElementById('nova_poshta')

//pay
const pay_method = document.getElementById('pay_method')
const pay_after = document.getElementById('pay_after')
const pay_bank = document.getElementById('pay_bank')

//count_items 
const counter  = document.getElementById('counter')

//coment 
const coment  = document.getElementById('coment')

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
 	event.preventDefault()
 	
 	const product_list = document.getElementById('product_list')
 	product_list.style.display = 'none'
 	const item = document.getElementById('item')
 	item.style.display = 'none'

 	// const popup_remove = document.getElementById('popup').classList.remove('open') 

 	const choosen_items = document.createElement('div')

	//payment_method
	let payment_res = ''
	if (pay_after.checked) {
		payment_res += pay_after.value
	}
	if (pay_bank.checked) {
		payment_res += pay_bank.value
	}
	if(payment_res === '') {
		event.preventDefault()
		const empty_payment = document.createElement('p')
		empty_payment.setAttribute('class', 'empty_payment')
		empty_payment.innerHTML = 'Заповніть це поле'
		empty_payment.style.color = 'red'
		pay_method.prepend(empty_payment)
	}

	//choosen_items_at_the_page
	choosen_items.innerHTML = `
		<p>Ваше ФІО</p>
	 	<p>${user_name.value}</p>
	 	<p>Ваше місто</p> 
	 	<p>${select_town.value}</p>
	 	<p>Відділення нової пошти</p>
	 	<p>${nova_poshta.value}</p>
	 	<p>Ваш спосіб оплати</p>
	 	<p>${payment_res}</p>
	 	<p>Кількість товару</p>
	 	<p>${counter.value}</p>
	 	<p>Ваш коментар</p>
	 	<p>${coment.value}</p>
	`
	product.appendChild(choosen_items)
})
	   
document.getElementById('close_popup').addEventListener('click', function() {
	const popup1 = document.getElementById('popup').classList.remove('open') 
})
