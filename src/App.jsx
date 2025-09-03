import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './Home/home'
import Mealsslider from './Meals/Mealsslider';
import Galary from  './Gallery/Galary';
import Pricing from './Pricing/Pricing';
import Mealsslider2 from './Meals/Mealsslider2';
import Foot from './Foot/Foot';


const App = () => {
  return (
    <div>
      <Home/>
      <Mealsslider2/>
      <Mealsslider/>
      <Galary/>
      <Pricing/>
      <Foot/>
      
    </div>
  )
}

export default App
