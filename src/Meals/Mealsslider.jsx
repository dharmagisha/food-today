import React, { useRef } from "react";
import { image } from "../assets/assests";
import Slider from "react-slick";

const heading = "Omnifood AI chooses from 5,000+ recipes";
const subheading = "MEALS";

const show = " See More Meals →";

const meals = [
  {
    id: 1,
    title: "Japanese Gyozas",
    image: image.Meal1,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
    tags: ["vegetarian"],
  }
  
];

const meal =[
  {
    id: 2,
    title: "Avocado Salad",
    image: image.Meal2,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
    tags1: "vegen",
    tag2:"paleo"
  },
  {
    id: 3,
    title: "Avocado Salad",
    image: image.Meal2,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
    tags1: "vegen",
    tag2:"paleo"
  },
  {
    id: 4,
    title: "Japanese Gyozas.jpg",
    image: image.Meal1,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
   tags1: "vegen",
    tag2:"paleo"
  },
]

const Mealsslider = () => {
  const slideerRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handlesee = () => {
    slideerRef.current.slickNext();
  };
  return (
    <section id="meals">
      <div  className="max-w-4xl mx-auto px-2 py-12">
        <h1 className="text-sm font-semibold text-orange-500 px-7 font-roboto">
          {subheading}
        </h1>
        <h1 className="text-3xl font-semibold text-gray-700 px-7 mb-11">
          {heading}
        </h1>

        <Slider ref={slideerRef} {...settings} > 
          {meals.map((meal) => (
            <div key={meal.id} className="px-7 py-2">
              <div className="bg-white  shadow-sm rounded-xl ">
                <img
                  src={meal.image}
                  className="w-100 h-46 object-cover rounded-t-xl"
                  alt=""
                />
                <div className="px-9 pt-4 pb-8">
                  <div className="flex gap-2 mb-2">
                    {meal.tags.map((tag) => (
                       <span className=" bg-green-400 flex items-center font-bold justify-center text-green-900 w-14 h-4 rounded-full" style={{fontSize:"10px"}}>
                        {meal.tags1}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-600">{meal.title}</h3>
                  <ul
                    className="mt-4 ms-4 text-gray-600 font-semibold space-y-1 leading-5"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    <li>
                      <i class="bi bi-droplet"></i> {meal.calories}
                    </li>
                    <li>
                      <i class="bi bi-bag-plus"></i> {meal.score}
                    </li>
                    <li>
                      <i class="bi bi-star-half"></i> {meal.rating}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
          {meal.map((meal) => (
            <div key={meal.id} className="px-7 py-2">
              <div className="bg-white shadow-sm rounded-xl ">
                <img
                  src={meal.image}
                  className="w-100 h-46  object-cover rounded-t-xl"
                  alt=""
                />
                <div className="px-9 pt-4 pb-8">
                  <div className="flex gap-2 mb-2">
                   
                      <span className=" bg-green-400 font-bold flex  items-center justify-center text-green-900 w-10 h-4 rounded-full" style={{fontSize:"10px"}}>
                        {meal.tags1}
                      </span>
                      
                      <span className=" bg-yellow-400 font-bold flex items-center justify-center text-green-900 px-2 pb-1 w-10 h-4 rounded-full" style={{fontSize:"10px"}}>
                        {meal.tag2}
                      </span>
                  
                  </div>
                  <h3 className="font-bold text-gray-600">{meal.title}</h3>
                  <ul
                    className="mt-4 ms-4 text-gray-600 font-semibold space-y-1 leading-5"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    <li>
                      <i class="bi bi-droplet"></i> {meal.calories}
                    </li>
                    <li>
                      <i class="bi bi-bag-plus"></i> {meal.score}
                    </li>
                    <li>
                      <i class="bi bi-star-half"></i> {meal.rating}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex flex-col items-center justify-center mt-16">
          <button
            onClick={handlesee}
            className="text-amber-600  font-medium  flex items-center justify-center"
            style={{ fontSize: "15px" }}
          >
            {show}
          </button>
          <div
            className=" text-center bg-amber-500"
            style={{ width: "125px", height: "1px" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Mealsslider;
