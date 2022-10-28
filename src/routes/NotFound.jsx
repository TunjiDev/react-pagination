import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";

function NotFound() {
	return (
		<>
			<Navbar />
			<Main content="404, Page not found!" />
			<Footer />
		</>
	);
}

export default NotFound;
