import './sidebar.css'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

import React, { useState } from 'react'
import Itemelist from '../sidebarList/Itemelist'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../../actions/auth'

const Sidebar = ({ handleClick }) => {
    const [isActiveList, setIsActiveList] = useState(0)
  const [isClicked, setIsClicked] = useState(0)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }
  
    const handleActiveList=(index) => {
      setIsActiveList(index)
      setIsClicked(index)     
    }
  const listTitel = [
   { title: "احصائيات",link:"home"},
    { title: "الأقسام", link: "sections" },
    { title: "الموضوعات", link: "categories" },
    { title: " الصور", link: "imagedata" },
    { title: "الرئسية", link: "/" },
  ]
  return (
      <aside className='sidebar'>
      <div className='sidebar-wrapper'>
        <div className='sidebar-menu'>
          <div className='menu-title'>
            <MdOutlineAdminPanelSettings color='blue' size={20} />
            <p>لوحة التحكم </p>
          </div>
          <div className='list'>
            <Itemelist
              handleActiveList={ handleActiveList }
              isActiveList={ isActiveList }
              itemsList={ listTitel }
              isClicked={ isClicked }
              handleClick={handleClick}
            />
            <li
              className='list-item'
              onClick={ handleLogout }>
              <NavLink to='/'>
                خروج
              </NavLink>

            </li>
                </div>
         
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
