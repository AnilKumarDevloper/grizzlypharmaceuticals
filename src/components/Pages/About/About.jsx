
import { NavLink } from "react-router-dom";
import {Helmet} from "react-helmet";
import common from "../../../styles/Common.module.css";
import { Breadcrumbs } from "../breadcrumb/Breadcrumbs";

import { GiHealing } from "react-icons/gi";
import aboutProduct from "../../../assets/images/about-product copy.png"
export const About = () =>{
    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My about</title> 
            </Helmet>

            <section>
                <Breadcrumbs/>
            </section>

            { 
 
            // <section className="pt-5 mb-5">
            //     <div className="container">
            //         <div className="sectionHeadting p-3">
            //             <p className={`text-center m-0 ${common.infoElement}`}>WHY CHOSE US?</p>
            //             <h1 className={`text-center ${common.sectionheading}`} > Core Values</h1> 
            //             <p className={`text-center ${common.detailText}`}> 
            //                   At German Peptides, we’re passionate about empowering individuals to achieve their 
            //                   fitness goals. Our mission is to deliver innovative, <br></br> high-quality supplements
            //                   that fuel your journey to a stronger, healthier you.
            //             </p>
            //         </div> 

            //         <div className="row">
            //             <div className={`col-md-3 p-3  ${common.aboutCards}`}>
            //                 <div className={common.choosUs}>
            //                     <span><GiHealing/></span>
            //                 </div>
            //                 <h4>Modern equipment</h4>
            //                 <p className={`text-center ${common.detailText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            //             </div>
            //             <div className={`col-md-3 p-3 ${common.aboutCards}`}>
            //                 <div className={common.choosUs}>
            //                     <span><GiHealing/></span>
            //                 </div>
            //                 <h4>Modern equipment</h4>
            //                 <p className={`text-center ${common.detailText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            //             </div>
            //             <div className={`col-md-3 p-3 ${common.aboutCards}`}>
            //                 <div className={common.choosUs}>
            //                     <span><GiHealing/></span>
            //                 </div>
            //                 <h4>Modern equipment</h4>
            //                 <p className={`text-center ${common.detailText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            //             </div>
            //             <div className={`col-md-3 p-3 ${common.aboutCards}`}>
            //                 <div className={common.choosUs}>
            //                     <span><GiHealing/></span>
            //                 </div>
            //                 <h4>Modern equipment</h4>
            //                 <p className={`text-center ${common.detailText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            //             </div>
            //         </div> 

            //     </div>
            // </section>  
            
        }

        <section className="allSection">
        <div className="container-fluid"> 
            <div className={`row ${common.aboutSection1}`}>
                <div className="col-md-5 d-flex justify-content-center p-0">
                    <img src={aboutProduct}
                    alt="product image" className={`w-100 ${common.aboutProd}`} style={{borderRadius:'20px'}}></img>
                </div>
                <div className="col-md-7 d-flex align-items-center">
                        <div className={common.aboutSection} >   
                            <h1 className={`${common.sectionheading}`} > 
                                  Pioneering Solutions for Rejuvenation and Health
                            </h1>   

                            <p className={common.detailText}>
                                    Grizzly Pharmaceuticals — частная компания, основанная на исследованиях,
                                    биофармацевтическая и биотехнологическая компания, занимающаяся
                                    разработкой, производством и маркетингом продуктов для улучшения образа жизни
                                    и омоложения. Портфолио Grizzly Pharmaceuticals также включает в себя обширную
                                    линейку продуктов, созданных для лечения бесплодия, гипогонадизма и
                                    управления ВИЧ.<br/><br/> Мы используем различные технологии доставки лекарств,
                                    включая контролируемое высвобождение, трансдермальные, пероральные и
                                    инъекционные системы доставки. Бренд Grizzly Pharmaceuticals на протяжении
                                    многих лет пользуется растущим присутствием в азиатском регионе, следуя
                                    многоуровневой стратегии роста и стратегическим альянсам с надежными
                                    партнерами. Имея региональные офисы по всей Северной Европе, мы в Grizzly
                                    Pharmaceuticals стремимся гарантировать, что мы поставляем ценность и качество
                                    продуктов, которые ожидают наши пациенты и клиенты. Мы сосредоточены на
                                    постоянном совершенствовании способов ведения бизнеса. 
                            </p>   

                        </div>
                </div>
            </div>
        </div>  
      </section> 

        </>
    )
}