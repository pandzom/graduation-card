import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/LogIn";
import Wedding from "./components/Wedding";
import Meeting from "./components/Meeting";
import Party from "./components/Party";
import Sport from "./components/Sport";
import AllVenues from "./components/AllVenues";
import DescriptionCard from "./components/DescriptionCard";



function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/wedding-venues" exact element={<Wedding />} />
			<Route path="/meeting-venues" exact element={<Meeting />} />
			<Route path="/party-venues" exact element={<Party />} />
			<Route path="/sport-venues" exact element={<Sport />} />
			<Route path="/all-venues" exact element={<AllVenues />} />
			<Route path="/partyonedescription" exact element={<DescriptionCard />} />
		</Routes>
	);
}

export default App;
