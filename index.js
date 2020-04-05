import setTimeParameter from './app/Date'
import changeCity from './app/ChangeCity'

import { templateWeather } from './app/TemplateWeather'
import { CalculationProgress } from './app/Utils'

const loader = document.querySelector('.weatherWidget__loader');
const content = document.querySelector('.weatherWidget__content');
const progress = document.querySelector('.weatherWidget__progress');

const getTemplateWeather = async () => {
	await templateWeather()
		.then(()=> {
			loader.classList.contains('fadein') && loader.classList.remove('fadein');
			loader.style.display = 'none';
			content.style.opacity = '1';
		});
};

window.addEventListener('load', (e) => {
	const time = document.querySelector('time');
	const day = document.querySelector('.Day');

	getTemplateWeather().then( ()=> {
		setTimeParameter.init(time, day);

		changeCity.init();
	});

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

	}, 1000);

});
