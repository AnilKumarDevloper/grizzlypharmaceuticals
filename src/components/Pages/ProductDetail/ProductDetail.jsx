
import { Breadcrumbs } from "../breadcrumb/Breadcrumbs"
import styles from "./ProductDetail.module.css";
import common from "../../../styles/Common.module.css";
import { useContext } from "react";
import { ContentContext } from "../../../context/ContentContext";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';

export const ProductDetail = () =>{
const {content} = useContext(ContentContext);
const {id} = useParams();
const oral = content.productData.oralProducts
const injectable = content.productData.injectableProducts;

let productDetails = injectable.find(
    (element) => String(element.id) ===  String(id)
);

if(!productDetails){
  productDetails = oral.find(
      (element) => String(element.id) === String(id)
  )
}

const accordionFields = [
    { key: 'dosage', label: 'Dosage', parseHtml: true },
    { key: 'testosterone_nanthate', label: 'Testosterone Enanthate', parseHtml: true },
    { key: 'administration', label: 'Administration', parseHtml: true },
    { key: 'muscle_definition', label: 'Muscle Definition', parseHtml: true },
    { key: 'potential_side_effects', label: 'Potential Side Effects', parseHtml: false },
    { key: 'precautions', label:'Precautions', parseHtml: true},
    { key: 'quantity', label: 'Quantity', parseHtml: false },
    { key: 'packaging', label: 'Packaging', parseHtml: false },
    { key: 'source', label: 'Source', parseHtml: true },
    { key: 'dosage_instructions', label: 'DOSAGE & INSTRUCTIONS', parseHtml: true },
    { key: 'testosterone_enanthate2', label: 'Testosterone Enanthate', parseHtml: true },
    { key: 'post_cycle_therapy', label: 'Post Cycle Therapy (PCT)', parseHtml: false, wrapInDiv: true },
    { key: 'legal_disclaimer', label: 'Legal Disclaimer', parseHtml: false, wrapInDiv: true },
  ]; 

if(!content){
    return <p>Loading...</p>
}
if (!productDetails) {
    return <p className="text-center">Product not found...!</p>
}
    return(
        <>
            <section>
                <Breadcrumbs/>
            </section>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5  "> 
                            <div className={`${styles.productImgae}`}>
                             <img 
                                src={productDetails.imageUrl}
                                alt={productDetails.altText}
                                className="w-100"
                                style={{borderRadius:'15px'}}
                                ></img>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className={` ${common.aboutText} ${styles.textDetails}`}>
                                <h2>{productDetails.name}</h2> 

                                <h6>{productDetails.concentration}</h6>

                                <p className={`text-left mt-5 ${styles.product_detailText}`}> 
                                   {parse(productDetails.top_description || '')}
                                </p>      

                            </div>
                        </div>
                    </div>
                    <hr style={{margin:'2rem 0'}}></hr>


                    <div className={styles.discriptionsAll}> 
                        <div className="mb-3">  
                            <p className={`text-left ${styles.product_detailText}`}> 
                                {parse(productDetails.description || '')}
                            </p>  
                        </div>  
                        <div className={`accordion ${styles.accordions}`} id="accordionExample">  
                            {productDetails?.key_features &&( 
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                           {productDetails.key_features_heading}
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className={common.keyfeatures}> 
                                                <li>{parse(productDetails.key_features.boldenone_undecylenate)}</li>
                                                <li>{parse(productDetails.key_features.muscle_growth)}</li>
                                                <li>{parse(productDetails.key_features.enhanced_endurance)}</li>
                                                <li>{parse(productDetails.key_features.dosage)}</li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div> 
                            )} 
 
                            {productDetails?.user_guidelines && (
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-user-guidelines"
                                    aria-expanded="true"
                                    aria-controls="collapse-user-guidelines"
                                  >
                                    {productDetails.user_guidelines_heading}
                                  </button>
                                </h2>
                                <div
                                  id="collapse-user-guidelines"
                                  className="accordion-collapse collapse show"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <ol>
                                      {Object.entries(productDetails.user_guidelines).map(([key, label]) => (
                                        <li key={key}>
                                          {label}
                                        </li>
                                      ))}
                                    </ol>
                                  </div>
                                </div>
                              </div>
                            )}

 

                            {accordionFields.map(({ key, label, parseHtml, wrapInDiv }) => ( 
                              
                              productDetails?.[key] && (
                                <div className="accordion-item" key={key}>
                                  <h2 className="accordion-header">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target={`#collapse-${key}`}
                                      aria-expanded="false"
                                      aria-controls={`collapse-${key}`}
                                    >
                                      {label}
                                    </button>
                                  </h2>
                                  <div
                                    id={`collapse-${key}`}
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      {wrapInDiv ? (
                                        <div className={`mt-3 ${common.commonAll}`}>
                                          {/* <b className="text-white">{label}: </b> */}
                                          <p className={styles.product_detailText}>
                                            {parseHtml ? parse(String(productDetails[key] || '')) : productDetails[key]}
                                          </p>
                                        </div>
                                      ) : (
                                        <>
                                          {/* <b className="text-white">{label}: </b> */}
                                          {parseHtml ? parse(String(productDetails[key] || '')) : productDetails[key]}
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            ))}  
                            
                        </div>
                    
                    </div>

                </div>
            </section>
        </>
    )
}