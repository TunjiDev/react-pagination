import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Users from "./routes/Users";

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/users" element={<Users />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
