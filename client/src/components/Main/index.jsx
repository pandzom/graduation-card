import bg from "../../assets/backgroundMain.jpg";
import logo from "../../assets/eventvenuelogo.png";
import Carousel from "../Carousel/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPerson,
  faMoneyCheckDollar,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <header>
        <img className="fixed blur-sm h-screen lg:w-full" src={bg} alt="" />
        <nav className="flex w-full justify-between absolute">
          <h1 className="font-bold text-3xl text-white m-1">EVENTVENUE</h1>
          <button
            className="bg-red-600 text-white rounded px-2 m-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </header>
      <div className="absolute lg:ml-[58vh]">
        <img className="h-[75vh]" src={logo} alt="" />
      </div>
      <div className="bg-black bg-opacity-50 w-full h-72 absolute mt-72 lg:mt-[66vh]">
        <section>
          <article>
            <h1 className="text-orange-400 text-xl ml-2 lg:text-3xl">
              A space for every moment
            </h1>
            <p className="text-white ml-4">
              Book a unique space for your activity
            </p>
          </article>
          <table className="flex justify-center space-x-20 text-black bg-slate-200 rounded mx-80 mt-10 h-20">
            <div className="mt-4">
              <h1 className="font-bold text-center">EVENT TYPE</h1>
              <div className="flex">
                <FontAwesomeIcon className="h-5 ml-5 text-orange-400 mr-2" icon={faMagnifyingGlass} />
                <input placeholder="What are you planing"
					   className="w-40 bg-slate-200 "
				></input>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-center">GUESTS</h1>
              <div className="flex">
                <FontAwesomeIcon className="h-5 ml-5 text-orange-400 mr-2" icon={faPerson} />
                <input placeholder="How many guests"
						className="w-20 bg-slate-200 "
				></input>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-center">PRICE</h1>
              <div className="flex ml-10">
                <FontAwesomeIcon className="h-5 text-orange-400 mr-2" icon={faMoneyCheckDollar} />
                <input placeholder="$$$$$$$$$"
						className="w-20 bg-slate-200 "
				></input>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-center">LOCATION</h1>
              <div className="flex ml-5">
                <FontAwesomeIcon className="h-5 text-orange-400 mr-2" icon={faMapLocationDot} />
                <input placeholder="Sarajevo"
						className="w-20 bg-slate-200 "
				></input>
              </div>
            </div>
          </table>
		  <div className="flex justify-center mt-5">
		  <button className="bg-orange-400 rounded-3xl text-xl font-bold px-10 py-5">
			Search
		  </button>
		  </div>
        </section>
		<div className="div">
			<Carousel />
		</div>
      </div>
    </div>
  );
};

export default Main;
