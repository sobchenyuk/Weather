import Cookies from "js-cookie";

export default {
    key_api: 'ffd85cda398bb54787d1ea0e8a643900',

    lang: [
        { id: 0, value: 'ru' }
    ],

    city: [
        { id: 0, cityId: 689558, value: 'Vinnytsia, UA', name: 'Винница' },
        { id: 1, cityId: 709930, value: 'Dnipro, UA', name: 'Днепр' },
        { id: 2, cityId: 709717, value: 'Donetsk, UA', name: 'Донецк' },
        { id: 3, cityId: 686967, value: 'Zhytomyr, UA', name: 'Житомир' },
        { id: 4, cityId: 687700, value: 'Zaporizhia, UA', name: 'Запорожье' },
        { id: 5, cityId: 707471, value: 'Ivano-Frankivsk, UA', name: 'Ивано-Франковск' },
        { id: 6, cityId: 703448, value: 'Kyiv, UA', name: 'Киев' },
        { id: 7, cityId: 705812, value: 'Kropyvnytskyi, UA', name: 'Кропивницкий' },
        { id: 8, cityId: 702658, value: 'Luhansk, UA', name: 'Луганск' },
        { id: 9, cityId: 702569, value: 'Lutsk, UA', name: 'Луцк' },
        { id: 10, cityId: 702550, value: 'Lviv, UA', name: 'Львов' },
        { id: 11, cityId: 700569, value: 'Mykolayiv, UA', name: 'Николаев' },
        { id: 12, cityId: 698740, value: 'Odesa, UA', name: 'Одесса' },
        { id: 13, cityId: 696643, value: 'Poltava, UA', name: 'Полтава' },
        { id: 14, cityId: 695594, value: 'Rivne, UA', name: 'Ровно' },
        { id: 15, cityId: 692194, value: 'Sumy, UA', name: 'Сумы' },
        { id: 16, cityId: 691650, value: 'Ternopil, UA', name: 'Тернополь' },
        { id: 17, cityId: 690548, value: 'Uzhhorod, UA', name: 'Ужгород' },
        { id: 18, cityId: 706483, value: 'Kharkiv, UA', name: 'Харьков' },
        { id: 19, cityId: 706448, value: 'Kherson, UA', name: 'Херсон' },
        { id: 20, cityId: 706369, value: 'Khmelnytskyi, UA', name: 'Хмельницкий' },
        { id: 21, cityId: 710791, value: 'Cherkasy, UA', name: 'Черкассы' },
        { id: 22, cityId: 710719, value: 'Chernivtsi, UA', name: 'Черновцы' },
    ],

    week: [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ],

    getDefaultCity(id) {
        if ( !Cookies.get('city_id') ) {
            Cookies.set('city_id', id)
            return id
        }

        return Number(Cookies.get('city_id'));
    }
}
