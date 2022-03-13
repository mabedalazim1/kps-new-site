import{ useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import React from 'react'

const Itemelist = ({ itemsList, handleActiveList, handleClick }) => {
   const loctionIndex = useLocation().pathname.split("/").length-1
   const title =  useLocation().pathname.split("/")[loctionIndex]

    return (
        <>
        { itemsList.map((itemText,index) => (
              <li
                 key={ index }
                    name={ itemText.title }
                
                    className={itemText.link === title ?"list-item active" : "list-item"}
           >
              <NavLink
                 onClick={ () => {
                    handleActiveList(index)
                    handleClick()
               } }
                 to={ itemText.link }
              >{ itemText.title }</NavLink>
               </li>

                
        
        )) }
         
        </>
    );
}

export default Itemelist;
