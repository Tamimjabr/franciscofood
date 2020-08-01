import React from 'react'
import "./HowTo.css"


function HowTo(props) {

const ingred=props.item.content.map(piece=> <li>{piece}</li>)


    return(
    <div className="howTo">
        <div id="ingredientsContainer">
          <div id="ingredients" >
            <h2>المكونات :</h2>
            <ul>
              {ingred}
            </ul>
          </div>

               {props.item.iframe}
       
        </div>
        <hr/>
        
        <div id="description">
           <h2>طريقة التحضير :</h2><br/>
              <p>{props.item.description}</p>      
        </div> 
    </div>
    ) 
  }
export default HowTo