import { Outlet, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

function Home() {
	return (
		<>
			<Navbar />
			<section className="home-section">
				<h2 style={{ margin: "15px 0px" }}>This is the Home Page</h2>
				<Link to="new-user" style={{ margin: "0px 0px 10px" }}>
					Some Nested Route Implementation
				</Link>
				<Outlet />
			</section>
			<Footer />
		</>
	);
}

export default Home;
