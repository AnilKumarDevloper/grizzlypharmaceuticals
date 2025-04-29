

import React from "react";
import common from "../../../styles/Common.module.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import InjectableProduct from "./InjectableProduct";
import { OralProduct } from "./OralProduct";
import { Tabs } from 'antd';


const settings = {
    dots: false,
    Infinite: true,
    speed: 900,
    slidesToShow: 4,
    slideToScroll:1,
    controller:false,
    autoplay:false,
    autoplaySpeed: 4000,
    arrows: true,

    responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow:2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint:480,
            settings:{
                slidesToShow:1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
    ]
}

const products = [
    {
      key: '1',
      label: 'Injectables',
      children: <InjectableProduct settings={settings}/>,
    },
    {
      key: '2',
      label: 'Orals',
      children: <OralProduct settings={settings}/>,
    },
  
  ];

 
export const HomeProduct = () =>{

    return(
        <section className="pt-5 pb-5">
            <div className="container">
                <div className="sectionHeadting p-3">
                        <h1 className={`text-center ${common.sectionheading}`} >Products</h1> 
                </div>

                <div className="productTabs row"> 
                    <Tabs defaultActiveKey="1" items={products}  className="text-white"/>
                </div> 
              
            </div>
        </section>
    ) 
}