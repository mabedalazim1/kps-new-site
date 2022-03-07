import React, { useState ,useEffect} from 'react'
import  NavbarItem  from './NavIbarItem'
import { NavLink } from 'react-router-dom'
import closeSymbol from './../../assest/svg/close.svg'
import menuSymbol from './../../assest/svg/menu.svg'
import { logout } from "./../../actions/auth";
import { useDispatch, useSelector } from "react-redux"
import useScroll from './../../hooks/useScroll'
import './navBar.css'

const NavBar = () => {

  const { user: currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const scroll = useScroll()

  const [click, setClick] = useState(false)
  const [navBar, setNavBar] = useState(false)
  
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)
  
  const navItems = [
    {title:"الرئيسية",link:"/"},
    { title: "المنصة", link: "/manasa" },
    { title: "عن المدرسة", link: "/about" },
    {title:"رؤيتنا",link:"/roiaa"},
    { title: " أخر الأخبار", link: "/activity" },
  ]
  const changNavBar = () => {
    if (scroll >= 500) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }
  useEffect(() => {
    changNavBar()
  })

  
  const handelLogout = () => {
    dispatch(logout())
  }

  

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
            <ul className={ click ? 'nav-con' : navBar ? 'nav-con active close-nav' : 'nav-con close-nav' }>
             
              <div className='login-con'>

              { currentUser ? (
                  <li onClick={ () => {
                    handelLogout()
                    handleClick()
                  } }>
                 <NavLink to='/'>
                     خروج
                    {currentUser.username}
                 </NavLink>
                 </li>
              ) : (
                <li>
                <NavLink to='/login'>
                  تسجيل الدخول
                </NavLink>
                </li>
              ) }
                
               
              </div>
              <div className='links-con'>
                <NavbarItem
                  navItems={ navItems }
                  closeMenu={ closeMenu }
                />
              </div>
            </ul>
          </div>
          <hr className='nav-hr' />
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
