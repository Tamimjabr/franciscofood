import React from 'react'
//import {Link} from "react-router-dom"
import "./Footer.css"
import {IoLogoYoutube} from 'react-icons/io'
import {GrInstagram,GrMail} from 'react-icons/gr'

function Footer() {
    return(
      <div className="contact">

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" id="donate">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="G9KLDPD4B5NXW" />
<input type="image" src="https://www.paypalobjects.com/en_US/SE/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_SE/i/scr/pixel.gif" width="5" height="5" />
</form>

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