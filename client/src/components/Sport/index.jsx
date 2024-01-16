import ProfileCard from "../../ProfileCard";
import Sport1 from "../../assets/sport1.png";
import Sport2 from "../../assets/sport2.png";
import Sport3 from "../../assets/sport3.png";
import Sport4 from "../../assets/sport4.png";
import Sport5 from "../../assets/sport5.png";


function Sport() {
  return (
      <div className="bg-gradient-to-r from-teal-300 to-teal-500">
          <section className='hero bg-primary text-black '>
              <div className='hero-body'>
                  <h1 className='text-4xl font-bold text-center pt-5'>Sport Venues</h1>
              </div>
          </section>

          <div className='container mx-auto'>
              <section className='py-8'>
                  <div>
                    <div className="lg:flex justify center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Sport1"
                              handle="EventLocation1"
                              image={Sport1}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                      <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Sport2"
                              handle="EventLocation2"
                              image={Sport2}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                    </div>
                    <div className="lg:flex justify-center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Sport3"
                              handle="EventLocation3"
                              image={Sport3}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                      <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Sport4"
                              handle="EventLocation4"
                              image={Sport4}
                              description1="Capacity"
                              description2="Inside Vineyard Elegance the warm and inviting interior seamlessly blends rustic charm with refined elegance"
                          />
                      </div>
                    </div>
                    <div className="lg:flex justify-center">
                    <div className='w-full md:w-1/3 lg:w-3/6 p-4'>
                          <ProfileCard
                              title="Sport5"
                              handle="EventLocation5"
                              image={Sport5}
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

export default Sport;
