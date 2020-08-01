import React from 'react'
import $ from 'jquery'
import "./Header2.css"
import {MdRestaurantMenu} from 'react-icons/md'
import {IoLogoYoutube} from 'react-icons/io'
import {GrInstagram,GrMail} from 'react-icons/gr'
import {FaHome,FaArrowCircleLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function handleClick(){
  //opening the menu
      $(".sideNav").animate({width:"+=250px"}, 500);
}     




function Header() {
    return(
    <nav class="navigationBar" >
        <button id="menu" onClick={handleClick} > <MdRestaurantMenu id="menuIcon"/> </button>

            <Link to="/"><h1 id="franciscoText">Francisco Food<FaHome id='homeIcon'/> </h1></Link>
            <a href="mailto:FranciscoFood@hotmail.com?subject= اطلب وصفة"><h1><FaArrowCircleLeft id="arrowIcon"/>اطلب وصفة</h1></a>
        <div class="socialMedia">
            <a  href="https://www.youtube.com/channel/UCjhR4gCJHKhxl8bjVWTgUbQ?view_as=subscriber"><IoLogoYoutube className="socialIcon youtube"/></a>
            <a  href="https://www.instagram.com/franciscofood/?igshid=1miprswt8m14f&fbclid=IwAR0LZGZoM_XVEUkfDLfZcLS2f7dZ1yrcjZOo1RZY9UQepX0ZtEObVoDxStQ"><GrInstagram className="socialIcon instagram"/></a>
            <a  href="mailto:FranciscoFood@hotmail.com?subject= اطلب وصفة"> <GrMail className="socialIcon envelope"/></a> 
        </div>
   
    
    </nav>  
      
  
    ) 
  }
export default Header