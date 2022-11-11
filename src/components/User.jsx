import { Link, useLocation } from "react-router-dom";

import styles from "./User.module.css";

function User(props) {
	const location = useLocation();

	return (
		<div className={styles.user}>
			<div className={styles.user__image__container}>
				<img className={styles.user__image} src={props.picture} alt="User" />
			</div>
			<div className={styles.user__details__container}>
				<p>{props.name}</p>
				<p>{props.email}</p>
				<p>{props.gender}</p>
				<div>{location.pathname === "/users" && <Link to={`/users/${props.name}`}>View Profile</Link>}</div>
			</div>
		</div>
	);
}

export default User;
