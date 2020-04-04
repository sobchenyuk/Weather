import Cookies from 'js-cookie'
import { currentCity, arrCity } from './constant';

class ChangeCity {

    constructor(currentCity, arrCity) {
        this._select = document.querySelector('.js-select');
        this._currentCity = currentCity;
        this._arrCity = arrCity;
    };

    async getMaterialSelect() {
        try {
            await this.createOptions(this._select);
            const { el:select } = await window.M.FormSelect.init(this._select);
            return select;
        } catch (err) {
            console.log(err)
        }
    }

    onChangeSelect(select) {
        const { target: { value } } = select;

        Cookies.set('city_id', Number(value));
    }

    createOptions(select) {
        select.innerHTML = '';

        const { id } = this._currentCity;

        for ( let key in this._arrCity) {

            const option = document.createElement('option');
            option.value = this._arrCity[key].id;
            option.innerHTML = this._arrCity[key].name;

            if ( this._arrCity[key].id === id ) option.setAttribute('selected', true );

            select.appendChild(option)

        }
    }

    init() {
        this.getMaterialSelect()
            .then( res => {
                res.addEventListener('change', this.onChangeSelect)
            });
    }
}

const changeCity = new ChangeCity(currentCity, arrCity);
Object.freeze(changeCity);

export default changeCity;
