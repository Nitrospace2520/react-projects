import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
let logs="login";
const Header=()=>{
    const[btnName,setbtnName]=useState("login");


    return(
    <div className="header">
        <div className="logo">
            <img  src="" alt="logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                 <button className="login-btn" onClick={()=>{
                    btnName==="login"?
                    setbtnName("logout"):setbtnName("login");
                }}>{btnName}</button>
            </ul>
        </div>
        </div>
    );
};
export default Header;