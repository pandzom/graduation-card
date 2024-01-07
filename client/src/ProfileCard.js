import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';

function ProfileCard({ title, handle, image, description1,description2 }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-40 w-full">
                <img className="absolute h-full w-full object-cover" src={image} alt="pda logo" />
            </div>
            <div className="p-4">
                <div className="mb-2">
                    <p className="text-xl font-bold">{title}</p>
                    <div className="flex">
                        <FaMapMarkerAlt size={20} color="gray" />
                        <p className="text-gray-600 pl-4">{handle}</p>
                    </div>
                </div>
                <div className="flex">
                    <IoMdPerson size={20} color="gray" />
                    <div className="text-gray-800 pl-4">
                        {description1}
                    </div>
                </div>
                <div className="text-gray-800">
                    {description2}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
