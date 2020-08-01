import React from 'react'
import {Link} from "react-router-dom"
import './FoodTypes.css'
import './Meals/ChickenMeals.js'


function Meals(props) {
     
    return(
        <Link to={props.item.link}>
        <div className={props.item.class} id={props.item.id} >
             <div className="foodText">
            <h1>{props.item.name}</h1>
        </div>
     </div>
  </Link>
    ) 
  }
export default Meals