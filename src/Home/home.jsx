import React from "react";
import "./Home.css";
import { image } from "../assets/assests";
import { FaSearch } from "react-icons/fa";

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
    centerhead1: "FOODTODAY",
    centerhead2: "Discover the best Meals & drinks",
  };

  return (
    <div className="homebg_image">
      <div className="flex justify-between text-white right_nav px-15 py-4">
        <div className="flex items-start justify-start gap-1">
          <div className="flex items-center justify-center gap-1">
            <img src={nav.navleft} className="w-28 h-3 " alt="" />{" "}
            <div className="" style={{ fontSize: "10px" }}>
              <i class="bi bi-geo-alt"></i>
            </div>
            <p className=" " style={{ fontSize: "8px" }}>
              Kerala
            </p>
          </div>
        </div>

        <div>
          {nav.navright.map((rightnav) => (
            <div className="flex gap-6 text-sm font-semibold items-center justify-between">
              <a href="#home">{rightnav.nav1}</a>
              <a href="#meals">{rightnav.nav2}</a>
              <a href="#galary">{rightnav.nav3}</a>
              <a href="#pricing">{rightnav.nav4}</a>
              <button className="w-18 h-8 rounded-lg bg-[#e67e22] flex items-center justify-center">
                {rightnav.signbutton}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="center_head flex flex-col gap-5 items-center justify-center text-white mb-19 text-Oswald font-roboto">
        <p className="text-5xl" style={{ fontFamily: "font-name" }}>
          F<span style={{ color: "#e67e22" }}>OO</span>DTODAY
        </p>
        <p className="centerhead_sec">{nav.centerhead2}</p>
      </div>
      <div className="search_home flex justify-center mt-8">
        <div className="relative w-full max-w-2xl px-4">
          <input
            type="text"
            className="w-full bg-white rounded-sm border border-gray-300  pl-12 text-sm"
            placeholder="Search Foods Drinks here"
            style={{ padding: "10px 35px" }}
          />

          <FaSearch
            className="absolute ms-3 left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-base"
            style={{ fontSize: "12px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default home;
