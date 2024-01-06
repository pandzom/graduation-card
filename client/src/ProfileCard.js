function ProfileCard({ title, handle, image, description1,description2 }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-40 w-full">
                <img className="absolute h-full w-full object-cover" src={image} alt="pda logo" />
            </div>
            <div className="p-4">
                <div className="mb-2">
                    <p className="text-xl font-bold">{title}</p>
                    <p className="text-gray-600">@{handle}</p>
                </div>
                <div className="text-gray-800">
                    {description1}
                </div>
                <div className="text-gray-800">
                    {description2}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
