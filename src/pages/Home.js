import React from 'react'
//import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FoodTypes from "../components/FoodTypes"
import Menu from "../components/Menu"

function Home() {
    return(
        <div>
          <Header/>
          <Menu/>
          <FoodTypes/>
          <Footer/>
        </div> 
    ) 
  }
export default Home