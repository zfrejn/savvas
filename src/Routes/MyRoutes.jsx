import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import AuthorPage from '../components/Authorization/AuthorPage'
import CardList from '../components/CardList/CardList'
import CardOpen from '../components/CardOpen/CardOpen'
import Layout from '../components/Layout/Layout'
import RegPage from '../components/Registration/RegPage'

const MyRoutes = () => {

    const card = useSelector(state => state.reducer.currentCard)

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<CardList/>}/>
                <Route path='/card' 
                    element={<CardOpen 
                    price={card.price} 
                    title={card.title} 
                    desription={card.description} 
                    tags={card.tags} 
                    nick={card.user.nick} 
                    name={card.user.name}  
                    img={card.img}      
                    userImg={card.user.img}     
                    />}/>
                <Route path='/authorization' element={<AuthorPage/>}/>
                <Route path='/registration' element={<RegPage/>}/>
            </Route>
        </Routes>
    )
}

export default MyRoutes