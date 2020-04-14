import axios from 'axios';
import { key_api, arrCity, getDefaultCity } from "./constant";
import { installationUpdateWeather } from './Utils'

const getDataParams = async params => {

    const url = '//api.openweathermap.org/data/2.5/group';

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

    subarray.forEach( elem => {
         getDataParams(elem).then( res => {
            for ( let item of res ) {
                arrayRequest.push(item)
            }
        });
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(arrayRequest), 500)
    });
};

export const templateWeather = async () => {

    try {

        const res = await initRequestParams()

        await localStorage.setItem('arrayRequest', JSON.stringify(res));

        await installationUpdateWeather(getDefaultCity(), res)

    } catch (e) {
        console.log(e);
    }

};
