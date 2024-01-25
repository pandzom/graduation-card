import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';

function ProfileCard({ title, handle, image, guests ,description2, price }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 hover:scale-100 hover:bg-blue-400 duration-300">
            <div className="relative h-40 w-full">
                <img className="absolute h-full w-full object-cover" src={image} alt="pda logo" />
            </div>
            <div className="p-4">
                <div className="mb-1">
                    <p className="text-2xl font-bold">{title}</p>
                    <div className="flex mt-2">
                        <FaMapMarkerAlt size={20} color="blue" />
                        <p className="text-gray-600 pl-1">{handle}</p>
                    </div>
                    
                </div>
                <div className="flex mt-2">
                    <IoMdPerson size={20} color="blue" />
                    <div className="text-gray-800 pl-1 flex">
                        {guests} <h1 className='ml-1'>persons</h1>
                    </div>
                </div>
                <div className="flex mt-2">
                    <FaDollarSign size={22} color="blue" />
                    <div className="text-gray-800 flex ">
                        {price} <h1 className='ml-1'>BAM(per day)</h1>
                    </div>
                </div>
                <div className="text-gray-800 mt-3">
                    {description2}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
