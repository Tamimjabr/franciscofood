import React from 'react'
import $ from 'jquery'
import "./Menu.css"
import {IoIosCloseCircle} from 'react-icons/io'
import {FaCookieBite,FaArrowCircleLeft} from 'react-icons/fa'
import {GiChickenOven} from 'react-icons/gi'
import {GiMeat, GiSlicedBread, GiTomato, GiOrange} from 'react-icons/gi'
import { Link } from 'react-router-dom'


function handleClick(){
  //closing the menu
      $(".sideNav").animate({width:"-=250px"}, 500);
  
}

function Menu() {
    return(
      
        <nav id="sideMenu" className="sideNav">
                    
        <IoIosCloseCircle id="closeBtn" onClick={handleClick} /> 
        <Link to="/MeatMenu"><GiMeat className="foodIcon" color="brown"/>أكلات اللحم</Link>
        <Link to="/ChickenMenu"><GiChickenOven className="foodIcon" color="rgb(214, 97, 43)"/>أكلات الدجاج</Link>
        <Link to="/PastriesMenu"><GiSlicedBread className="foodIcon" color="chocolate"/>المعجنات</Link>
        <Link to="/SpagettiMenu">المعكرونة بأنواعها</Link>
        <Link to="/SalladMenu"><GiTomato className="foodIcon" color="red"/> سلطات ولا أطيب</Link>
        <Link to="/SweetsMenu"><FaCookieBite className="foodIcon" color="rgb(116, 29, 29)"/>أكلات الحلو</Link>
        <Link to="/CocktailMenu"><GiOrange className="foodIcon" color="orange" />العصائر</Link>
        <a href="mailto:FranciscoFood@hotmail.com?subject= اطلب وصفة"><FaArrowCircleLeft className="foodIcon" color="green" />اطلب وصفة</a>
        
        </nav>
    ) 
  }
export default Menu