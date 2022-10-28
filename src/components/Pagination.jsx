// import { useState } from "react";

// import styles from "./Pagination.module.css";

// function Pagination(props) {
// 	const [clicked, setClicked] = useState(false);
// 	const pageNumbers = [];

// 	for (let i = 1; i <= Math.ceil(props.totalUsers / props.usersPerPage); i++) {
// 		pageNumbers.push(i);
// 	}

// 	return (
// 		<ul className={styles.pagination}>
// 			{pageNumbers.map((number) => {
// 				return (
// 					<li key={number} className={styles.pagination__listItem}>
// 						<a
// 							className={clicked ? `${styles.pagination__link} ${styles.active}` : `${styles.pagination__link}`}
// 							onClick={(e) => {
// 								e.preventDefault();
// 								setClicked(true);
// 								return props.paginate(number);
// 							}}
// 							href="!#"
// 						>
// 							{number}
// 						</a>
// 					</li>
// 				);
// 			})}
// 		</ul>
// 	);
// }
// export default Pagination;
