import React from "react";
import "./Home.css";
import { image } from "../assets/assests";
import { FaSearch } from "react-icons/fa"

const home = () => {
  const nav = {
    navleft: image.Firsthead,
    navright: [
      {
        nav1: "How Works",
        nav2: "Meals",
        nav3: "Gallery",
        nav4: "Pricing",
        signbutton: "Sign Up",
      },
    ],
    centerhead1:"FOODTODAY",
    centerhead2:"Discover the best Meals & drinks"
  };

  return (
    <div className="homebg_image">
      <div className="flex justify-between text-white right_nav px-11 py-6">
        <img src={nav.navleft} className="w-35 h-5" alt="" />

        <div >
          {nav.navright.map((rightnav) => (
            <div className="flex gap-6 text-sm items-center justify-between">
              <a href="">{rightnav.nav1}</a>
              <a href="">{rightnav.nav2}</a>
              <a href="">{rightnav.nav2}</a>
              <a href="">{rightnav.nav4}</a>
              <button className="w-17 h-8 rounded bg-amber-600 flex items-center justify-center">{rightnav.signbutton}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="center_head flex flex-col items-center justify-center text-white ">
        <p className="text-3xl">{nav.centerhead1}</p>
        <p>{nav.centerhead2}</p>
         <div className="flex justify-center mt-8">
        <div className="relative  w-full max-w-2xl">
          <input type="text" className="w-full bg-white rounded-xl border border-gray-300 py-3 pl-12 pr-4 " />
         <FaSearch className="absolute left-4 top-1/2 text-gray-500"/> 
        </div>
       
      </div>
      </div>

     
    </div>
  );
};

export default home;
