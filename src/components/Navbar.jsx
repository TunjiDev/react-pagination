import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<span className={styles.navbar__link__container}>
				<Link className={styles.navbar__link} to="/">
					Home
				</Link>
			</span>
			<span className={styles.navbar__link__container}>
				<Link className={styles.navbar__link} to="/users">
					Users
				</Link>
			</span>
		</nav>
	);
}

export default Navbar;
