import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";

const Applayout=()=>{
    return(
    <div className="app">
        <Header/>
       <Outlet/>
    </div>
    );
};
const appRouter = createBrowserRouter([
     {
        path: "/",
        element: <Applayout/>,
        children:[
            {
                path: "/",
                element: <Body/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/about",
                element: <About/>,
                errorElement: <ErrorPage/>
             },
             {
                path:"/contact",
                element:<Contact/>,
                errorElement: <ErrorPage/>
             }
        ],
        errorElement: <ErrorPage/>
     }
 
]);
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);



/**
 * header 
 *   -logo
 *   -home
 *    -about ua
 *    -contact
 *    -cart
 * Body
 *     search
 *    -restaurant-container
 *          -restaurantcard
 *               Img
 *               Name of res,star rating  cuisne delivery time
 *               
 * footer
 * 
 */
