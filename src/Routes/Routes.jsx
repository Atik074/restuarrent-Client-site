import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Screte from "../Pages/Home/Shared/Screte/Screte";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

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
            { path:"/order/:category" ,
              element:<Order></Order>
             
            },
            {
               path:"/login" ,
               element:<Login></Login>
            },
            
            {
              path:"/signUp" ,
              element:<SignUp></SignUp>
           }
           ,
           { 
            path:'/secrete' ,
            element:<PrivateRoutes><Screte></Screte></PrivateRoutes>
             }
        ] 
      }, 

      { 
        path:"/dashboard" ,
        element:<PrivateRoutes><Dashboard/></PrivateRoutes> ,
        children:[
              {
                path:'mycart',
                element:<MyCart/>
               }
            
        ]
      
      }
])