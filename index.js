import { setTimeParameter } from './app/Date'
import templateWeather from './app/TemplateWeather'

window.addEventListener('load', (e) => {
	setTimeParameter;
	templateWeather();

	setInterval(function(){
		const date = new Date();

		date.getMinutes() === 30 || date.getMinutes() === 0 ? templateWeather() : null

	}, 1000);

});