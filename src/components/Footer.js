import React from 'react'
//import {Link} from "react-router-dom"
import "./Footer.css"
import {IoLogoYoutube} from 'react-icons/io'
import {GrInstagram,GrMail} from 'react-icons/gr'

function Footer() {
    return(
      <div className="contact">

      <div className="information">
        <h2>تواصلوا معنا<br/>
         فرانسيسكو فود<br/>
         السويد
        </h2>
       <a href="https://www.youtube.com/channel/UCjhR4gCJHKhxl8bjVWTgUbQ?view_as=subscriber"><IoLogoYoutube className="socialIcon youtube"/></a>
    <a href="https://www.instagram.com/franciscofood/?igshid=1miprswt8m14f&fbclid=IwAR0LZGZoM_XVEUkfDLfZcLS2f7dZ1yrcjZOo1RZY9UQepX0ZtEObVoDxStQ"> <GrInstagram className="socialIcon instagram"/></a>
    <a href="mailto:FranciscoFood@hotmail.com?subject= اطلب وصفة"> <GrMail className="socialIcon envelope"/></a>      
      </div>

    </div>
    ) 
  }
export default Footer