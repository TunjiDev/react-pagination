import { useParams, Link } from "react-router-dom";

import User from "../components/User";
import { usersArr } from "../components/UsersComp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

const UserProfile = () => {
	const params = useParams();
	const { userId } = params;

	return (
		<>
			<Navbar />
			<section className="home-section">
				<h1 style={{ textAlign: "center" }}>User Profile</h1>
				{usersArr
					.filter((user) => user?.name.first === userId)
					.map((user) => (
						<User
							key={user?.login.uuid}
							name={user?.name.first}
							email={user?.email}
							gender={user?.gender}
							picture={user?.picture.large}
						/>
					))}
				<Link to="/users" className="userProfileLink">
					Go Back
				</Link>
			</section>
			<Footer />
		</>
	);
};

export default UserProfile;
