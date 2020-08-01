import React from 'react'
import Header2 from '../components/Header2.js'
import Footer from "../components/Footer.js"
import Menu from '../components/Menu.js'
import HowTo from '../components/HowTo'

function RoastedChicken() {
   

    return(
        <div>
         <Header2/>
         <Menu/>
         <HowTo item={{
           content:["1/2 ملعقة سكر", "ملح", "سكر"],
           iframe:<iframe width="600" height="315" title="أكلة" src="https://www.youtube.com/embed/KHlZCmpb7kA"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
           description: "اسلق المعكرونةلق المعكرونةلق المعكرونةلق المعكرونةلق المعكرولق المعكرونةلق المعكرونةنةلق الملق المعكرونةلق المعكرونةلق المعكرونةلق المعكرونةعكرونة جيدا"
          }}/>
         <Footer/>
        </div> 
    ) 
  }
export default RoastedChicken