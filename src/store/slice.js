import React from 'react'
import { createSlice } from "@reduxjs/toolkit"
import imgs from '../style/importImg/importImg'

const slice = createSlice({
    name: 'savvas',
    initialState: {
        // Наполнение карточек
        cards: [
            {id: 1, name: 'Александр Соколов', nick: '@sokol', price: '150 000₽', text: 'Я буду вашим React JS Frontend разработчиком', userImg: imgs.react.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.python.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
            {id: 2, name: 'Алексей Комков', nick: '@devpython', price: 'от 100 000₽', text: 'Я выполню ваши задачи по разработке на Python', userImg: imgs.python.user, cardImg: imgs.react.description},
        ],
        // Наполнение открытых карточек
        cardsOpen: [
            {
                id: 1, 
                title: 'Я буду вашим React JS Frontend разработчиком', 
                price: 150000,
                description: `Здравствуйте и добро пожаловать! 
                    Меня зовут Александр, я профессиональный разработчик веб-приложений. 
                    Я хорошо разбираюсь в стеке MERN. Я выполнил много проектов с этими 
                    технологиями. Моя единственная цель — разрабатывать и предоставлять 
                    своим клиентам высококачественные веб-приложения. Я буду работать над 
                    вашим проектом, пока вы не останетесь довольны моей работой. Так что, 
                    не стесняйтесь обращаться ко мне в любое время. Спасибо.`,
                tags: ' ',
                user: {
                    name: 'Александр Соколов',
                    nick: '@sokol',
                    img: imgs.react.user
                },
                img: imgs.react.description,
            },
            {
                id: 2, 
                title: 'Я выполню ваши задачи по разработке на Python', 
                price: 'от 100000',
                description: 
                    `Привет, если вы ищете кого-то, кто может решить любую задачу
                    по программированию на Python, то вы обратились по адресу.`,
                tags:     
                    `1) Опыт разработки программного обеспечения с использованием Python. 
                    2) 5-летний опыт работы с Python и другими языками баз данных, такими как SQL, MONGODB. 
                    3) Сделал несколько проектов (около 30). 4) Выиграл несколько хакатонов. 
                    5) Гибкость в работе в соответствии с требованиями клиентов. 
                    6) Знание современного стека, включая Tensorflow, Keras и алгоритмы, такие как CNN, логистическая регрессия, линейная регрессия. 
                    7) Трудолюбивый и решительный.`,
                user: {
                    name: 'Алексей Комков',
                    nick: '@devpython',
                    img: imgs.python.user
                },
                img: imgs.python.description,
            }
        ],
        // Текущая открытая карточка
        currentCard: {
            id: 1, 
            title: 'Я буду вашим React JS Frontend разработчиком', 
            price: 150000,
            description: `Здравствуйте и добро пожаловать! 
                Меня зовут Александр, я профессиональный разработчик веб-приложений. 
                Я хорошо разбираюсь в стеке MERN. Я выполнил много проектов с этими 
                технологиями. Моя единственная цель — разрабатывать и предоставлять 
                своим клиентам высококачественные веб-приложения. Я буду работать над 
                вашим проектом, пока вы не останетесь довольны моей работой. Так что, 
                не стесняйтесь обращаться ко мне в любое время. Спасибо.`,
            tags: ' ',
            user: {
                name: 'Александр Соколов',
                nick: '@sokol',
                img: imgs.react.user
            },
            img: imgs.react.description,
        },
        burger: {
            state: 'close',
            display: 'none'
        }
    },
    reducers: {
        cardOpen(state, action) {
            state.currentCard = state.cardsOpen.filter(item => item.id === action.payload)[0]
        },
        burgerOpen(state, action) {
            state.burger.state = action.payload.state
            state.burger.display = action.payload.display
        },
        burgerClose(state, action) {
            state.burger.state = action.payload.state
            state.burger.display = action.payload.display
        },
    }
})

export default slice.reducer
export const {cardOpen, burgerOpen, burgerClose} = slice.actions              