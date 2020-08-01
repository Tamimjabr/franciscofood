import React from 'react'
import {Link} from "react-router-dom"
import './FoodTypes.css'

function FoodTypes() {
    return(
      <section className="foodTypes">

      <Link to="/ChickenMenu">
        <div className="card" id="chicken" >
          <div className="foodText">
             <h1>أكلات الدجاج</h1>
          </div>
        </div>
      </Link>
    
      <Link to="/MeatMenu">
        <div className="card" id="meat">
          <div className="foodText">
            <h1>أكلات اللحم</h1>
          </div>
        </div>
      </Link>
    
      <Link to="/PastriesMenu">
        <div className="card" id="pastries">
          <div className="foodText">
           <h1 >المعجنات</h1>
          </div>
        </div>
      </Link>

      <Link to="/SpagettiMenu">
        <div className="card" id="spagetti">        
          <div className="foodText">
            <h1 >المعكرونة بأنواعها</h1>
          </div>
        </div>
      </Link>

      <Link to="/SalladMenu">
        <div className="card" id="sallad">        
          <div className="foodText">
            <h1 >سلطات</h1>
          </div>
        </div>
      </Link>

      <Link to="/SweetsMenu">
        <div className="card" id="sweets">        
          <div className="foodText">
           <h1 >أكلات الحلو</h1>
          </div>
        </div>
      </Link>

      <Link to="/CocktailMenu">
        <div className="card" id="cocktail">        
          <div className="foodText">
            <h1 >العصائر</h1>
          </div>
        </div>
      </Link>
      
    </section>
    ) 
  }
export default FoodTypes