import styles from "./Main.module.css";

function Main(props) {
	return (
		<main className={styles.main}>
			<h2>{props.content}</h2>
		</main>
	);
}

export default Main;
