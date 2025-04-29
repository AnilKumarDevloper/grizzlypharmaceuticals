import logo from  "../../../assets/logos/logo.jpeg";
import gizzlyLogo from "../../../assets/logos/Grizzly.png"
import styles from './Header.module.css'

import { HiOutlineMenuAlt3 } from "react-icons/hi"; 
import { Nav } from "./Nav";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

export const Header = () =>{

    const navlist = [
        {  id: 'nav1', navItem: 'Home', navLink: '/'},
        {  id: 'nav2', navItem: 'About', navLink: '/about'}, 
        {  id: 'nav3', navItem: 'Orals', navLink: '/oral'},
        {  id: 'nav4', navItem: 'Injectables', navLink: '/product'},
        {  id: 'nav5', navItem: 'Peptides', navLink: '/pepatize'}, 
        {  id: 'nav6', navItem: 'Contact Us', navLink: '/contact'}, 
    ]

    return(
        <header>
            <div className={styles.subtopHeader}>
                <div className="container d-flex justify-content-between align-items-center">
                    <din className="d-flex align-items-center">
                        {/* <NavLink to="tel:"><IoCallOutline/> <span>000-000-000</span></NavLink> */}
                        <NavLink to="mailto:contact@grizzlypharmaceuticals.com" ><AiOutlineMail/><span>contact@grizzlypharmaceuticals.com</span></NavLink>
                    </din> 
                </div>
            </div>
            <div className={styles.mainHeader}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg ">
                        <div className={`container-fluid ${styles.navFluid}`}>
                            <a className="navbar-brand" href="/"> 
                                <div className="d-flex flex-column align-items-center"> 
                                        <img 
                                            src={logo}
                                            className={styles.logo}
                                            alt="logo"
                                    ></img> 
                                    {/* <img
                                        src={gizzlyLogo}
                                        className={styles.gizzlyLogo}
                                    >
                                    </img> */}
                                </div>
                            </a>

                            <div className={`d-flex ${styles.toggleContainer}`}>
                                <button className="navbar-toggler p-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"> 
                                    <HiOutlineMenuAlt3 className={styles.menuIcon}/>
                                </button> 
                                <div className={`offcanvas offcanvas-end ${styles.offcanvasDiv}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                            <a className="navbar-brand" href="/"> 
                                                <div>
                                                {
                                                    //     <img 
                                                    //     src={logo}
                                                    //     className={styles.logo}
                                                    //     alt="logo"
                                                    // ></img>
                                                }
                                                    <img
                                                        src={gizzlyLogo}
                                                        className={styles.gizzlyLogo}
                                                    >
                                                    </img>
                                                </div>
                                            </a>
                                        </h5>
                                        <span type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                                <IoMdClose style={{color:'#fff', fontSize:'25px'}}/>
                                        </span> 
                                    </div>
                                    <div className="offcanvas-body">
                                    
                                        <ul className={`navbar-nav justify-content-center flex-grow-1 pe-3 ${styles.navbarLinks}`}>  
                                            <Nav navlist={navlist} />   
                                        </ul> 
                                        
                                    </div>
                                </div> 

                                <NavLink to='/productverification'  className={styles.verificationBtn}>Product Verification</NavLink>  
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
           

        </header>
    )
}