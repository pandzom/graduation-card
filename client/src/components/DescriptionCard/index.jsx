import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { TbDimensions } from "react-icons/tb";
import { FiWifi } from "react-icons/fi";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import Calendar from "../Calendar/calendarComponent";
import Carousel from "../Carousel/indexSecond";

function DescriptionVenueCard({
  title,
  handle,
  image,
  description1,
  description2,
}) {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const button = document.querySelector("button");

    if (button) {
      button.addEventListener("click", () => {
        // Handle payment logic based on the selected card (Silver, Gold, or Platinum)
        // You can use the selectedCard state to determine the selected option
        // Example: if (selectedCard === 'Silver') { /* handle Silver payment */ }
      });
    }

    return () => {
      if (button) {
        button.removeEventListener("click", () => {});
      }
    };
  }, [selectedCard]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    const button = document.querySelector("button");

    if (button) {
      button.addEventListener("click", () => {
        fetch("http://localhost:5500/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              { id: 1, quantity: 1 },
              { id: 2, quantity: 1 },
            ],
          }),
        })
          .then((res) => {
            if (res.ok) return res.json();
            return res.json().then((json) => Promise.reject(json));
          })
          .then(({ url }) => {
            window.location = url;
          })
          .catch((e) => {
            console.error(e.error);
          });
      });
    }
    return () => {
      if (button) {
        button.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-300 to-purple-500 absolute lg:w-[210vh]">
      <div className="bg-gradient-to-r from-purple-400 to-blue-200 shadow-lg rounded-lg overflow-hidden lg:m-24">
        <div className="relative h-80 w-full">
          <div className="ml-1 lg:ml-0 w-96 lg:w-full">
            <Carousel />
          </div>
        </div>
        <div className="lg:flex lg:justify-center">
          <div className="p-4 lg:w-[100vh] lg:ml-20">
            <div className="mb-2">
              <p className="text-4xl font-bold mt-36">
                Enchanted Garden Lounge
              </p>
              <div className="flex mt-5">
                <FaMapMarkerAlt size={20} color="blue" />
                <p className="text-gray-600 pl-4">Bugojno</p>
              </div>
            </div>
            <div className="flex">
              <IoMdPerson size={20} color="blue" />
              <div className="text-gray-800 pl-4">
                <text>40 persons</text>
              </div>
            </div>
            <div className="flex mt-2">
              <FaDollarSign size={22} color="blue" />
              <div className="text-gray-800 flex ">
                <h1 className="ml-3">100 BAM(per day)</h1>
              </div>
            </div>
            <div className="flex mt-2">
              <TbDimensions size={35} color="blue" />
              <div className="text-gray-800 flex ">
                <h1 className="ml-3 mt-2">
                  55m<sup>2</sup>
                </h1>
              </div>
            </div>
            <div className="flex mt-2">
              <FiWifi size={35} color="blue" />
              <div className="text-gray-800 flex ">
                <h1 className="ml-3 mt-2">Free Wi-Fi</h1>
              </div>
            </div>

            <div className="flex mt-2">
              <AiOutlineCar size={28} color="blue" />
              <div className="text-gray-800 flex">
                <h1 className="ml-3">Ample Parking Space</h1>
              </div>
            </div>
          </div>
          <div className="pl-4 mt-14 lg:pt-32 lg:w-[100vh] lg:mr-20">
            <p className="font-mono">
              The vibrant party venue is a sensory delight, with an array of
              captivating sights and sounds that elevate the celebration to new
              heights. The walls are adorned with dynamic, eye-catching
              decorations that echo the theme of the event, creating a visually
              stunning backdrop for memorable moments. The lively ambiance is
              further enhanced by the enthusiastic chatter of guests and the
              clinking of glasses, creating a symphony of excitement. The
              rhythmic beats of the music not only fill the air but also
              resonate with the pulsating energy of the crowd. The carefully
              curated playlist ensures that every note contributes to the
              overall euphoria, inspiring spontaneous dance moves and infectious
              smiles. The dance floor becomes a focal point where guests express
              themselves through movement, adding an extra layer of joy to the
              festivities.
            </p>
          </div>
        </div>
        <h1 className="text-center text-3xl mt-10 font-bold">Choose packet</h1>
        <div className="lg:flex lg:justify-center lg:space-x-8 p-4 space-y-4 lg:space-y-0 lg:mt-10">
          <div
            className={`lg:w-64 bg-white border-2 h-40 rounded-lg shadow-md cursor-pointer transition-colors duration-300 transform hover:scale-105 ${
              selectedCard === "Silver"
                ? "border-stone-300 bg-stone-300"
                : "border-gray-300"
            }`}
            onClick={() => handleCardClick("Silver")}
          >
            <div className="flex justify-center">
              <p className="text-xl font-bold font-mono text-center text-gray-800">
                SILVER
              </p>
              <MdOutlineWorkspacePremium size={25} color="gray" />
            </div>
            <p className="text-gray-600 pl-4 pt-2 font-mono">
              Venue rental for 6 hours
            </p>
            <p className="text-gray-600 pl-4 pt-2 font-mono">
              Basic event coordination
            </p>
            <p className="text-gray-600 pl-4 pt-2 font-mono">
              Standard lighting
            </p>
            <p className="text-gray-600 pl-4 pt-2 font-mono">Standard packet</p>
          </div>

          <div
            className={`lg:w-64 bg-white border-2 h-40 font-mono rounded-lg shadow-md cursor-pointer transition-colors hover:bg-yellow-200 duration-300 transform hover:scale-105 ${
              selectedCard === "Gold"
                ? "border-yellow-200 bg-yellow-200"
                : "border-gray-300"
            }`}
            onClick={() => handleCardClick("Gold")}
          >
            <div className="flex justify-center">
              <p className="text-xl font-bold font-mono text-center text-gray-800">
                GOLD
              </p>
              <MdOutlineWorkspacePremium size={25} color="yellow" />
            </div>
            <p className="text-gray-600 pl-4 pt-2 font-mono">
              Upgrade decor option
            </p>
            <p className="text-gray-600 pl-4 pt-2 font-mono">Wi-fi</p>
            <p className="text-gray-600 pl-4 pt-2 font-mono">
              Premium lighting options
            </p>
            <p className="text-gray-600 pl-4 pt-2 font-mono">Smoke show</p>
          </div>

          <div
            className={`lg:w-64 bg-white border-2 h-40 rounded-lg shadow-md cursor-pointer transition-colors hover:bg-yellow-400 duration-300 transform hover:scale-105 ${
              selectedCard === "Platinum"
                ? "border-yellow-500 bg-yellow-400"
                : "border-gray-300"
            }`}
            onClick={() => handleCardClick("Platinum")}
          >
            <div className="flex justify-center">
              <p className="text-xl font-bold font-mono text-center text-gray-800">
                PLATINUM
              </p>
              <MdOutlineWorkspacePremium size={25} color="red" />
            </div>
            <p className="text-gray-600 pl-4 pt-2 font-mono">
              Event coordination
            </p>
            <p className="text-gray-600 pl-4 pt-2 font-mono">Firework show</p>
            <p className="text-gray-600 pl-4 pt-2 font-mono">
              Customized decor
            </p>
            <p className="text-gray-600 pl-4 pt-2 font-mono">
              Different performers
            </p>
          </div>
        </div>
        <div className="div">
          <Calendar />
          <h1 className=" text-center text-gray-500">
            In order to complete your payment you need to concduct payment
          </h1>
        </div>

        <div className=" flex justify-center p-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-16 rounded ">
            <text>Pay Now</text>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DescriptionVenueCard;
