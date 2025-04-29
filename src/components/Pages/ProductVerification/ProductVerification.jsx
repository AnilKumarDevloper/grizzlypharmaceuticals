import axios from 'axios';
import Swal from "sweetalert2";
import { useState } from "react";
import scanVerifyImg from "/src/assets/images/code-fine.jpg";
import { Breadcrumbs } from "../breadcrumb/Breadcrumbs";
import styles from "./ProductVerification.module.css";

export const ProductVerification = () => {
    const [code, setCode] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!code) {
            Swal.fire('Error', 'Please enter the code', 'error');   
            return;
        }
        try {
            const response = await axios.get('https://grizzlypharmaceuticals.com/admin/api/verify-product', {
                params: { product_code: code },
                headers: {
                    'Authorization': `Bearer nj9OtP0IehK6ngHbxuKL3jgJ7iMcgdMZiF82hccqkTRxDqrHiVfXkFmyrzcPkX1kPD671E0RY3pjzIB3`,
                }
            }); 
            const result = response.data; 
            if(result.message === "code_verified"){
                Swal.fire({ 
                    html: `Congratulations, you have a genuine Grizzly Pharmaceuticals's Product.<br><br><b>Date:</b> ${result.data.date}<br><b>Time:</b> ${result.data.time}`,
                    icon: 'success',
                });
            } else if(result.message === "already_verified"){
                Swal.fire({
                    html: `Grizzly Code has already been verified.<br><br><b>Date:</b> ${result.data.date}<br><b>Time:</b> ${result.data.time}`,
                    icon: 'info',
                });
            } else if(result.message === "code_not_exist"){
                Swal.fire('Error', 'The code is incorrect, Please check the code.', 'error');
            }else{
                Swal.fire('Error', 'The code is incorrect, Please check the code.', 'error');
            }
        } catch (error) {
            console.error(error); 
            if (error.response && error.response.data && error.response.data.message) {
                Swal.fire('Error', error.response.data.message, 'error');
            } else {
                Swal.fire('Error', 'Server error.', 'error');
            }
        }
    };

    return (
        <>
            <section>
                <Breadcrumbs />
            </section>
            <section className="pt-5 pb-5">
                <div className="container">
                    <h1
                        style={{
                            textAlign: 'center',
                            padding: '0 0 15px 0',
                            fontWeight: 'bold'
                        }}>
                        Authenticate the Security Code
                    </h1>
                    <div className={styles.verification}>
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex justify-content-center flex-wrap">
                                <img
                                    src={scanVerifyImg}
                                    alt="verification"
                                    className={styles.verifyImg}
                                />
                            </div>
                            <div className="d-flex gap-2 mt-4 justify-content-center">
                                <input
                                    className={styles.verificationInput}
                                    placeholder="Verify Code"
                                    type="text"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required
                                />
                                <button
                                    type="submit"
                                    className={styles.verifyBtn}
                                >
                                    Check
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
