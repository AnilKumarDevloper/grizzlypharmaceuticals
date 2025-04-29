
import { NavLink } from "react-router-dom";
import common from "../../../styles/Common.module.css";
import { Breadcrumbs } from "../breadcrumb/Breadcrumbs";
import { useContext } from "react";
import { ContentContext } from "../../../context/ContentContext";

export const Product = () =>{

    const {content} = useContext(ContentContext); 
    const injectable = content.productData.injectableProducts;

    return(
        <>
            <section>
                <Breadcrumbs/>
            </section>

            <section className="pt-5 pb-5">
                    <div className="container">
                            <div className="sectionHeadting p-3"> 

                                <h1 className={`text-center ${common.sectionheading}`} >  </h1> 
                                <p className={`text-center ${common.detailText}`}> 
                                        At German Peptides, we’re passionate about empowering individuals to achieve their 
                                        <br></br>fitness goals. Our mission is to deliver innovative.
                                </p>
                            </div> 

                            <div className="row"> 
                                
                            {
                                injectable.map((product) =>(
                                    <div className="col-md-3 mt-4"> 
                                        <NavLink to={`/productDetail/${product.id}`}>
                                            <div className={`h-100 ${common.product}`}>
                                                <div className={common.productDi}>
                                                    <img 
                                                       src={product.imageUrl}
                                                       className={common.productImg}
                                                    ></img>
                                                </div>
                                                    <h4 className={common.productTitle}> {product.name}</h4> 
                                                    <p className={`text-center mb-0 mt-2 ${common.detailText}`}>{`${product.titleText}...`}</p>
                                            </div>
                                        </NavLink> 
                                   </div> 
                                ))
                            }   
                            </div>

                    </div>
            </section>
        </>
    )
}