import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-800 text-white p-6 absolute w-[50vh] lg:w-[210vh]">
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
  </footer></div>
  )
}

export default Footer