import Sidebar from "./components/sidebar/Sidebar";
import React, { useState } from "react";
import './adminDashboard.css'
import closeSymbol from '../assest/svg/close.svg'
import menuSymbol from '../assest/svg/menu.svg'
import Topbar from "./components/topbar/Topbar";
import { Outlet } from 'react-router-dom'
import useWindowSize from './../hooks/useWindowSize'
import Footer from "./components/footer/Footer";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import AccessDenied from "../components/accessDenied/AccessDenied";

const AdminDashboard = () => {
    const { width } = useWindowSize()
    const [click, setClick] = useState(true)
    const handleClick = () => {
        setClick(!click)
        localStorage.removeItem("catId")
    }
    const { user } = useSelector(state => state.auth)
    const pathname =window.location.pathname

    return (
        <>
            { !user ? <Navigate to="/login" /> :
                user.roles[0] === "ROLE_ADMIN" ? 
                <main className="admin-dashboard">
                <div className="topbar">
                    <div className={ width > 768 ? 'mobile-menu' : "mobile-menu active" }
                        onClick={ handleClick }>
                        { !click ? (
                            <img className="closeSymbol" alt='' src={ closeSymbol } />
                        ) : (
                            <img alt='' src={ menuSymbol } />
                        ) }
                    </div>
                    <Topbar />
                </div>
                <div className={ width > 768 ? "admin-board" : "admin-board close-mnue" }>
                    <div className={ width > 768 ? "main-contant" : "main-contant close-mnue" }>
                        <Outlet />
                        <div className={ pathname === "/admin/" || pathname === "/admin" ? "kps-data" :"kps-data hide-me"}>
                            KPS Admin Panel
                        </div>
                    </div>
                    <div className={ width > 768 ? "sidebar" : click ? "sidebar close-mnue" : "sidebar close-mnue active" }>
                        <Sidebar
                            handleClick={ handleClick }
                        />
                    </div>
                </div> <Footer />

            </main>
                    :
                   <AccessDenied />
                
            }
        </>

    );
}

export default AdminDashboard;
