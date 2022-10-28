import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";

function Home() {
	return (
		<>
			<Navbar />
			<Main content="This is the Home Page" />
			<Footer />
		</>
	);
}

export default Home;
