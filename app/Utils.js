import store from './store'

export const CalculationProgress = value => {
    let val = value;
    if(value > 30) {
        val = value - 30
    }
    return (val * 100) / 30
};

export const CalculationMinutes = value => {
    let val = value;
    if(value > 30) {
        val = value - 30
    }
    return 30 - val;
};

export const ParserParams = city_id => {

    const { city } = store;

    const currentCity = city.find( el => el.id === city_id );

    return {
        currentCity
    }
};

export const generated = async data => {

    const t = document.querySelector('.text');
    const i = document.querySelector('.icon');
    const temp = document.querySelector('.temp');
    const feel = document.querySelector('.feel');
    const h = document.querySelector('.humidity');

    const { main: { temp:temperature, feels_like, humidity }, weather } = data;
    const { description, icon } = weather[0];

    t.innerHTML = description.toUpperCase();
    i.src = `//openweathermap.org/img/wn/${icon}@2x.png`;

    temp.innerHTML = Math.ceil(temperature);
    feel.innerHTML = Math.ceil(feels_like);
    h.innerHTML = humidity;
};


export const installationUpdateWeather = async ( id, localStorageParams = null )  => {

    let result = null;
    const currentCity = ParserParams(id)['currentCity'];
    const { cityId, name } = currentCity;

    result =  !!localStorageParams ? localStorageParams : JSON.parse(localStorage.getItem('arrayRequest'));

    const currentCityObg = await result.find( elem => elem.id === cityId );

    await generated(currentCityObg).then( () => {
        const cardTitle = document.querySelector('.card-title');

        cardTitle.innerHTML = `Погода ${name}`
    })
};
