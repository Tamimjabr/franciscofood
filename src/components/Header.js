import React from 'react'
import $ from 'jquery'
import "./Header.css"
import {MdRestaurantMenu} from 'react-icons/md'

function handleClick(){
  //opening the menu
      $(".sideNav").animate({width:"+=250px"}, 500);
}     


function Header() {
    return(
      
      <div className="header">
       <button id="menu" onClick={handleClick}> <MdRestaurantMenu id="menuIcon"/> </button>
      <div className="SiteName">
          <h1>Tamimo Food</h1>
      </div>
    </div> 
   
    ) 
  }
export default Header