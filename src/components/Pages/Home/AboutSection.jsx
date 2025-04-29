
import aboutProduct from "/src/assets/images/about-product copy.png";
import common from "../../../styles/Common.module.css";
import { NavLink } from "react-router-dom"

 
 
export const AboutSection = () =>{
    return(
        <> 
            <section className="allSection" style={{background:'#3a3a3a40'}}>
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
                                        управления ВИЧ.<br></br> <br/> Мы используем различные технологии доставки лекарств,
                                        включая контролируемое высвобождение, трансдермальные, пероральные и
                                        инъекционные системы доставки. Бренд Grizzly Pharmaceuticals на протяжении
                                        многих лет пользуется растущим присутствием в азиатском регионе, следуя
                                        многоуровневой стратегии роста и стратегическим альянсам с надежными
                                        партнерами. Имея региональные офисы по всей Северной Европе, мы в Grizzly
                                        Pharmaceuticals стремимся гарантировать, что мы поставляем ценность и качество
                                        продуктов, которые ожидают наши пациенты и клиенты. Мы сосредоточены на
                                        постоянном совершенствовании способов ведения бизнеса.
                                    </p>   
                                    <div className="mt-4">
                                        <NavLink to="/about" className={common.contactbtn}>
                                          About Us
                                        </NavLink>
                                    </div>

                                </div>
                        </div>
                    </div>
                </div> 
                
            </section> 
        </>
    )
}