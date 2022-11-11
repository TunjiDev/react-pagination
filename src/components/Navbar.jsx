import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<span className={styles.navbar__link__container}>
				<NavLink
					className={(navData) => (navData.isActive ? `${styles.active} ${styles.navbar__link}` : `${styles.navbar__link}`)}
					to="/home"
				>
					Home
				</NavLink>
			</span>
			<span className={styles.navbar__link__container}>
				<NavLink
					className={(navData) => (navData.isActive ? `${styles.active} ${styles.navbar__link}` : `${styles.navbar__link}`)}
					to="/users"
				>
					Users
				</NavLink>
			</span>
		</nav>
	);
}

export default Navbar;
