import React from 'react'
//import {Link} from "react-router-dom"
import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import PastriesMeals from '../components/Meals/PastriesMeals.js'
import Meals from '../components/Meals'

function PastriesMenu() {
    const PastriesMenu=PastriesMeals.map(item=> <Meals item={item}/>)

    return(
        <div>
           <Header2/>
           <Menu/>
           <div class="foodTypes">
            {PastriesMenu}
          </div>
          <Footer/>
        </div> 
    ) 
  }
export default PastriesMenu