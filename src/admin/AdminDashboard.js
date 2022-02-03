import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
import './adminDashboard.css'
import closeSymbol from '../assest/svg/close.svg'
import menuSymbol from '../assest/svg/menu.svg'
import Topbar from "./components/topbar/Topbar";
import { Outlet } from 'react-router-dom'
import useWindowSize from './../hooks/useWindowSize'
const   AdminDashboard = () => {
    const { width } = useWindowSize() 
    const [click, setClick] = useState(true)
    const handleClick = () => {
        setClick(!click)
    }

    return (
        <main className="admin-dashboard">
            <div className="topbar">
                <div className={ width >768 ?'mobile-menu': "mobile-menu active"}
                    onClick={ handleClick }>
            {!click ? (
                <img className="closeSymbol"alt='' src={closeSymbol} />
            ) : (
                <img alt='' src={menuSymbol} />
            )}
          </div>
                <Topbar />
            </div>
            <div className={width > 768 ?"admin-board":"admin-board close-mnue"}>
            <div className={width > 768 ?"main-contant":"main-contant close-mnue"}>
              <Outlet />
            </div>
            <div className={width > 768  ?"sidebar": click ?"sidebar close-mnue":"sidebar close-mnue active"}>
                    <Sidebar
                        handleClick={ handleClick }
                    />
                </div>
            </div>
        </main>
    );
}

export default AdminDashboard;
