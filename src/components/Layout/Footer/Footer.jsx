import styles from "./Footer.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../../../assets/logos/logo.jpeg";
import grizzlylogo from "../../../assets/logos/Grizzly.png";  
import { FooterLinks } from "./FooterLinks";

import { FaFacebookF } from "react-icons/fa";
import { FiTwitter, FiInstagram, FiYoutube   } from "react-icons/fi";
import { NavLink } from "react-router-dom";
 

export const Footer = () =>{
    return(

        <footer className="pt-5" style={{background:'black'}}>
            <div className="container">
                <div className="row">   
                    <div className="col-md-3 col-12 ">
                        <div className={styles.paddingFooter}>
                            <div className={`footerLogo d-flex flex-column mb-3`} >
                                    {/* <img src={logo} alt="footer logo" className={styles.footerlogo}></img> */}
                                    <img src={grizzlylogo} alt="footer logo" className={styles.footerlgrizzlylogo} width="100%"></img>
                            </div>
                            {/* <p style={{fontSize:'13px'}}>
                                Grizzly Pharmaceuticals — частная компания, основанная на исследованиях,
                                биофармацевтическая и биотехнологическая компания, занимающаяся
                                разработкой, производством и маркетингом продуктов для улучшения образа жизни
                                и омоложения.
                            </p>  */}
                        </div>
                    </div>  
                    <FooterLinks/> 

                    <div className="col-md-3 col-12 ">
                         <div className={styles.fixdWidth}>
                            <h2 className={`mb-0 ${styles.linkHeading}`}> Contact Us</h2>
                         </div>
                        <ul className="p-0 mt-3">
                            <li className="d-flex gap-2 mb-2">
                                <div><CiLocationOn className={styles.contactsIcons}/></div>
                                <span className={styles.footerAdd}>
                                    Skladochnaya ulitsa, d. 1, str. 18, pod"yezd 12, etazh 1, Territoriya Biznes-parka
                                    STANKOLIT, Moskva, Rossiya, 127018                                
                                </span>
                            </li> 
                            <li className="d-flex gap-2 mb-2">
                                <div><AiOutlineMail className={styles.contactsIcons}/></div>
                                <span className={styles.footerAdd}>contact@grizzlypharmaceuticals.com</span>
                            </li>
                        </ul>
                    </div>   
                </div>
                <hr></hr>
                <p style={{padding:'0px 15px'}}> © 2025 Grizzlypharmaceuticals. All rights reserved.</p>
            </div>
        </footer>
        
    )
}