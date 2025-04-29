import { AboutSection } from "./AboutSection";
import { HomeProduct } from "./HomeProduct";
import common from "../../../styles/Common.module.css";
import { NavLink } from "react-router-dom";
// import { FaLongArrowAltRight } from "react-icons/fa";

//import productImg from "../../../assets/images/product.png"

import { FaArrowRight } from "react-icons/fa"; 
import slider1 from "/src/assets/images/sliders/slider1.jpg"
import slider2 from "/src/assets/images/sliders/slider2.jpg"
import slider3 from "/src/assets/images/sliders/slider3.jpg"

export const Home = () =>{ 
 
    return(
       <>
        <section > 
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Superdrol + M1T 35 mg/50 Capsules"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Turinabol 25 mg/50 Capsules"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Megadrol 100mg/35 Capsules"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100" alt="Superdrol + M1T 35 mg/50 Capsules"></img>
                </div>
                <div className="carousel-item">
                    <img src={slider2} className="d-block w-100" alt="Turinabol 25 mg/50 Capsules"></img>
                </div> 
                <div className="carousel-item">
                    <img src={slider3} className="d-block w-100" alt="Megadrol 100mg/35 Capsules"></img>
                </div> 
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </section>
       
        <AboutSection/> 

        <section>
                <div className={common.bannerContact}>
                    <div className="container pt-lg-5 pb-5" style={{maxWidth:'900px'}}>
                         <div className={common.infoUS}> 
                                <h1 className={` ${common.sectionheading}`} > 
                                    Pioneering Solutions
                                </h1> 
                                <p className={common.detailText}>
                                    With offices based regionally throughout
                                    Europe, we at grizzly Pharmaceuticals <br></br>are committed to ensuring
                                </p>
                                 <div className={common.buttonUs}>
                                     <NavLink to="/about" className={common.contactbtn}>
                                        About Us
                                    </NavLink> 
                                 </div>
                         </div>
                    </div>
                </div>
        </section>
 
        <HomeProduct/>
       </>
       
    )
}