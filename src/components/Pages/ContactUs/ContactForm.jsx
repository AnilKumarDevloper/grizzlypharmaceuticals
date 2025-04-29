
import styles from "./Contact.module.css";
import { CiPhone, CiUser, CiCircleQuestion  } from "react-icons/ci";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai"; 
import { useState } from "react";


const formDtails = [
    {name:'name', type: "text", placeholder:'Name', icons: <CiUser/>},
    {name:'email', type: "email", placeholder:'Email', icons: <AiOutlineMail/>},
    {name:'number', type: "number", placeholder:'Number', icons: <CiPhone/>},
    {name:'subject', type: "text", placeholder:'Subject', icons: <CiCircleQuestion />}, 
    {name:'help', type: "textarea", placeholder:'How can we help you? Feel free to get in touch!', icons: <PiPencilSimpleLineLight />}, 
]

export const ContactForm = () =>{

    const [userDetails, setUserDetails] = useState({
        name:"",
        email:"",
        number:"",
        subject:"",
        help:""
    });

    const handalonChange = (e) =>{
        const {name, value} = e.target;
        setUserDetails((prev) =>({
            ...prev, 
            [name]: value
        })); 
    }
    const handalContactFormSubmit = (e) =>{
        e.preventDefault();   

        if(userDetails.form === "") return;

        setUserDetails({
            name:"",
            email:"",
            number:"",
            subject:"",
            help:""
        })
      
    }


    return(
        <>
        <form onSubmit={handalContactFormSubmit}>
              <div className="row">
                    {
                        formDtails.map((form, index) =>{
                          return <div className={` mt-4 ${index === 4 ? 'col-12' : 'col-md-6 col-sm-6 col-12'}`} key={index}>
                                    <div className={styles.inputContainer}>
                                        <span>{form.icons}</span>
                                        <input
                                            className={styles.inputControler}
                                            type={form.type}
                                            placeholder={form.placeholder}
                                            name={form.name}
                                            value={userDetails[form.name]}
                                            onChange={handalonChange} 
                                            required
                                        ></input>
                                    </div>
                                     
                                </div>
                        })
                    } 
                    
                    <div className="col-12 d-flex justify-content-end mt-4">
                            <button
                                type="submit"
                                className={styles.formSubmit}
                            >Sumbit</button>
                    </div>

                </div>
            </form>
        </>
    )
}