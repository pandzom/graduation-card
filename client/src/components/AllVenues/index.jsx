import React from 'react'
import Filter from "../Filter/index";
import AllCards from '../AllCards';

function AllVenues() {
  return (
    <div className='bg-gradient-to-r from-blue-300 to-blue-200'>
      <div className="">
        <h1 className='text-4xl font-bold text-center text-white pt-10 pb-5 bg-black bg-opacity-80'>Filter your search</h1>
        <Filter />
      </div>
      <h1 className='text-6xl p-16 text-white font-bold'>All Vista Venues</h1>
      <div className="lg:w-[200vh] h-full">
        <AllCards />
      </div>
    </div>
  )
}

export default AllVenues