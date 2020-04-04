import store from './store'
import { ParserParams } from './Utils'

const defaultCityId = 18;
const { key_api, week, city:arrCity, getDefaultCity } = store;

const params = ParserParams(getDefaultCity(defaultCityId));
const { currentCity } = params;

export { key_api, week, currentCity, arrCity }
