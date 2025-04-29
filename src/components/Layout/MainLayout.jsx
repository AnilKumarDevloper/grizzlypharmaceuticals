// src/components/Layout/MainLayout.jsx
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Popup from "./Popup/Popup"; // ✅ import your Popup

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Popup /> {/* ✅ Show Popup on every route */}
      <Outlet />
      <Footer />
    </>
  );
};
