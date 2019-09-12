import axios from 'axios';

const KEY_API = 'ed951695db6d4781a52104049182311';
const CITY = 'Kharkiv';
const LANG = 'ru';

const generated = data => {

    const t = document.querySelector('.text');
    const i = document.querySelector('.icon');
    const temp = document.querySelector('.temp');
    const feel = document.querySelector('.feel');
    const h = document.querySelector('.humidity');

    // handle success
    const { current } = data;

    const {
        feelslike_c, temp_c, humidity, condition
    } = current;

    const {text, icon} = condition;

    t.innerHTML = text;
    i.src = icon;

    temp.innerHTML = temp_c;
    feel.innerHTML = feelslike_c;
    h.innerHTML = humidity;
};

const templateWeather = async () => {

    try {

        let res = await axios.get(
            `//api.apixu.com/v1/current.json?key=${KEY_API}&q=${CITY}&lang=${LANG}`
        );
        const { data } = await res;

        generated(data)

    } catch (e) {
        console.error(e);
    }

};


export default templateWeather;