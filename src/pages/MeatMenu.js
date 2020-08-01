import React from 'react'
//import {Link} from "react-router-dom"
import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import MeatMeals from '../components/Meals/MeatMeals.js'
import Meals from '../components/Meals'

function MeatMenu() {
    const MeatMenu=MeatMeals.map(item=> <Meals item={item}/>)

    return(
        <div>
           <Header2/>
           <Menu/>
           <div class="foodTypes">
            {MeatMenu}
          </div>
          <Footer/>
        </div> 
    ) 
  }
export default MeatMenu