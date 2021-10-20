import {ReactComponent as list} from '../../../assets/SVG/list.svg';
import {ReactComponent as pen} from '../../../assets/SVG/pen.svg';
import {ReactComponent as doc} from '../../../assets/SVG/doc.svg';
import {ReactComponent as grid} from '../../../assets/SVG/grid.svg';
import {ReactComponent as panel} from '../../../assets/SVG/panel.svg';
import {ReactComponent as person} from '../../../assets/SVG/person.svg';
import {ReactComponent as error} from '../../../assets/SVG/error.svg';

import {ErrorComponent} from "../../ErrorComponent";

const ErrorPage = () => (
    <ErrorComponent
        status='404'
        title='Не найдено'
        message='Попробуйте перезагрузить страницу'
    />
)

export const panelList = [
    {icon: pen, title: 'Карточка автомобиля', link: '/main/carSetting' },
    {icon: list, title: 'Список авто', link: '#' },
    {icon: doc, title: 'Заказы', link: '/main/orderList' },
    {icon: grid, title: 'Menu 4', link: '#' },
    {icon: panel, title: 'Menu 5', link: '#' },
    {icon: person, title: 'Menu 6', link: '#' },
    {icon: error, title: 'Menu 7', link: '#' },
]