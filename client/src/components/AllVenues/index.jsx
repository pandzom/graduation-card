import ProfileCard from "../../ProfileCard";
import React, { useState } from "react";
import allVenues from "./indexdata";
import { Link } from "react-router-dom";

function AllVenues() {
    const [categoryFilter, setCategoryFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [guestsFilter, setGuestsFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState(""); 
  
    const filteredVenues = allVenues.filter(
      (allvenues) =>
        allvenues.title.toLowerCase().includes(categoryFilter.toLowerCase()) &&
        (priceFilter === "" ||allvenues.price <= parseInt(priceFilter)) &&
        (guestsFilter === "" ||
          (guestsFilter === "1-50" &&allvenues.guests <= 50) ||
          (guestsFilter === "50-100" &&allvenues.guests > 50 && allvenues.guests <= 100) ||
          (guestsFilter === "100+" &&allvenues.guests > 100)) &&
        (locationFilter === "" ||allvenues.handle.toLowerCase().includes(locationFilter.toLowerCase()))
    );
  
    const guestsOptions = ["", "1-50", "50-100", "100+"];
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-300 h-[460vh] lg:h-[680vh]">
      <section className="hero bg-primary text-black ">
        <div className="hero-body">
          <h1 className="font-bold text-3xl text-white m-1 absolute">VenueVista</h1>
          <h1 className="text-4xl font-bold text-center text-white pt-10 pb-5 bg-gradient-to-r from-blue-500 to-blue-700">
            All VistaVenues
          </h1>
        </div>

        <div className="mt-2 lg:m-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8 p-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded shadow-lg ">
            <div className="div">
            <h1 className="ont-bold text-center text-xl text-white">EVENT TYPE</h1>
            <input
              type="text"
              placeholder="Filter by name"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-48 ml-20 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            
            </div>
            <div className="div">
            <h1 className="ont-bold text-center text-xl text-white">PRICE</h1>
            <input
              type="number"
              placeholder="Filter by max price"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-48 ml-20 mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            
            </div>
            <div className="div">
          <h1 className="ont-bold text-center text-xl text-white">GUESTS</h1>
          <select
            value={guestsFilter}
            onChange={(e) => setGuestsFilter(e.target.value)}
            className="w-48 ml-20 mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            {guestsOptions.map((option) => (
              <option key={option} value={option}>
                {option === "" ? "All" : option}
              </option>
            ))}
          </select>
        </div>
        <div className="div">
              <h1 className="font-bold text-center text-xl text-white">LOCATION</h1>
              <input
                type="text"
                placeholder="Filter by location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-48 ml-20 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="lg:flex lg:flex-wrap">
            {filteredVenues.map((allvenues) => (
              <div key={allvenues.id} className="p-4 lg:w-1/2">
                 <Link to={allvenues.href}>
                <ProfileCard
                  title={allvenues.title}
                  handle={allvenues.handle}
                  image={allvenues.image}
                  guests={allvenues.guests}
                  description2={allvenues.description2}
                  price = {allvenues.price}
                />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllVenues;
