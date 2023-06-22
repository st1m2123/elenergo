import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material'
import s from "./tabs.module.css"
import {Link} from 'react-router-dom';
import elmw from './img/elmontaj.png'
import elmw2 from './img/elmon2.png'
import powerCabel from './img/powerCabel.png'

function Example(props)
{
    var items = [
        {
            name: "Электромонтажные работы на складе, площадь 860 кв. м".toUpperCase(),
            description: "Выполнили прокладку вводного силового кабеля ВВГнгLS 4х25 по улице. Установили щит. Произвели монтаж лотка ДКС для прокладки кабеля. Смонтировали освещение на высоте 6 метров на 1-м этаже. Выполнили на 2ом этаже подвес светильников на тросе на высоте 4 метра. Проложили питающие кабели 5х10 для силовых установок. Выполнили прокладку кабеля на питание кран-балки.",
            url: `${elmw}`
        },
        {
            name: "Электромонтаж на производстве, площадь 80 кв. м".toUpperCase(),
            description: "Выполнен монтаж перфорированного лотка. Выполнена прокладка розеточных групп, рабочего освещения и аварийного освещения. Смонтированы светильники. Произведен монтаж щита ГРЩ со счетчиком трансформаторного включения и щита освещения, управление освещением через контакторы. Установлены розетки 220В и 380В. Выполнен монтаж внутреннего контура заземления.",
            url: `${elmw2}`
        },
        {
            name: "Прокладка силового кабеля 5х240".toUpperCase(),
            description: "Прокладка трех ниток силового кабеля 5х240 общей протяженностью 850 метров. Разработка траншеи, устройство песчаной подушки, укладка сигнальной ленты. Выполнили монтаж концевых муфт и подключение. Произвели монтаж кабельных конструкций по эстакаде.",
            url: `${powerCabel}`
        }
    ]

    return (
        <Carousel autoPlay="true" animation="slide" interval="30000">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div className={s.sliderContent}>
            <img className={s.tabImage} src={props.item.url}/>
            <div className={s.slideContent}>
                <Typography
                variant='h5'
                sx={{color: 'white', letterSpacing: 4, textAlign: 'end', fontSize: '27px' ,display: {xs: 'none' , md: "flex"}}}
                >{props.item.name}
                </Typography>
                <Typography
                variant='p'
                sx={{color: 'white', letterSpacing: 1, display: {xs: 'flex' , md: "none"}}}
                >{props.item.name}
                </Typography>
                <Typography
                variant='body1'
                sx={{color: '#B7B7B7', letterSpacing: 4, textAlign: 'end', display: {xs: 'none' , md: "flex"}}}
                >
                    {props.item.description}
                </Typography>
                <Typography
                variant='body1'
                sx={{color: '#B7B7B7', letterSpacing: 1, display: {xs: 'flex' , md: "none"},
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineClamp: 3,
                boxOrient: "vertical",
            }}
                >
                    {props.item.description}
                </Typography>
                <Link to="/companyProjects" style={{color: 'white', zIndex: 6}}>УЗНАТЬ БОЛЬШЕ</Link>
            </div>
        </div>
    )
}

export default Example