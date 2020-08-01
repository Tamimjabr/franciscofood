import React from 'react'
//import {Link} from "react-router-dom"
import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import SalladMeals from '../components/Meals/SalladMeals.js'
import Meals from '../components/Meals'

function SalladMenu() {
    const SalladMenu=SalladMeals.map(item=> <Meals item={item}/>)

    return(
        <div>
           <Header2/>
           <Menu/>
           <div class="foodTypes">
            {SalladMenu}
          </div>
          <Footer/>
        </div> 
    ) 
  }
export default SalladMenu