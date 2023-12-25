import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/LoginBG.jpg";


const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
					<h1 className="text-2xl font-bold mb-4 text-center">Welcome Back</h1>
					<Link to="/login">
						<button className="bg-blue-500 hover:bg-blue-700 lg:ml-40 text-white font-bold py-3 px-7 rounded-full ml-28" type="submit">
							Login
						</button>
					</Link>
				</div>
				<div>
					<form  onSubmit={handleSubmit}>
						<h1 className="text-3xl font-bold mb-4 text-center mt-2">Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className="bg-slate-200 mt-5 lg:ml-24 ml-10 w-64 rounded h-10 text-lg border-solid border-2 border-sky-500 items-center "
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className="bg-slate-200 mt-5 lg:ml-24 ml-10 w-64 rounded h-10 text-lg border-solid border-2 border-sky-500 items-center "
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="bg-slate-200 mt-5 lg:ml-24 ml-10 w-64 rounded h-10 text-lg border-solid border-2 border-sky-500 items-center "
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="bg-slate-200 mt-5 lg:ml-24 ml-10 w-64 rounded h-10 text-lg border-solid border-2 border-sky-500 items-center "
						/>
						{error && <div className="text-red-500 mt-2 text-center" >{error}</div>}
						<button className="bg-blue-500 hover:bg-blue-700 mt-2 ml-28 text-white font-bold py-3 px-7 rounded-full lg:ml-44" type="submit" >
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;