//import styles from './Header.module.css';
import { NavLink } from "react-router-dom";
//import { RiArrowDownSLine } from "react-icons/ri";
export const Nav = ({navlist}) =>{ 
    return(
        <> 
        {
            navlist.map((navitem) =>{ 
              return <li className={`nav-item ${navitem.Children ? 'dropdown' : ''}`} key={navitem.id} data-bs-dismiss="offcanvas" aria-label="Close">
                        <NavLink 
                            className={`nav-link ${ navitem.navItem === '#' ? 'active' : ''}`}  
                            to={navitem.navLink}> 

                            {navitem.navItem} 
                            
                        </NavLink>  
                     </li> 
            })
        }
        </>
    )
}