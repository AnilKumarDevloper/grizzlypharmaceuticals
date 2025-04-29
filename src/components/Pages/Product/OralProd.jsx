 
import { NavLink } from "react-router-dom";
import common from "../../../styles/Common.module.css";
import { Breadcrumbs } from "../breadcrumb/Breadcrumbs";
import { useContext } from "react";
import { ContentContext } from "../../../context/ContentContext";
export const OralProd = () => {
        const {content} = useContext(ContentContext);
     
        const oral = content.productData.oralProducts;
    return(
        <>
            <section>
                <Breadcrumbs/>
           </section> 

            <section className="pt-5 pb-5">
                    <div className="container">
                            <div className="sectionHeadting p-3"> 
                                <h1 className={`text-center ${common.sectionheading}`} > Oral</h1>  
                            </div> 

                            <div className="row">  
                            {
                                oral.map((product) =>(
                                    <div className="col-md-3 mt-4"> 
                                        <NavLink to={`/productDetail/${product.id}`}>
                                            <div className={`h-100 ${common.product}`}>
                                                <div className={common.productDi}> 
                                                    <img 
                                                    src={product.imageUrl}
                                                    className={common.productImg}
                                                    ></img>
                                                </div>
                                                    <h4 className={common.productTitle}> {product.titleText}</h4> 
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