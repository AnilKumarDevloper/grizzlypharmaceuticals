import { NavLink } from "react-router-dom";
import common  from "../../../styles/Common.module.css"
import { useContext } from "react";
import { ContentContext } from "../../../context/ContentContext";

import Slider from "react-slick";

const InjectableProduct = ({settings}) =>{

    const {content} = useContext(ContentContext); 
    const injectable = content.productData.injectableProducts;

  


    return(
        <>
           <div className="slicky_slider mt-3">
              <Slider {...settings}>   
                {
                    injectable.map((product) =>( 
                        <div className={common.productContainer} key={product.id}>
                            <div className={common.productItem}> 
                                <NavLink to={`/productDetail/${product.id}`}>
                                    <div className={`${common.productImage}`}>
                                            <img src={product.imageUrl} alt="product"></img>
                                    </div>
                                    <h5 className={common.productTitle}>{product.name}</h5>
                                </NavLink>
                            </div>
                        </div>
                    ))
                }
               </Slider>
            </div>
        
        </>
    )
}

export default InjectableProduct;