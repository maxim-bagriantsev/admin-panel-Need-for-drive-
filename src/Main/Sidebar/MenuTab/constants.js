import {ReactComponent as list} from '../../../assets/SVG/list.svg';
import {ReactComponent as pen} from '../../../assets/SVG/pen.svg';
import {ReactComponent as doc} from '../../../assets/SVG/doc.svg';
import {ReactComponent as grid} from '../../../assets/SVG/grid.svg';
import {ReactComponent as panel} from '../../../assets/SVG/panel.svg';
import {ReactComponent as person} from '../../../assets/SVG/person.svg';
import {ReactComponent as error} from '../../../assets/SVG/error.svg';

export const panelList = [
    {icon: pen, title: 'Карточка автомобиля', link: '/main/carSetting'},
    {icon: list, title: 'Список машин', link: '/main/listCars'},
    {icon: doc, title: 'Заказы', link: '/main/orderList'},
    {icon: grid, title: 'Menu 4', link: '/main/error'},
    {icon: panel, title: 'Menu 5', link: '/main/error'},
    {icon: person, title: 'Menu 6', link: '/main/error'},
    {icon: error, title: 'Menu 7', link: '/main/error'},
]