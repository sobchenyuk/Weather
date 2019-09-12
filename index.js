import debounce from 'lodash/debounce'
import setTimeParameter from './app/Date'
import templateWeather from './app/TemplateWeather'
import { CalculationProgress } from './app/CalculationProgress'

const button = document.querySelector('.weatherWidget__btn');
const loader = document.querySelector('.weatherWidget__loader');
const content = document.querySelector('.weatherWidget__content');
const progress = document.querySelector('.weatherWidget__progress');
const minutes = document.querySelector('.weatherWidget_minutes');

const getTemplateWeather = () => {
	templateWeather()
		.then(()=> {
			loader.classList.contains('fadein') && loader.classList.remove('fadein');
			loader.style.display = 'none';
			content.style.opacity = '1';
		});
};

window.addEventListener('load', (e) => {
	const time = document.querySelector('time');
	const day = document.querySelector('.Day');

	setTimeParameter.init(time, day);

	getTemplateWeather();

	setInterval(() => {
		const date = new Date();

		if (date.getMinutes() === 30 && date.getSeconds() === 1 ||
			date.getMinutes() === 0 && date.getSeconds() === 1) {
			loader.classList.add('fadein');
			loader.style.display = 'block';
			content.style.opacity = '0';

			setTimeout(() => {
				getTemplateWeather()
			}, 500)
		}

		progress.style.cssText = `width: ${CalculationProgress(date.getMinutes().toString())}%`;
		// minutes.innerHTML = Number(`${date.getMinutes().toString()}`) - (Number(`${date.getMinutes().toString()}`) - 30);

	}, 1000);

});

const update = () => {
	loader.classList.add('fadein');
	loader.style.display = 'block';
	content.style.opacity = '0';

	setTimeout(() => {
		getTemplateWeather()
	}, 500)
};

button.addEventListener('click', debounce(update, 200));