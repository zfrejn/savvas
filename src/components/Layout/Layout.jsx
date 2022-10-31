import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import LeftPart from '../LeftPart/LeftPart'

const Layout = () => {
    return (
        <>
            <Header/> 
            <LeftPart/>
            <Outlet/>
        </> 
    )
}

export default Layout