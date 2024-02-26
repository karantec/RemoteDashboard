import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    
  
   
}from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        
        
        {
            path:"/Account",
            name:"Job Posting",
            icon:<AiFillContacts/>
        },
        { 
            path:"/User",
            name:"Job Details",
            icon:<FaTh/>
        },
       
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "250px" : "6rem", height:"auto"}} className="sidebar">
               <div className="top_section">
               <img src="https://letscodejobs.in/wp-content/uploads/2024/02/cropped-cropped-logo2-3.png" 
               style={{display: isOpen ? "block" : "none",}}alt="profile" className="profile_image"/>
                   <div style={{marginLeft: isOpen ? "100px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;