import React from 'react'
//import {Link} from "react-router-dom"
import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import SpagettiMeals from '../components/Meals/SpagettiMeals.js'
import Meals from '../components/Meals'

function SpagettiMenu() {
    const SpagettiMenu=SpagettiMeals.map(item=> <Meals item={item}/>)

    return(
        <div>
           <Header2/>
           <Menu/>
           <div class="foodTypes">
            {SpagettiMenu}
          </div>
          <Footer/>
        </div> 
    ) 
  }
export default SpagettiMenu