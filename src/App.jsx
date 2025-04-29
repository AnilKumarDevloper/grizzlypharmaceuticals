
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { MainLayout } from "./components/Layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { About } from "./components/Pages/About/About";
import { ContactUs } from "./components/Pages/ContactUs/ContactUs";
import { ProductDetail } from "./components/Pages/ProductDetail/ProductDetail";
import { Product } from "./components/Pages/Product/Product";
 import { OralProd } from "./components/Pages/Product/OralProd";
import { ProductVerification } from "./components/Pages/ProductVerification/ProductVerification";
 import { Pepatize } from "./components/Pages/Pepatize/Pepatize";
function App() {

    const router = createBrowserRouter([
      {
          path:'/',
          element:<MainLayout/>,
          children:([
              {
                 index: true,
                element:<Home/>
              },
              {
                path:'about',
                element:<About/>
              },
              {
                path:'contact',
                element:<ContactUs/>
              },
              {
                path:'productDetail/:id',
                element:<ProductDetail/>
              },
              {
                path:'product',
                element:<Product/>
              },
              {
                path: 'oral',
                element:<OralProd/>
              },
              {
                path:'productverification',
                element: <ProductVerification/>
              },
              {
                path:'pepatize',
                element:<Pepatize/>
              }
          ])
      }
    ])

  return (
    <> 
        <RouterProvider router={router}/> 
    </>
  )
}

export default App
