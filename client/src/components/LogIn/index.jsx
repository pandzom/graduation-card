import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bg from "../../assets/LoginBG.jpg";
import logo from "../../assets/eventvenuelogo.png";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img src={bg} alt="" className="fixed blur-sm h-screen w-full" />
      <div className="absolute w-full lg:w-[500px] bg-slate-200 rounded-3xl p-4 shadow-lg">
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <form className="" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-4 text-center">Login to Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="bg-slate-200 mt-10 lg:ml-20 ml-10 w-64 rounded h-10 text-lg border-solid border-2 border-sky-500 items-center "
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="bg-slate-200 ml-10 lg:ml-20 w-64 rounded h-10 mt-4 text-lg border-solid border-2 border-sky-500"
            />
            {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
            <div className="mt-6 ml-28">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-7 rounded-full lg:ml-12"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4">
            <h1>New Here?</h1>
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
