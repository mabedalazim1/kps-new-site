import{ useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const NavbarItem = ({ navItems, closeMenu }) => {
    const loction = useLocation().pathname

    return (
        <>
            { navItems.map((navItem, index) => (
                <li key={ index }
                    onClick={ () => {
                        closeMenu()
                    } }
                    className={navItem.link === `${loction}` ? "active" : null }
                >
                    <NavLink  to={navItem.link}>
                    {navItem.title}
                  </NavLink>
            </li>
            ))}
        </>
    )
}

export default NavbarItem;
