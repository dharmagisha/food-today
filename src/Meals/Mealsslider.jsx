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
  },
  {
    id: 2,
    title: "Avocado Salad",
    image: image.Meal2,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
    tags: ["vegen", "paleo"],
  },
  {
    id: 3,
    title: "Avocado Salad",
    image: image.Meal2,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
    tags: ["vegen", "paleo"],
  },
  {
    id: 4,
    title: "Japanese Gyozas.jpg",
    image: image.Meal1,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
    tags: ["vegetarian"],
  },
];

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
        <h1 className="text-3xl font-semibold text-gray-700 px-7 mb-21">
          {heading}
        </h1>

        <Slider ref={slideerRef} {...settings}>
          {meals.map((meal) => (
            <div key={meal.id} className="px-7">
              <div className="bg-white shadow-lg rounded-xl ">
                <img
                  src={meal.image}
                  className="w-100 h-46 object-cover"
                  alt=""
                />
                <div className="px-9 pt-4 pb-8">
                  <div className="flex gap-2 mb-2">
                    {meal.tags.map((tag) => (
                      <span className="text-xs bg-green-400 text-green-900 px-2 pb-1  rounded-full">
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
