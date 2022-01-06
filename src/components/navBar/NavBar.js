import React, { useState } from 'react'
import  NavbarItem  from './NavIbarItem'
import { NavLink } from 'react-router-dom'
import closeSymbol from './../../assest/svg/close.svg'
import menuSymbol from './../../assest/svg/menu.svg'
import './navBar.css'

const NavBar = () => {
  const [click, setClick] = useState(false)
  const[navBar, setNavBar] =useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)
  const navItems = [
    {title:"الرئيسية",link:"/"},
    {title:"المنصة",link:"/manasa"},
    {title:"رؤيتنا",link:"/roiaa"},
    {title:" أخر الأخبار",link:"/contactus"},
  ]
  const changNavBar = () => {
    if (window.scrollY >= 500) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll',changNavBar )
  return (
    <>
      <div className='header'>
        <div className='slider-con'>
        <img src='assets/images/logo.png' alt='logo' className='logo' />
          
        </div>
        <div className='banner'>
          <div className={navBar ?'title active':'title'}>Al Kwther Private School</div>
          <div className='navbar'>
            <div className='logo-con'>
              <img src='assets/images/logo-b.png' alt='logo'
                className={ navBar ? 'logo-b active':'logo-b'} />
            </div>
            <ul className={click ? 'nav-con' : navBar ?  'nav-con active close' : 'nav-con close'}>
              <div className='login-con'>
                <li>
                  <NavLink to='/login'>
                    تسجيل الدخول
                  </NavLink>
                </li>
              </div>
              <div className='links-con'>
                <NavbarItem
                  navItems={ navItems }
                  closeMenu={closeMenu}
                />
              </div>
            </ul>
          </div>
          <hr className='hr' />
          <div className='mobile-menu' onClick={handleClick}>
            {click ? (
              <img alt='' src={closeSymbol} />
            ) : (
              <img alt='' src={menuSymbol} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
