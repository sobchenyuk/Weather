import { setTimeParameter } from './app/Date'
import templateWeather from './app/TemplateWeather'

const waitTime = 30 * 60 * 1000;

window.addEventListener('load', (e) => {
	setTimeParameter;
	templateWeather();

	setTimeout(() => {
		templateWeather();
	}, waitTime);
});