import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import LeftPart from '../LeftPart/LeftPart'

const Layout = () => {

    const state = useSelector(state => state.reducer.burger.state)

    return (
        <>
            <LeftPart/>
            <div className={state}>
                <Header/> 
                <Outlet/>
            </div>   
        </>
        
    )
}

export default Layout