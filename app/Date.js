import { week } from "./constant";

const setTimeParameter = {
    week,
    time: [],
    day: [],
    date: new Date(),
    data_delay: 1000,
    watchNumbers(number) {
        return number < 10 ? `0${number}` : number;
    },
    timeTemplate(h, m, s) {
        return `${h}:${this.watchNumbers(m)}:${this.watchNumbers(s)}`;
    },
    setTime(timeSelector) {

        this.time.innerHTML = this.timeTemplate(
            this.date.getHours(),
            this.date.getMinutes(),
            this.date.getSeconds(),
        );

        setInterval(() => {

            const date = new Date();

            timeSelector.innerText = this.timeTemplate(
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
            )


        }, this.data_delay);
    },
    dayNow(num) {
        return this.week[num]
    },
    init(timeSelector, daySelector) {

        if (timeSelector && daySelector) {
            this.time = timeSelector;
            this.day = daySelector;

            this.setTime(timeSelector);
            this.day.innerHTML = this.dayNow(this.date.getDay());
        } else {
            console.error('No selectors passed DAY AND TIME !!!!')
        }
    }
};


export default setTimeParameter;
