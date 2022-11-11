import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Users from "./routes/Users";
import UserProfile from "./routes/UserProfile";

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />
					<Route path="/home" element={<Home />}>
						<Route path="new-user" element={<p>Welcome, New User!</p>}></Route>
					</Route>
					<Route path="/users" element={<Users />} />
					<Route path="/users/:userId" element={<UserProfile />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
