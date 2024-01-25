import ProfileCard from "../../ProfileCard";
import React, { useState } from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Party1 from "../../assets/party1.png";
import Party2 from "../../assets/party2.png";
import Party3 from "../../assets/party3.png";
import Party4 from "../../assets/party4.png";
import Party5 from "../../assets/party5.png";

const party = [
  {
    id: 1,
    title: "Enchanted Garden Lounge",
    handle: "Sarajevo",
    image: Party1,
    description1: "Capacity",
    description2: "Nestled in the heart of the city, this whimsical venue features lush greenery, twinkling fairy lights, and a charming gazebo, creating a magical atmosphere for any celebration.",
    price: 100,
    guests: 40,
    href: "/partyonedescription"
  },
  {
    id: 2,
    title: "Skyline Rooftop Terrace",
    handle: "Sarajevo",
    image: Party2,
    description1: "Capacity",
    description2: "Elevate your event at this chic rooftop venue boasting panoramic views of the city skyline. With stylish decor and a sophisticated ambiance, it's the perfect setting for upscale gatherings and unforgettable soirées.",
    price: 50,
    guests: 90,
  },
  {
    id: 3,
    title: "Neon Nights Dance Club",
    handle: "Sarajevo",
    image: Party3,
    description1: "Capacity",
    description2: " Step into a world of vibrant energy and pulsating beats at this trendy dance club. With neon accents, a state-of-the-art sound system, and a spacious dance floor, it's the ultimate destination for those seeking a lively and dynamic party experience.",
    price: 30,
    guests: 150
  },
  {
    id: 4,
    title: "Skyline Loft at Sunset Tower",
    handle: "Sarajevo",
    image: Party4,
    description1: "Capacity",
    description2: "Elevate your event at Sunset Tower's Skyline Loft, perched high above the city with breathtaking sunset views. This chic and contemporary venue, with its open layout and stylish decor, is ideal for networking events, cocktail parties, and upscale receptions, providing an unforgettable experience for attendees.",
    price: 60,
    guests:20
  },
  {
    id: 5,
    title: "Cozy Fireside Lounge ",
    handle: "Sarajevo",
    image: Party5,
    description1: "80",
    description2: "Escape the hustle and bustle at this intimate fireside lounge, where plush sofas, warm hues, and a crackling fireplace create a cozy retreat. Ideal for smaller gatherings or relaxed celebrations, it exudes a comfortable and inviting vibe.",
    price: 100,
    guests:80,
    location:"Sarajevo",
  },

];

function Party() {
    const [categoryFilter, setCategoryFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [guestsFilter, setGuestsFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState(""); 
  
    const filteredMeetings = party.filter(
      (party) =>
        party.title.toLowerCase().includes(categoryFilter.toLowerCase()) &&
        (priceFilter === "" ||party.price <= parseInt(priceFilter)) &&
        (guestsFilter === "" ||
          (guestsFilter === "1-50" &&party.guests <= 50) ||
          (guestsFilter === "50-100" &&party.guests > 50 && party.guests <= 100) ||
          (guestsFilter === "100+" &&party.guests > 100)) &&
        (locationFilter === "" ||party.handle.toLowerCase().includes(locationFilter.toLowerCase()))
    );
  
    const guestsOptions = ["", "1-50", "50-100", "100+"];
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-300 h-[460vh] lg:h-[240vh]">
      <section className="hero bg-primary text-black ">
        <div className="hero-body">
          <h1 className="font-bold text-3xl text-white m-1 absolute">VenueVista</h1>
          <h1 className="text-4xl font-bold text-center text-white pt-10 pb-5 bg-gradient-to-r from-blue-500 to-blue-700">
            Party Venues
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
            {filteredMeetings.map((meeting) => (
              <div key={meeting.id} className="p-4 lg:w-1/2">
                <Link to={meeting.href}>
                <ProfileCard
                  title={meeting.title}
                  handle={meeting.handle}
                  image={meeting.image}
                  guests={meeting.guests}
                  description2={meeting.description2}
                  price = {meeting.price}
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

export default Party;
