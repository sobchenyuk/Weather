import axios from 'axios';

const templateWeather = () => {

const t =  document.querySelector('.text');
const i =  document.querySelector('.icon');
const temp =  document.querySelector('.temp');
const precipitation =  document.querySelector('.precipitation');
const feel =  document.querySelector('.feel');
const h =  document.querySelector('.humidity');

axios.get('//api.apixu.com/v1/current.json?key=ed951695db6d4781a52104049182311&q=Kharkiv&lang=uk')
	.then(function (response) {
		// handle success
		const current = response.data.current;

		const {
			feelslike_c, temp_c, precip_in, humidity, condition
		} = current;

		const { text, icon } = condition;

		t.innerHTML = text;
		i.src = icon;

		temp.innerHTML = temp_c;
		precipitation.innerHTML = precip_in;
		feel.innerHTML = feelslike_c;
		h.innerHTML = humidity;


	})

};


export default templateWeather;