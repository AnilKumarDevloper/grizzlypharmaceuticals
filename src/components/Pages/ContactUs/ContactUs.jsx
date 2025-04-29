
import { Breadcrumbs } from "../breadcrumb/Breadcrumbs";
import { ContactForm } from "./ContactForm";
import common from "../../../styles/Common.module.css";
import styles from "./Contact.module.css";

import { CiLocationOn, CiPhone  } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";  
import { NavLink } from "react-router-dom";
 
export const ContactUs = () =>{
    return( 
        <>
            <section>
                 <Breadcrumbs/>
           </section>

           <section className="pt-5 pb-5">
                <div className="container" 
                    style={{maxWidth:'1100px'}}>
                     <div className="sectionHeadting p-3"> 
                            <h1 className={`text-center ${common.sectionheading}`} >Contact</h1> 
                            <p className={`text-center ${common.detailText}`}> 
                                At German Peptides, we’re passionate about empowering
                            </p>
                    </div> 
                    <div className="row"  style={{border:'1px solid #6f6f6f', padding:'30px', borderRadius:'10px'}}>
                        <div className="col-md-6">
                            <div className=""> 
                                  <h1 className={`${common.sectionheading}`} >
                                  Get in touch!</h1> 
                                  <p className={` ${common.detailText}`}> 
                                      Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                 </p>
                                 <ul className={styles.contact}>
                                        <li>
                                            <div><CiLocationOn/></div>
                                            <span>Skladochnaya ulitsa, d. 1, str. 18, pod"yezd 12, etazh 1, Territoriya Biznes-parka
                                                 STANKOLIT, Moskva, Rossiya, 127018
                                            </span>
                                        </li> 
                                        <li>
                                            <div><AiOutlineMail /></div>
                                            <span>
                                                <NavLink to="mailto:contact@grizzlypharmaceuticals.com">contact@grizzlypharmaceuticals.com</NavLink>
                                            </span>
                                        </li>
                                 </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
           </section>
        </>
       
    )
}