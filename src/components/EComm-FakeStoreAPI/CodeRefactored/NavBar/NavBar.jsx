import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"

export const NavBar = () => {


  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "rgb(253 230 138)" : "",
      backgroundColor: isActive ? "rgb(69 26 3)" : "",
      fontWeight: isActive ? "bold" : "",
      padding:isActive? " 2px 14px":"",
      borderRadius: isActive?"25px":""
    };
  };


  
  return (
    <div className='navbar'>
        <NavLink style={activeState} to={"/ecomm/home"} >Home </NavLink>  
        {/* <NavLink style={activeState} to="/hooks">HooksExample</NavLink>   */}
        <NavLink style={activeState} to={"/ecomm/user"} >Users</NavLink>    
        <NavLink style={activeState} to={"/ecomm/cart"} >Cart</NavLink>    
        {/* ecomm/about */}
    </div>
  )
}
