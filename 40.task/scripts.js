//SELECT 
const select_city = document.getElementById('select_city');

//SELECT PLACEHOLDER 
const option_placeholder = document.createElement('option');
option_placeholder.setAttribute('selected', true);
option_placeholder.innerHTML = 'Виберіть місто';
option_placeholder.setAttribute('hidden', true);
select_city.appendChild(option_placeholder);

//RESULT VALUES TABLE
const values_weather_current = document.getElementById('values_weather_current');
values_weather_current.style.display = 'none';

//VALUES
const temp = document.getElementById('temp');
const pressure = document.getElementById('pressure');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('speed');
const deg = document.getElementById('deg');
const icon = document.getElementById('icon');

select_city.addEventListener('change', (e) => {
	//value from input
	const target_city = select_city.value;
	const target_city_ukr = select_city.options[select_city.selectedIndex].text;
	
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${target_city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
	.then(res => res.json()) 
	.then(data => {
		values_weather_current.style.display = 'block';
		// city.innerHTML = data.name  // name from response
		city.innerHTML = target_city_ukr;
		temp.innerHTML = data.main.temp;
		pressure.innerHTML = data.main.pressure;
		description.innerHTML = data.weather[0].description;
		humidity.innerHTML = data.main.humidity;
		speed.innerHTML = data.wind.speed;
		deg.innerHTML = data.wind.deg;
		icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
	})	
})