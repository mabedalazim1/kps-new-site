import { Outlet } from 'react-router-dom'
import NavBar from "../../../components/navBar/NavBar"
import React, { useEffect } from 'react'

const Index = () => {
    useEffect(() => {
        document.title = process.env.REACT_APP_PAGE_TITLE
    })
    return (
        <>
            <NavBar />
            <Outlet />
            
        </>
    );
}

export default Index;
