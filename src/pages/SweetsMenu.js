import React from 'react'
//import {Link} from "react-router-dom"
import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import SweetsMeals from '../components/Meals/SweetsMeals.js'
import Meals from '../components/Meals'

function SweetsMenu() {
    const SweetsMenu=SweetsMeals.map(item=> <Meals item={item}/>)

    return(
        <div>
           <Header2/>
           <Menu/>
           <div class="foodTypes">
            {SweetsMenu}
          </div>
          <Footer/>
        </div> 
    ) 
  }
export default SweetsMenu