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


// const update = () => {
//     loader.classList.add('fadein');
//     loader.style.display = 'block';
//     content.style.opacity = '0';
//
//     setTimeout(() => {
//         getTemplateWeather()
//     }, 500)
// };
