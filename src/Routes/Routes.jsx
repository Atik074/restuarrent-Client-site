import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/Order/Order";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        children:[
            { 
                path: "/" ,
                element:<Home/>
               
            } ,
            { 
             path: "/menu" ,
             element:<Menu/>
              
            },
            { path:"/order" ,
              element:<Order></Order>
             
            }
        ]
      }, 
])