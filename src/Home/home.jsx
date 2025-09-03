import React from "react";
import "./Home.css";

const home = () => {
  const nav = {
    navleft: "FOODTODAY",
    navright: [
      {
        nav1: "How Works",
        nav2: "Meals",
        nav3: "Gallery",
        nav4: "Pricing",
        signbutton: "Sign Up",
      },
    ],
  };

  return (
    <div className="homebg_image ">
      <div className="flex justify-between text-white right_nav px-11 py-6">
        <h1>{nav.navleft}</h1>

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
    </div>
  );
};

export default home;
