import styles from "./User.module.css";

function User(props) {
	return (
		<div className={styles.user}>
			<div className={styles.user__image__container}>
				<img className={styles.user__image} src={props.picture} alt="User" />
			</div>
			<div className={styles.user__details__container}>
				<p>{props.name}</p>
				<p>{props.email}</p>
				<p>{props.gender}</p>
			</div>
		</div>
	);
}

export default User;
