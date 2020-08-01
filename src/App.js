import React from 'react';
//import $ from 'jquery'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
} from "react-router-dom";
import Home from "./pages/Home"
import ChickenMenu from './pages/ChickenMenu'
import CocktailMenu from './pages/CocktailMenu'
import MeatMenu from './pages/MeatMenu'
import PastriesMenu from './pages/PastriesMenu'
import SalladMenu from './pages/SalladMenu'
import SpagettiMenu from './pages/SpagettiMenu'
import SweetsMenu from './pages/SweetsMenu'

import RoastedChicken from './Chicken/RoastedChicken.js'




function App() {
  return (
    <Router>
  

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/ChickenMenu/RoastedChicken">
        <RoastedChicken />
      </Route>
    
      <Route path="/ChickenMenu">
        <ChickenMenu />
      </Route>
      <Route path="/CocktailMenu">
        <CocktailMenu />
      </Route>
      <Route path="/MeatMenu">
        <MeatMenu />
      </Route>
      <Route path="/PastriesMenu">
        <PastriesMenu />
      </Route>
      <Route path="/SalladMenu">
        <SalladMenu />
      </Route>
      <Route path="/SpagettiMenu">
        <SpagettiMenu />
      </Route>
      <Route path="/SweetsMenu">
        <SweetsMenu />
      </Route>
      <Route path="/">
        <Home />
      </Route>
     
    </Switch>
 
</Router>
  );
}

export default App;
