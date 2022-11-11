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
            {id: 3, name: 'SAVVAS', nick: '@savvas ', price: 'от 100 000₽', text: 'Станьте бизнес партнером SAVVAS', userImg: imgs.python.user, cardImg: imgs.savvas.description},
            {id: 4, name: 'Health', nick: '@Health', price: 'от 100 000₽', text: 'Investment in Health-marketplace in Indonesia', userImg: imgs.python.user, cardImg: imgs.fourCard.description},
            {id: 5, name: 'Акимов Александр', nick: '@akimov ', price: 'от 100 000₽', text: 'Я разработаю UI UX дизайн для мобильного приложения и веб-сайта с помощью Figma ', userImg: imgs.python.user, cardImg: imgs.fiveCard.description},
            {id: 6, name: 'Марковин Андрей', nick: '@frontend ', price: 'от 100 000₽', text: 'Я создам адаптивный дизайн сайта с использованием HTML CSS JS Bootstrap ', userImg: imgs.python.user, cardImg: imgs.sixCard.description},
            {id: 7, name: 'Яна Яковлева', nick: '@yana ', price: 'от 100 000₽', text: 'Я найду вам backend разработчика за 72 часа', userImg: imgs.python.user, cardImg: imgs.sevenCard.description},
            {id: 8, name: 'SAVVAS', nick: '@savvas', price: 'от 100 000₽', text: 'Я капитализирую ваши инвестиции в Classified и HRTech', userImg: imgs.python.user, cardImg: imgs.eightCard.description},
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
            },
            {
                id: 3, 
                title: 'Станьте бизнес партнером SAVVAS', 
                price: 'от 100000',
                description: 
                    `Саввас — это доска объявлений для поиска клиентов и работы без резюме. В отличии от конкурентов, мы помогаем предпринимателям малого и среднего бизнеса увеличить аудиторию и продажи, масштабировать команду, выйти в онлайн, продавать в других регионах и снизить издержки на продажи.
                    Миссия — делаем людей и компании успешней, реализуя человеческий капитал.  
                    Наша аудитория — 26,2 млн. пользователей, из которых 5,8 млн. субъекты малого и среднего предпринимательства (МСП), 5,4 млн. самозанятые и 15 млн. специалисты с цифровыми навыками. `,
                tags:     
                    `Индустрия: Классифайд
                    Модель: E-com
                    Клиенты: B2B2C
                    Локация: РФ и СНГ
                    Рынок: $2,4 млрд
                    Оценка: ₽ 40 млн.
                    Минимальный чек: ₽ 1 млн. 
                    Раунд: Seed, MVP
                    Ссылка: www.savvas.ru 
                    
                    Хотите инвестировать? Напишите нам на почту all@savvas.ru или tg @saveers.
                    `,
                user: {
                    name: 'SAVVAS',
                    nick: '@savvas ',
                    img: imgs.python.user
                },
                img: imgs.savvas.description,
            },
            {
                id: 4, 
                title: 'Investment in Health-marketplace in Indonesia', 
                price: 'от 100000',
                description: 
                    `Health.id — marketplace for health products and services in Indonesia.
                    Indonesia's healthcare market is the fastest growing in the world, estimated at $15.6 billion.`,
                tags:     
                    `At the moment, we are at the Pre-seed stage and have become residents of the Udayana Bali medical 
                     cluster on the territory of the National University. We see a large window of opportunity for this
                     business and would like to engage you as a business partner.`,
                user: {
                    name: 'Health',
                    nick: '@Health',
                    img: imgs.python.user
                },
                img: imgs.fourCard.description,
            },
            {
                id: 5, 
                title: 'Я разработаю UI UX дизайн для мобильного приложения и веб-сайта с помощью Figma ', 
                price: 'от 100000',
                description: 
                    `Привет!

                    Я UI/UX дизайнер с опытом работы в этой сфере более 4 лет.
                    
                    Я работаю дизайнером UI/UX в компании по разработке программного обеспечения с отличными отзывами клиентов и уже реализованными более чем 100 проектами!
                    
                    Работать со мной будет просто и я позабочусь о том, чтобы ваше воображение воплотилось в жизнь :)  `,
                tags:     
                    ` `,
                user: {
                    name: 'Акимов Александр',
                    nick: '@akimov ',
                    img: imgs.python.user
                },
                img: imgs.fiveCard.description,
            },
            {
                id: 6, 
                title: 'Я создам адаптивный дизайн сайта с использованием HTML CSS JS Bootstrap ', 
                price: 'от 100000',
                description: 
                    `Всем привет! Я фронтенд разработчик,
                     Вы ищете профессиональный, современный и адаптивный дизайн веб -сайта с использованием Html,
                     CSS, js, jQuery, sass, Bootstrap, или вам понравился какой-либо индивидуальный дизайн или веб-сайт,
                     и вы хотите получить точно такой же? Я здесь, чтобы помочь Вам!
                     Мои услуги: 
                    ⦁	Создание HTML CSS JS Bootstrap 
                    ⦁	Java-скрипт анимации
                    ⦁	Полная адаптация к мобильным устройствам и планшетам
                    ⦁	Загрузка сервера (в этом случае требуется хостинг и домен)
                    ⦁	Круглосуточная онлайн-поддержка
                    ⦁	Редизайн html или css загрузочной веб-страницы
                    ⦁	Чистый код
                    ⦁	Figma Design To html css bootstarp 
                    ⦁	Исправление ошибок интерфейса
                    ⦁	Совместимость со всеми современными браузерами `,
                tags:     
                    ` `,
                user: {
                    name: 'Марковин Андрей',
                    nick: '@frontend ',
                    img: imgs.sixCard.user
                },
                img: imgs.sixCard.description,
            },
            {
                id: 7, 
                title: 'Я выполню ваши задачи по разработке на Python', 
                price: 'от 100000',
                description: 
                    `Ранний этап рекрутинга может занять очень много времени и, честно говоря, быть утомительным! Я здесь, чтобы избавить вас от стресса. Благодаря своему уникальному опыту, знаниям и обширным ресурсам я могу помочь вам связаться с наиболее выдающимися кандидатами, которые соответствуют вашим требованиям, гибким и удобным способом. У меня есть большой пул пассивных и активных кандидатов, ищущих новые возможности.

                    УСЛУГА ВКЛЮЧАЕТ:
                    
                    ⦁	Полная консультация - до 1 часа.
                    ⦁	Письменное описание вакансии/объявление
                    ⦁	Платная реклама вашей вакансии
                    ⦁	Просмотрите все входящие резюме и выберите лучшее
                    ⦁	Проведите первоначальное телефонное/зум-собеседование со всеми кандидатами, включенными в окончательный список.
                    
                    Я предоставлю вам информацию о кандидатах, резюме и сопроводительные письма
                    
                    ⦁	Проверка рекомендаций успешного кандидата – дополнительная опция
                    ⦁	Проконсультируюсь с вами и кандидатом, чтобы согласовать заработную плату / льготы и т.д. - дополнительно
                    
                    Работа с кадровыми агентствами может быть очень дорогостоящей; мое индивидуальное предложение поможет вам сэкономить время, деньги и усилия, предоставив вам выбор лучших талантов.
                    `,
                tags:     
                    ``,
                user: {
                    name: 'Яна Яковлева',
                    nick: '@yana',
                    img: imgs.python.user
                },
                img: imgs.sevenCard.description,
            },
            {
                id: 8, 
                title: 'Я капитализирую ваши инвестиции в Classified и HRTech', 
                price: 'от 100000',
                description: 
                    `Саввас — это доска объявлений для поиска клиентов и работы без резюме. В отличии от конкурентов, мы помогаем предпринимателям малого и среднего бизнеса увеличить аудиторию и продажи, масштабировать команду, выйти в онлайн, продавать в других регионах и снизить издержки на продажи.

                    Миссия — делаем людей и компании успешней, реализуя человеческий капитал.
                    
                    Наша аудитория — 26,2 млн. пользователей, из которых 5,8 млн. субъекты малого и среднего предпринимательства (МСП), 5,4 млн. самозанятые и 15 млн. специалисты с цифровыми навыками. 
                    `,
                tags:     
                    `Индустрия: Классифайд
                    Модель: E-com
                    Клиенты: B2B2C
                    Локация: РФ и СНГ
                    Рынок: $2,4 млрд
                    Оценка: ₽ 40 млн.
                    Минимальный чек: ₽ 1 млн. 
                    Раунд: Seed, MVP
                    Ссылка: www.savvas.ru 
                    
                    Хотите инвестировать? Напишите мне all@savvas.ru или tg @saveers.
                    `,
                user: {
                    name: 'SAVVAS',
                    nick: '@savvas',
                    img: imgs.python.user
                },
                img: imgs.eightCard.description,
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