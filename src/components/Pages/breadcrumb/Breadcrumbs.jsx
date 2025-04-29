
import common from "../../../styles/Common.module.css";
import { IoHomeOutline } from "react-icons/io5";
 
import { RxSlash } from "react-icons/rx";

export const Breadcrumbs = () =>{
    return(
        <section>
            <div className={`d-flex justify-content-center align-items-center ${common.breadcrumbs}`}>
                 <div className="">  
                      {
                        // <ul className={common.breadCrumb}>
                        //     <li>
                        //         <span> <IoHomeOutline/>  </span>  
                        //     </li>
                        //     <li>
                        //          <RxSlash/>
                        //         <span> About</span> 
                        //     </li>  
                        // </ul>
                      } 

                 </div> 
            </div>
        </section>
    )
}