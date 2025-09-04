import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './Home/home'
import Mealsslider from './Meals/Mealsslider';
import Galary from  './Gallery/Galary';
import Pricing from './Pricing/Pricing';


const App = () => {
  return (
    <div>
      <Home/>
      <Mealsslider/>
      <Galary/>
      <Pricing/>
      
    </div>
  )
}

export default App
