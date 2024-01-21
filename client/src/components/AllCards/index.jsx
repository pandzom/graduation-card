import React from "react";
import ProfileCard from "../../ProfileCard";
import { Link } from "react-router-dom";
import Meeting1 from "../../assets/meeting1.png";
import Meeting2 from "../../assets/meeting2.png";
import Meeting3 from "../../assets/meeting3.png";
import Meeting4 from "../../assets/meeting4.png";
import Party1 from "../../assets/party1.png";
import Party2 from "../../assets/party2.png";
import Party3 from "../../assets/party3.png";
import Party4 from "../../assets/party4.png";
import Wedding1 from "../../assets/wedding1.png";
import Wedding2 from "../../assets/wedding2.png";
import Wedding3 from "../../assets/wedding3.png";
import Wedding4 from "../../assets/wedding4.png";


function AllCards() {
  return (
    <div>
      <div className="container mx-auto">
        <section className="py-8">
          <div className="lg:ml-16">
            <div className="lg:flex justify center">
              <div className="w-full md:w-1/3 lg:w-3/6 p-4">
                <ProfileCard
                  title="Meeting1"
                  handle="EventLocation1"
                  image={Meeting1}
                  description1="Capacity"
                  description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                />
              </div>
              <div className="w-full md:w-1/3 lg:w-3/6 p-4">
                <ProfileCard
                  title="Meeting2"
                  handle="EventLocation2"
                  image={Meeting2}
                  description1="Capacity"
                  description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                />
              </div>
            </div>
            <div className="lg:flex justify-center">
              <div className="w-full md:w-1/3 lg:w-3/6 p-4">
                <ProfileCard
                  title="VMeeting"
                  handle="EventLocation3"
                  image={Meeting3}
                  description1="Capacity"
                  description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                />
              </div>
              <div className="w-full md:w-1/3 lg:w-3/6 p-4">
                <ProfileCard
                  title="Meeting4"
                  handle="EventLocation4"
                  image={Meeting4}
                  description1="Capacity"
                  description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                />
              </div>
            </div>
            <div className="lg:flex justify center">
              <Link to="/partyonedescription" className="w-full md:w-1/3 lg:w-3/6 p-4">
                <ProfileCard
                  title="Party1"
                  handle="EventLocation1"
                  image={Party1}
                  description1="Capacity"
                  description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                />
              </Link >
              <div className="w-full md:w-1/3 lg:w-3/6 p-4">
                <ProfileCard
                  title="Party2"
                  handle="EventLocation2"
                  image={Party2}
                  description1="Capacity"
                  description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                />
              </div>
            </div>
            <div className="lg:flex justify-center">
              <div className="w-full md:w-1/3 lg:w-3/6 p-4">
                <ProfileCard
                  title="Party3"
                  handle="EventLocation3"
                  image={Party3}
                  description1="Capacity"
                  description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                />
              </div>
              <div className="w-full md:w-1/3 lg:w-3/6 p-4">
                <ProfileCard
                  title="Party4"
                  handle="EventLocation4"
                  image={Party4}
                  description1="Capacity"
                  description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                />
              </div>
            </div>
            <div className="lg:flex justify-center">
              <div className="w-full md:w-1/3 lg:w-3/6 p-4">
              </div>
            </div>
            <div className="lg:flex justify center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Meeting1"
                              handle="EventLocation1"
                              image={Meeting1}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                      <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Meeting2"
                              handle="EventLocation2"
                              image={Meeting2}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                    </div>
                    <div className="lg:flex justify-center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="VMeeting"
                              handle="EventLocation3"
                              image={Meeting3}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                      <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Meeting4"
                              handle="EventLocation4"
                              image={Meeting4}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                    </div>
                    <div className="lg:flex justify-center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                      </div>
                    </div>
                    <div className="lg:flex justify center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Wedding1"
                              handle="EventLocation1"
                              image={Wedding1}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                      <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Wedding2"
                              handle="EventLocation2"
                              image={Wedding2}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                    </div>
                    <div className="lg:flex justify-center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Wedding3"
                              handle="EventLocation3"
                              image={Wedding3}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                      <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Wedding4"
                              handle="EventLocation4"
                              image={Wedding4}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                    </div>
                    <div className="lg:flex justify-center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                      </div>
                    </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AllCards;
