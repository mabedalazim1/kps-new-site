import './sidebar.css'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

import { useState } from 'react'
import Itemelist from '../sidebarList/Itemelist'

const Sidebar = ({ handleClick }) => {
    const [isActiveList, setIsActiveList] = useState(0)
  const [isClicked, setIsClicked] = useState(0)
  
    const handleActiveList=(index) => {
      setIsActiveList(index)
      setIsClicked(index)     
    }
  const listTitel = [
   { title: "احصائيات",link:"home"},
    { title: "الأقسام", link: "sections" },
    { title: "الموضوعات", link: "categories" },
    { title: " الصور", link: "imagedata" },
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
                </div>
         
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
