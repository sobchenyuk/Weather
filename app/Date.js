const time = document.querySelector('time');
const day = document.querySelector('.Day');
const date = new Date();
const week = [
	'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
];

const setTimeParameter = {
	week,
	time,
	day,
	date,
	watchNumbers(number) {
		let result = number;
		if(number < 10) {
			result = `0${number}`
		}
		return result;
	},
	setTime() {
		setInterval(()=> {
			const date = new Date();
			this.time.innerHTML = `${date.getHours()}:${this.watchNumbers(date.getMinutes())}:${this.watchNumbers(date.getSeconds())}`;
		}, 1000);
	},
	dayNow(num) {
		return this.week[num]
	},
	init() {
		this.day.innerHTML = this.dayNow(this.date.getDay());
		this.setTime();
	}
};


export default setTimeParameter.init();