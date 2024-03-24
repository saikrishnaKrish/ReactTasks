import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';


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

const quantity = useSelector((store)=>store.cartReducer.cartQuantity )
  // const quantity=20;
  // console.log(quantity)

  return (
    <div className='navbar'>
        <NavLink style={activeState} to={"/ecomm/home"} >Home </NavLink>  
        {/* <NavLink style={activeState} to="/hooks">HooksExample</NavLink>   */}
        <NavLink style={activeState} to={"/ecomm/user"} >Users</NavLink>    
        <NavLink style={activeState} to={"/ecomm/cart"} >
        <div className='cart_container'>
            <ShoppingCartIcon></ShoppingCartIcon>
            <div className='cart_quantity'>{quantity}</div>
        </div>  
          
        </NavLink>    
       
        {/* ecomm/about */}
    </div>
  )
}
