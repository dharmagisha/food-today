import React, { useRef } from 'react'
import { image } from '../assets/assests'
import Slider from "react-slick";
   
const heading = "Omnifood AI chooses from 5,000+ recipes"
const subheading = "MEALS"
 
const show =  " See More Meals →"

const meals = [
    
    {
        id:1,
        title:"Japanese Gyozas.jpg",
        image: image.Meal1,
        calories:"650 Calories",
        score:"NutriScore @74",
        rating:"4.9 Rating(544)",
        tags:["vegetarian"],

    },
    {
        id:2,
        title:"Avocado Salad",
        image:image.Meal2,
        calories:"650 Calories",
        score:"NutriScore @74",
        rating:"4.9 Rating(544)",
        tags:["vegen","paleo"],

    },
    {
        id:3,
        title:"Avocado Salad",
        image:image.Meal2,
        calories:"650 Calories",
        score:"NutriScore @74",
        rating:"4.9 Rating(544)",
        tags:["vegen","paleo"],

    },
    {
        id:4,
        title:"Japanese Gyozas.jpg",
        image:image.Meal1,
        calories:"650 Calories",
        score:"NutriScore @74",
        rating:"4.9 Rating(544)",
        tags:["vegetarian"],

    }
    

]

const Mealsslider = () => {
    
    const slideerRef = useRef(null);


    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToscroll:1,
        
    }

    const handlesee = () => {
        slideerRef.current.slickNext();
    }
  return (
    <div className='max-w-5xl mx-auto px-4 py-12'>
        <h1 className='text-sm font-semibold text-orange-500 px-7'>{subheading}</h1>
        <h1 className='text-3xl font-semibold text-gray-700 px-7 mb-21'>{heading}</h1>

        <Slider ref={slideerRef} {...settings}>
            {meals.map((meal) => (
               <div key={meal.id} className='px-7'>
                   <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                    <img src={meal.image} className='w-full h-46 object-cover' alt="" />
                    <div className='p-4'>
                        <div className='flex gap-2 mb-2'>
                            {meal.tags.map((tag) => (
                                <span className='text-xs bg-green-100 text-green-600 px-2 py-2 rounded-full'>{tag}</span>
                            ))}
                        </div>
                        <h3>{meal.title}</h3>
                        <ul className='mt-2 text-sm text-gray-600 space-y-1'>
                            <li>{meal.calories}</li>
                            <li>{meal.score}</li>
                            <li>{meal.rating}</li>
                        </ul>
                    </div>
                   </div>
               </div>
            ))}
        </Slider>

        <div className='flex items-center justify-center mt-6'>
            <button onClick={handlesee} className='text-amber-600 font-medium hover:underline flex items-center justify-center'>
               {show}
            </button>
        </div>

      
    </div>
  )
}

export default Mealsslider
