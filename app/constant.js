import store from './store'
import { ParserParams } from './Utils'

const { key_api, week, city:arrCity, getDefaultCity } = store;

const params = ParserParams(getDefaultCity());
const { currentCity } = params;

export { key_api, week, currentCity, arrCity, getDefaultCity }
