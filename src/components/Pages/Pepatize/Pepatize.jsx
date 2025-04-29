import { Breadcrumbs } from "../breadcrumb/Breadcrumbs";
import { GiHealing } from "react-icons/gi";
import common from "../../../styles/Common.module.css";
export const Pepatize = () =>{
    return(
        <>
            <section>
                <Breadcrumbs/>
            </section>

             <section className="pt-5 mb-5">
                <div className="container">
                    <div className="sectionHeadting p-3">
                        <p className={`text-center m-0 ${common.infoElement}`}>WHY CHOSE US?</p>
                        <h1 className={`text-center ${common.sectionheading}`} > Core Values</h1> 
                        <p className={`text-center ${common.detailText}`}> 
                              At German Peptides, we’re passionate about empowering individuals to achieve their 
                              fitness goals. Our mission is to deliver innovative, <br></br> high-quality supplements
                              that fuel your journey to a stronger, healthier you.
                        </p>
                    </div> 

                    <div className="row">
                        <div className={`col-md-3 p-3  ${common.aboutCards}`}>
                            <div className={common.choosUs}>
                                <span><GiHealing/></span>
                            </div>
                            <h4>Modern equipment</h4>
                            <p className={`text-center ${common.detailText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                        </div>
                        <div className={`col-md-3 p-3 ${common.aboutCards}`}>
                            <div className={common.choosUs}>
                                <span><GiHealing/></span>
                            </div>
                            <h4>Modern equipment</h4>
                            <p className={`text-center ${common.detailText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                        </div>
                        <div className={`col-md-3 p-3 ${common.aboutCards}`}>
                            <div className={common.choosUs}>
                                <span><GiHealing/></span>
                            </div>
                            <h4>Modern equipment</h4>
                            <p className={`text-center ${common.detailText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                        </div>
                        <div className={`col-md-3 p-3 ${common.aboutCards}`}>
                            <div className={common.choosUs}>
                                <span><GiHealing/></span>
                            </div>
                            <h4>Modern equipment</h4>
                            <p className={`text-center ${common.detailText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                        </div>
                    </div> 

                </div>
            </section> 
        
        </>
    )
}