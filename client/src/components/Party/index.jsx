import ProfileCard from "../../ProfileCard";
import Party1 from "../../assets/party1.png";
import Party2 from "../../assets/party2.png";
import Party3 from "../../assets/party3.png";
import Party4 from "../../assets/party4.png";
import Party5 from "../../assets/party5.png";


function Party() {
  return (
      <div className="bg-gradient-to-r from-violet-400 to-violet-700">
          <section className='hero bg-primary text-black '>
              <div className='hero-body'>
                  <h1 className='text-4xl font-bold text-center pt-5'>Party Venues</h1>
              </div>
          </section>

          <div className='container mx-auto'>
              <section className='py-8'>
                  <div>
                    <div className="lg:flex justify center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="VenueName1"
                              handle="EventLocation1"
                              image={Party1}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                      <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="VenueName2"
                              handle="EventLocation2"
                              image={Party2}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                    </div>
                    <div className="lg:flex justify-center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="VenueName3"
                              handle="EventLocation3"
                              image={Party3}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                      <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="VenueName4"
                              handle="EventLocation4"
                              image={Party4}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                    </div>
                    <div className="lg:flex justify-center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="VenueName5"
                              handle="EventLocation5"
                              image={Party5}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                    </div>
                    
                  </div>
              </section>
          </div>
      </div>
  );
}

export default Party;
