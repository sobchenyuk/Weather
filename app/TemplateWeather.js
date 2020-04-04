import axios from 'axios';
import { key_api, currentCity, arrCity } from "./constant";

const generated = async (data, callback = () => {}) => {

    const t = document.querySelector('.text');
    const i = document.querySelector('.icon');
    const temp = document.querySelector('.temp');
    const feel = document.querySelector('.feel');
    const h = document.querySelector('.humidity');

    const { main: { temp:temperature, feels_like, humidity }, weather } = data;
    const { description, icon } = weather[0];

    t.innerHTML = description.toUpperCase();
    i.src = `//openweathermap.org/img/wn/${icon}@2x.png`;

    temp.innerHTML = temperature;
    feel.innerHTML = feels_like;
    h.innerHTML = humidity;

    await callback()
};

const getDataParams = async params => {

    const url = 'http://api.openweathermap.org/data/2.5/group';

    let { data: { list:data } } =  await axios.get(url, {
        params  : {
            id      : params,
            units   : 'metric',
            appid   : key_api,
        }
    });

    return data
};

const initRequestParams = async () => {
    let arr = arrCity.map( elem => elem.cityId );

    let arrayRequest = [];

    let size = 20;
    let subarray = [];

    for ( let i = 0; i < Math.ceil(arr.length/size ); i++ ){
        subarray[i] = arr.slice((i*size), (i*size) + size).join(',');
    }

    await subarray.forEach( elem => {
         getDataParams(elem).then( res => {
            for ( let item of res ) {
                arrayRequest.push(item)
            }
        });
    });

    return arrayRequest;
};

export const templateWeather = async () => {

    try {

        await initRequestParams().then( res => {
            setTimeout(() => {
                localStorage.setItem('arrayRequest', JSON.stringify(res));

                const currentCityObg = res.find( elem => elem.id === currentCity.cityId );

                localStorage.setItem('currentCityObg', JSON.stringify(currentCityObg));

                generated(currentCityObg, () => {
                    const cardTitle = document.querySelector('.card-title');

                    cardTitle.innerHTML = `Погода в ${currentCity.name}`
                })

            }, 500);
        })

    } catch (e) {
        console.log(e);
    }

};
