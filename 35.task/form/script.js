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
	select_town.appendChild(option_city)
	option_city.innerHTML = e
})

//checkname	
const user_name = document.getElementById('user_name')
const check_name = document.getElementById('check_name')

//checkposhta
const nova_poshta = document.getElementById('nova_poshta')
const check_poshta = document.getElementById('check_poshta')

function checkname(value) {
	const user_name_value = user_name.value
	console.log(user_name_value)
	if(user_name_value === '') {
		check_name.innerHTML = 'incorrect name'
		check_name.style.color = 'red'
	} else {
		check_name.innerHTML = 'correct name!'
		check_name.style.color = 'green'
	}
}

function checkposhta() {
	const nova_poshta_value = nova_poshta.value
	const regex = /[A-z]/g
	const res_poshta = nova_poshta_value.match(regex)
	if((res_poshta) || (nova_poshta_value === '')) {
		check_poshta.innerHTML = 'incorrect number'
		check_poshta.style.color = 'red'
	} else {
		check_poshta.innerHTML = 'correct number!'
		check_poshta.style.color = 'green'
	}
}

const check_pay = document.getElementById('check_pay')
const pay = document.getElementsByName('pay')

function check_pay_func() { 
	let select;
	for(const radio of pay) {
		if(radio.checked) {
			select = radio.value;
		}
	}
	if(select) {
		check_pay.innerHTML = 'correct_payment' 
		check_pay.style.color = 'green'
	} else {
		check_pay.innerHTML = 'incorrect_payment';
		check_pay.style.color = 'red'
	}
}

const sub_button = document.getElementById('sub_button')
const add_button = document.getElementById('add_button')
const res_input = document.getElementById('res_input')
const res_sum = document.getElementById('res_sum')

let i = 1	
sub_button.onclick = function add(event) {
	event.preventDefault()
	if(i === 1) {
		sub_button.disabled === true
	} else {
		i--
		res_input.value = i
		res_sum.innerHTML = i
	}
}

add_button.onclick = function add(event) {
	event.preventDefault()
	i++
	res_input.value = i
	res_sum.innerHTML = i
}

const form_container = document.getElementById('form_container')
			
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
	if(checkname(user_name) || checkposhta(nova_poshta) || check_pay_func(select)) {
		event.preventDefault();
	} 
})