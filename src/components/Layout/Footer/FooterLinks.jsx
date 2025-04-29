import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

export const FooterLinks = () =>{
    
    const footerLink = [
        // {linkHeading: 'Quick Link',
        //     links:[
        //         {title:'Home', pageLink: '/'},
        //         {title:'About', pageLink: '/about'}, 
        //         {title:'Peptize', pageLink: '/'},
        //         {title:'Contact Us', pageLink: '/contact'},
        //         {title:'Product', pageLink: '/product'},
        //     ] 
        // },
        {linkHeading: 'Injectables',
            links:[
                {title:'Boldenone Undecylenate', pageLink: '/productDetail/Ip1'},
                {title:'Masteron Propionate', pageLink: '/productDetail/Ip2'},
                {title:'Nandrolone Decanoate', pageLink: '/productDetail/Ip3'},
                {title:'NPP', pageLink: '/productDetail/Ip4'},
                {title:'Primobolan Depot', pageLink: '/productDetail/Ip5'},
                {title:'Stanozolol Winstrol', pageLink: '/productDetail/Ip6'}, 
            ] 
        },
        {linkHeading: 'Orals',
            links:[
                {title:'Megadrol ', pageLink: '/productDetail/op1'},
                {title:'Superdrol- M1T ', pageLink: '/productDetail/op2'},
                {title:'Turinabol 25 mg', pageLink: '/productDetail/op3'}, 
            ] 
        },
        // {linkHeading: 'Information',
        //     links:[
        //         {title:'History', pageLink: '/'},
        //         {title:'Locations', pageLink: '/'},
        //         {title:'Tearm Of Service', pageLink: '/'},
        //         {title:'Privacy policy', pageLink: '/'}, 
        //     ] 
        // },
         
    ]
    return(
        <>
            {
                footerLink.map((heading, index) =>(
                    <div className="col-md-3 col-6" key={`p${index}`}> 
                        <div className={styles.fixdWidth}>
                            <h2 className={`mb-0 ${styles.linkHeading}`}>{heading.linkHeading}</h2>
                        </div>
                        <ul className="p-0 mt-2">
                            { 
                                heading.links.map((link, index) =>{
                                    return <li className="d-flex gap-2 mb-1" key={`c${index}`}>
                                                <NavLink to={link.pageLink} className={styles.footerLink}>{link.title}</NavLink>
                                            </li>
                                })
                            }  
                        </ul> 
                    </div>
                ))
            }
        </>
    )
}