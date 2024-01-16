import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPerson,
  faMoneyCheckDollar,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  return (
    <div className="mx-auto mt-1 max-w-screen-xl">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8 p-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded shadow-lg">
        {renderFilter("EVENT TYPE", faMagnifyingGlass, "What are you planning", "30vh")}
        {renderFilter("GUESTS", faPerson, "How many guests", "20vh")}
        {renderFilter("PRICE", faMoneyCheckDollar, "$$$$$$$$$", "20vh")}
        {renderFilter("LOCATION", faMapLocationDot, "Sarajevo", "10vh")}
      </div>
      <div className="flex justify-center mt-5">
        <button className="text-white transition ease-in-out delay-150 rounded-lg bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 text-sm lg:text-lg px-20 py-2">
          Search
        </button>
  </div>
    </div>
  );
};

const renderFilter = (label, icon, placeholder, width) => (
  <div className="mt-4">
    <h1 className="font-bold text-center text-xl text-white">{label}</h1>
    <div className="flex items-center mt-2">
      <FontAwesomeIcon className="h-5 ml-2 text-white mr-2" icon={icon} />
      <input
        placeholder={placeholder}
        className={`w-${width} text-lg bg-slate-200`}
      />
    </div>
  </div>
);

export default Filter;
