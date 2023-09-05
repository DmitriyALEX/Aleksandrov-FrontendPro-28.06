//modal window
const registerBtn = document.getElementById('register_btn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close_popup');

registerBtn.addEventListener('click', () => {
popup.classList.add('open')
});

closePopup.addEventListener('click', () => {
	popup.style.display = 'none'
});	

//FORM
//name and age
const userName = document.getElementById('name');
const userSurname = document.getElementById('surName');
const userAge = document.getElementById('age');

//male 
const choose_male = [...document.getElementsByName('choose_male')] 
const male_user = document.getElementById('male_user')
const userMaleMale = document.getElementById('male_radio');
const userMaleFemale = document.getElementById('female_radio');

let data;
for (let i = 0; i < choose_male.length; i++) {
 	choose_male[i].addEventListener('click', (e) => {
	data = choose_male[i].value
 	})
}

//location
const userCity = document.getElementById('city');
const userAdress = document.getElementById('adress');

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

const option_placeholder = document.createElement('option')
option_placeholder.setAttribute('selected', true)
option_placeholder.innerHTML = 'Виберіть місто'
option_placeholder.setAttribute('hidden', true)
userCity.appendChild(option_placeholder)

cityArr.forEach(e => {
	const option_city = document.createElement('option')
	option_city.setAttribute('value', e)
	userCity.appendChild(option_city)
	option_city.innerHTML = e
})

//language 
const userLanguage = document.getElementById('language_user');
const userEnglish = document.getElementById('english_checkbox');
const userUkrainian = document.getElementById('ukrainian_checkbox');

//form submit
const form = document.querySelector('form')
const tbody = document.querySelector('tbody')

form.addEventListener('submit', (event) => {
	event.preventDefault()
	
	const tr = document.createElement('tr')
	tbody.append(tr)

	if(userName.value || userSurname.value || userAge.value || choose_male || userCity.value) {	
		const td_name = document.createElement('td')
		tr.append(td_name)
		td_name.innerHTML = `${userName.value}`

		const td_surName = document.createElement('td')
		tr.append(td_surName)
		td_surName.innerHTML = `${userSurname.value}`

		const td_age = document.createElement('td')
		tr.append(td_age)
		td_age.innerHTML = `${userAge.value}`

		if(data !== undefined) {
			const td_maleUser = document.createElement('td')
			tr.append(td_maleUser)
			td_maleUser.innerText = data
		} else {
			const td_maleUser = document.createElement('td')
			tr.append(td_maleUser)
			td_maleUser.innerText = ''

			const male_empty = document.createElement('span')
			male_empty.innerHTML = 'Зробіть свій вибір'
			male_empty.style.color = 'red'
			male_user.prepend(male_empty)
		}

		if(userCity.value === 'Виберіть місто') {
			event.preventDefault()
			popup.style.display = 'block'
			const userCity_empty = document.createElement('span')
			userCity_empty.innerHTML = 'Заповніть це поле'
			userCity_empty.style.color = 'red'
			userCity.before(userCity_empty)
		} else {
			const td_city = document.createElement('td')
			tr.append(td_city)
			td_city.innerHTML = userCity.value
		}

		const td_address = document.createElement('td')
		tr.append(td_address)
		td_address.innerHTML = userAdress.value

		const p_language = document.createElement('span')
		tr.append(p_language)
		const td_language = document.createElement('td')
		p_language.append(td_language)

		let res = ''
		if(userEnglish.checked) {
			res += userEnglish.value
		}

		if(userUkrainian.checked) {
			if (res !== '') {
				res += '<br>'
			}
			res += userUkrainian.value
		}
		td_language.innerHTML = res

		if(res === '') {
		 	event.preventDefault()
			popup.style.display = 'block'
			const userLanguage_empty = document.createElement('span')
			userLanguage_empty.innerHTML = 'Заповніть це поле'
			userLanguage_empty.style.color = 'red'
			userLanguage.prepend(userLanguage_empty)
		}

		popup.style.display = 'none'
	} 	

	if (userName.value === '') {
		event.preventDefault()
		popup.style.display = 'block'
		const name_empty = document.createElement('span')
		name_empty.innerHTML = 'Заповніть це поле'
		name_empty.style.color = 'red'
		userName.before(name_empty)
	}
	if (userSurname.value === '') {
		event.preventDefault()
		popup.style.display = 'block'
		const userSurname_empty = document.createElement('span')
		userSurname_empty.innerHTML = 'Заповніть це поле'
		userSurname_empty.style.color = 'red'
		userSurname.before(userSurname_empty)
	}

	if (userAge.value === '') {
		event.preventDefault()
		popup.style.display = 'block'
		const userAge_empty = document.createElement('span')
		userAge_empty.innerHTML = 'Заповніть це поле'
		userAge_empty.style.color = 'red'
		userAge.before(userAge_empty)
	}

	if (userAdress.value === '') {
		event.preventDefault()
		popup.style.display = 'block'
		const userAdress_empty = document.createElement('span')
		userAdress_empty.innerHTML = 'Заповніть це поле'
		userAdress_empty.style.color = 'red'
		userAdress.before(userAdress_empty)
	}
})
	
