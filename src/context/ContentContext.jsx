//import axios from "axios";
import {createContext } from "react";

import { productData, aboutData, homeData } from "../data/Data";

export const ContentContext = createContext();

const ContentProvider = ({children}) =>{  

    const content = {
        productData,
        aboutData,
        homeData
    };


    return(
        <ContentContext.Provider value={{content}}>
                {children}
        </ContentContext.Provider>
    )
}
 export default ContentProvider;