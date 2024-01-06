import ProfileCard from "../../ProfileCard";
import Wedding1 from "../../assets/wedding1.png";
import Wedding2 from "../../assets/wedding2.png";
import Wedding3 from "../../assets/wedding3.png";

function Meeting() {
  return (
      <div className="bg-gradient-to-r from-amber-300 to-amber-500">
          <section className='hero bg-primary text-black '>
              <div className='hero-body'>
                  <h1 className='text-4xl font-bold text-center pt-5'>Meeting Venues</h1>
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
                              image={Wedding1}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                      <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="VenueName2"
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
                              title="VenueName3"
                              handle="EventLocation3"
                              image={Wedding3}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                      <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="VenueName3"
                              handle="EventLocation3"
                              image={Wedding3}
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
                              image={Wedding3}
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

export default Meeting;
