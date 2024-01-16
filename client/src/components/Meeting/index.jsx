import ProfileCard from "../../ProfileCard";
import Meeting1 from "../../assets/meeting1.png";
import Meeting2 from "../../assets/meeting2.png";
import Meeting3 from "../../assets/meeting3.png";
import Meeting4 from "../../assets/meeting4.png";
import Meeting5 from "../../assets/meeting5.png";

function Meeting() {
  return (
      <div className="bg-gradient-to-r from-slate-400 to-slate-700">
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
                          <ProfileCard
                              title="Meeting5"
                              handle="EventLocation5"
                              image={Meeting5}
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
