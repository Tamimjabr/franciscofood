import React from 'react'
//import {Link} from "react-router-dom"
import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import CocktailMeals from '../components/Meals/CocktailMeals.js'
import Meals from '../components/Meals'

function CocktailMenu() {
    const CocktailMenu=CocktailMeals.map(item=> <Meals item={item}/>)

    return(
        <div>
           <Header2/>
           <Menu/>
           <div class="foodTypes">
            {CocktailMenu}
          </div>
          <Footer/>
        </div> 
    ) 
  }
export default CocktailMenu