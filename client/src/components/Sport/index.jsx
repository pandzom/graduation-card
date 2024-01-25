import ProfileCard from "../../ProfileCard";
import React, { useState } from "react";
import Sport1 from "../../assets/sport1.png";
import Sport2 from "../../assets/sport2.png";
import Sport3 from "../../assets/sport3.png";
import Sport4 from "../../assets/sport4.png";
import Sport5 from "../../assets/sport5.png";

const sport = [
  {
    id: 1,
    title: "Stadium of Champions",
    handle: "Sarajevo",
    image: Sport1,
    description1: "Capacity",
    description2: "Immerse yourself in the roar of the crowd at this state-of-the-art stadium, equipped with cutting-edge facilities and a colossal seating capacity. Whether for a thrilling football match or an electrifying concert, it's the ultimate venue for experiencing the intensity of live sports and entertainment.",
    price: 100,
    guests: 40
  },
  {
    id: 2,
    title: "Olympic Aquatics Center",
    handle: "Sarajevo",
    image: Sport2,
    description1: "Capacity",
    description2: "Dive into world-class aquatic events at this Olympic-standard venue, featuring sparkling pools and top-notch facilities. With a legacy of hosting prestigious competitions, it provides the perfect stage for swimmers, divers, and water sports enthusiasts to showcase their skills.",
    price: 50,
    guests: 90,
  },
  {
    id: 3,
    title: "Motorsport Arena",
    handle: "Sarajevo",
    image: Sport3,
    description1: "Capacity",
    description2: "Feel the adrenaline rush at this high-speed motorsport arena, where roaring engines and screeching tires create an atmosphere of pure excitement. Whether for a heart-pounding race or a gripping stunt show, this venue offers an immersive experience for fans of fast-paced action.",
    price: 30,
    guests: 150
  },
  {
    id: 4,
    title: "Basketball Hub",
    handle: "Sarajevo",
    image: Sport4,
    description1: "Capacity",
    description2: "Step into a storybook setting at this meticulously preserved manor house, where centuries-old architecture and manicured gardens provide a romantic atmosphere. Perfect for those seeking a touch of vintage charm, this venue offers an elegant backdrop for a classic wedding.",
    price: 60,
    guests:20
  },
  {
    id: 5,
    title: "Tennis Grand Slam Venue",
    handle: "Sarajevo",
    image: Sport5,
    description1: "80",
    description2: "Escape the hustle and bustle at this intimate fireside lounge, where plush sofas, warm hues, and a crackling fireplace create a cozy retreat. Ideal for smaller gatherings or relaxed celebrations, it exudes a comfortable and inviting vibe.",
    price: 100,
    guests:80,
    location:"Sarajevo",
  },

];

function Sport() {
    const [categoryFilter, setCategoryFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [guestsFilter, setGuestsFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState(""); 
  
    const filteredMeetings = sport.filter(
      (sport) =>
        sport.title.toLowerCase().includes(categoryFilter.toLowerCase()) &&
        (priceFilter === "" ||sport.price <= parseInt(priceFilter)) &&
        (guestsFilter === "" ||
          (guestsFilter === "1-50" &&sport.guests <= 50) ||
          (guestsFilter === "50-100" &&sport.guests > 50 && sport.guests <= 100) ||
          (guestsFilter === "100+" &&sport.guests > 100)) &&
        (locationFilter === "" ||sport.handle.toLowerCase().includes(locationFilter.toLowerCase()))
    );
  
    const guestsOptions = ["", "1-50", "50-100", "100+"];
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-purple-300 h-[460vh] lg:h-[240vh]">
      <section className="hero bg-primary text-black ">
        <div className="hero-body">
        <h1 className="font-bold text-3xl text-white m-1 absolute">VenueVista</h1>
          <h1 className="text-4xl font-bold text-center text-white pt-10 pb-5 bg-gradient-to-r from-blue-500 to-blue-700">
            Sport Venues
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
                <ProfileCard
                  title={meeting.title}
                  handle={meeting.handle}
                  image={meeting.image}
                  guests={meeting.guests}
                  description2={meeting.description2}
                  price = {meeting.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sport;
