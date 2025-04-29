
import common  from "../../../styles/Common.module.css"
import { useContext } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { ContentContext } from "../../../context/ContentContext";

export const OralProduct = ({settings}) =>{

    const {content} = useContext(ContentContext);
    const oral = content.productData.oralProducts;
    console.log(oral);

    return(
         <>
         <div className="slicky_slider mt-3">
                <Slider {...settings}>   
                {
                    oral.map((product) =>( 
                        <div className={common.productContainer}  key={product.id}>
                            <div className={common.productItem}> 
                                <NavLink to={`/productDetail/${product.id}`}>
                                    <div className={`${common.productImage}`}>
                                            <img src={product.imageUrl} alt="product"></img>
                                    </div>
                                    <h5 className={common.productTitle}>{product.titleText.slice(0, 25)}</h5>
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