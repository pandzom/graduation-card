import React, { useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import Party1 from '../../assets/party1.png';


function DescriptionVenueCard({ title, handle, image, description1, description2 }) {
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
                            { id: 1, quantity: 3 },
                            { id: 2, quantity: 1 },
                        ],
                    }),
                })
                    .then(res => {
                        if (res.ok) return res.json()
                        return res.json().then(json => Promise.reject(json))
                    })
                    .then(({ url }) => {
                        window.location = url
                    })
                    .catch(e => {
                        console.error(e.error)
                    })
            });
        }

        // Cleanup the event listener when the component unmounts
        return () => {
            if (button) {
                button.removeEventListener("click", () => { });
            }
        };
    }, []); // The empty dependency array ensures the effect runs only once after the initial render

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:ml-16 lg:mr-16">
        <div className="relative h-80 w-full">
            <img className="absolute h-full w-full object-cover" src={Party1} alt="pda logo" />
        </div>
        <div className="lg:flex lg:justify-center">
            <div className="p-4 lg:w-[100vh] lg:ml-20">
                <div className="mb-2">
                    <p className="text-xl font-bold">VenueName</p>
                    <div className="flex">
                        <FaMapMarkerAlt size={20} color="gray" />
                        <p className="text-gray-600 pl-4">Location</p>
                    </div>
                </div>
                <div className="flex">
                    <IoMdPerson size={20} color="gray" />
                    <div className="text-gray-800 pl-4">
                        <text>capacity</text>
                    </div>
                </div>
                <div className="text-gray-800 pt-2">
                    <tex>This place for parties and other celebrations is well equipped for such events.</tex>
                </div>
            </div>
            <div className="pl-4 mb-2 lg:pt-4 lg:w-[100vh] lg:mr-20">
                <text>The party venue is a vibrant and energetic space, adorned with colorful decorations and lively ambiance that sets the perfect tone for celebration. As you step inside, the rhythmic beats of music fill the air, creating an inviting atmosphere that promises a night of joy and festivity. The venue's spacious layout allows for seamless movement, encouraging guests to mingle and engage in conversations. A kaleidoscope of lights dances across the walls, adding a touch of glamour to the festivities.</text>
            </div>
        </div>
        <div className="lg:flex lg:justify-center lg:space-x-40 p-4 space-y-4  lg:space-y-0">
            <div className="lg:size-56 border-2 h-40 rounded bg-stone-200">
            <p className="text-xl font-bold text-center">SILVER</p>
            <p className="text-gray-600 pl-4 pt-2">Venue rental for 6 hours</p>
            <p className="text-gray-600 pl-4 pt-2">Basic event coordination</p>
            <p className="text-gray-600 pl-4 pt-2">Standard lighting</p>
            <p className="text-gray-600 pl-4 pt-2">Standard packet</p>
            </div>
            <div className="lg:size-56 border-2 h-40 rounded bg-yellow-200"> 
            <p className="text-xl font-bold text-center">GOLD</p>
            <p className="text-gray-600 pl-4 pt-2">Upgrade decor option</p>
            <p className="text-gray-600 pl-4 pt-2">Wi-fi</p>
            <p className="text-gray-600 pl-4 pt-2">Premium lighting options</p>
            <p className="text-gray-600 pl-4 pt-2">Smoke show</p>
            </div>
            <div className="lg:size-56 border-2 h-40 rounded bg-stone-300">
            <p className="text-xl font-bold text-center">PLATINUM</p>
            <p className="text-gray-600 pl-4 pt-2">Full service event coordination</p>
            <p className="text-gray-600 pl-4 pt-2">Firework show</p>
            <p className="text-gray-600 pl-4 pt-2">Customized decor</p>
            <p className="text-gray-600 pl-4 pt-2">Different performers</p>
            </div>
        </div>
        <div className=" flex justify-center p-5 b">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-16 rounded ">
                <text>Pay Now</text>
            </button>
        </div>
    </div>
    );
}

export default DescriptionVenueCard;





