// src/components/Layout/Popup/Popup.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Popup = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowModal(true);
  }, [location]);

//   useEffect(() => {
//     if (location.pathname === "/") {
//       setShowModal(true);
//     } else {
//       setShowModal(false);
//     }
//   }, [location]);


  if (!showModal) return null;
  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h3 style={modalStyles.heading}>Welcome!</h3>
        <p style={modalStyles.description}>German Peptides does not ship to countries, which classify these pharmaceuticals as special controlled or scheduled substances, including but not limited to the United States, Australia, Canada and Europe. We do not sell any products online. We do not sale to the public. We are not directly or indirectly associated with any websites that may engage in selling same or similar products. Information contained within this website is not a prescription to use and is intended for information purposes only. All manufacturing is in accordance with USP or BP Guidelines.</p>
        <p style={modalStyles.description}>Please note that the information provided on this website is for educational purposes only and should not be considered as medical advice. Always consult with a qualified healthcare professional before using any pharmaceutical products.</p>
        <button style={modalStyles.close} onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
};

const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        // width: "40%", ❌ Remove this line
      },
      modal: {
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        minWidth: "300px",
        maxWidth: "500px", // ✅ Add this
        width: "90%",       // ✅ Make it responsive
        textAlign: "center"
      },
  heading:{
    color:"#000",
  },
  description:{
    color:"#000",
  },
  close: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "10px 20px",
    marginTop: "10px"
  },
};

export default Popup;
