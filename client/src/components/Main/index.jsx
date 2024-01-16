import bg from "../../assets/backgroundMain.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import video from "../../assets/EVENTVIDEO.mp4";
import logo from "../../assets/eventvenuelogo.png";
import Carousel from "../Carousel/index";
import { Link } from "react-router-dom";
import { faCheckToSlot, faBullseye } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <header>
        <video
          className="w-full h-full object-cover brightness-5 absolute"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <nav className="flex w-full justify-between absolute">
          <h1 className="font-bold text-3xl text-blue-500 m-1">VenueVista</h1>
          <button
            className="bg-red-600 text-white rounded px-2 m-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </header>
      <section>
        <div className="lg:flex lg:justify-center absolute mt-32 lg:space-x-36 lg:p-5 lg:ml-6">
          <div className="lg:w-[75vh] w-[50vh] lg:h-85 bg-black bg-opacity-25 shadow-lg">
            <h1 className="text-white text-xl font-bold lg:text-6xl">
              A better way to find your event venue
            </h1>
            <div className="flex bg-gradient-to-r from-cyan-600 to-blue-700 w-80 bg-opacity-70 mt-3 space-x-2 rounded-lg">
              <FontAwesomeIcon
                className="ml-2 mt-2 text-blue-300 "
                icon={faCheckToSlot}
              />
              <p className="text-lg lg:text-2xl text-white">
                Find event venue
              </p>
            </div>
            <div className="flex bg-gradient-to-r from-cyan-600 to-blue-700 w-80 bg-opacity-70 mt-1 space-x-2 rounded-lg">
              <FontAwesomeIcon
                className="ml-2 mt-2 text-blue-300 "
                icon={faCheckToSlot}
              />
              <p className="text-lg lg:text-2xl text-white">
                Check detailed description
              </p>
            </div>
            <div className="flex bg-gradient-to-r from-cyan-600 to-blue-700 w-80 bg-opacity-70 mt-1 space-x-2 rounded-lg">
              <FontAwesomeIcon
                className="ml-2 mt-2 text-blue-300 "
                icon={faCheckToSlot}
              />
              <p className="text-lg lg:text-2xl text-white">
                Make a reservation
              </p>
            </div>
            <div className="flex bg-gradient-to-r from-cyan-600 to-blue-700 w-80 bg-opacity-70 mt-1 space-x-2 rounded-lg">
              <FontAwesomeIcon
                className="ml-2 mt-2 text-blue-300 "
                icon={faCheckToSlot}
              />
              <p className="text-lg lg:text-2xl text-white">
                Enjoy
              </p>
            </div>
          </div>
          <div className="lg:w-[100vh] w-96 lg:h-80 h-[50vh] bg-gradient-to-r from-cyan-600 to-blue-700 rounded-sm mt-2 lg:mt-1 bg-opacity-80 ">
            <h1 className="text-white text-xl font-bold lg:text-4xl p-10">
              Venue sourcing made easy
            </h1>
            <p className="text-white w-[45vh] lg:w-[90vh] ml-5 lg:ml-10">
              Discover the perfect venue for your event with VenueVista! From
              elegant ballrooms to trendy lofts, our extensive database offers a
              diverse range of spaces to suit every occasion.Let VenueVista make
              your event planning journey seamless and unforgettable!{" "}
            </p>
            <Link to='all-venues'
              type="button"
              class="shadow-xl shadow-blue-800 text-white transition ease-in-out delay-150 rounded-lg bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 text-sm px-20 py-2 ml-[10vh] lg:ml-[32vh] mt-10"
            >
              Find Venue
            </Link>
          </div>
        </div>
      </section>
      <div className="absolute bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 w-full h-[100vh] mt-[100vh]">
      <div className="lg:flex justify-center bg-black bg-opacity-50">
      <h1 className="text-center text-5xl text-white font-bold mt-5 ">Find your perfect venue</h1>
        <FontAwesomeIcon
         icon={faBullseye}
         className="ml-[22vh] lg:ml-1 lg:p-3 mt-2 h-14 text-white" />
      </div>
        <div className="">
          <Carousel />
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-6 absolute lg:mt-[181vh] mt-[198vh] w-[50vh] lg:w-[210vh]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">VenueVista</h3>
            <p className="text-sm">Your go-to place for event venue reservations</p>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Venues</a>
            <a href="#" className="hover:text-gray-300">About Us</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>

        <hr className="my-4 border-gray-600" />

        <p className="text-center text-sm">&copy; 2024 VenueVista. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Main;

