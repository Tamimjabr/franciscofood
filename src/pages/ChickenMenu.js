import React from 'react'
//import {Link} from "react-router-dom"
import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import ChickenMeals from '../components/Meals/ChickenMeals.js'
import Meals from '../components/Meals'

function ChickenMenu() {
    const ChickenMenu=ChickenMeals.map(item=> <Meals item={item}/>)

    return(
        <div>
           <Header2/>
           <Menu/>
           <div class="foodTypes">
            {ChickenMenu}
          </div>
          <Footer/>
        </div> 
    ) 
  }
export default ChickenMenu