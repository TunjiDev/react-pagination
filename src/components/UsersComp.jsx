import React, { useState, useEffect } from "react";

import User from "./User";
import styles from "./UsersComp.module.css";
import usePaginate from "../hooks/usePaginate";

export let usersArr = [];

function UsersComp() {
	const [users, setUsers] = useState([]);
	const [httpError, setHttpError] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);
	const [pageNumberLimit] = useState(5);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);

	const {
		renderPageNumbers,
		currentItems,
		pageIncrementBtn,
		pageDecrementBtn,
		nextPageClickHandler,
		prevPageClickHandler,
		pageNumbers,
	} = usePaginate(
		users,
		itemsPerPage,
		maxPageNumberLimit,
		minPageNumberLimit,
		currentPage,
		pageNumberLimit,
		setCurrentPage,
		setMaxPageNumberLimit,
		setMinPageNumberLimit
	);

	useEffect(() => {
		const getUsers = async () => {
			const response = await fetch("https://randomuser.me/api/?results=40");

			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			const data = await response.json();

			setUsers(data.results);

			setIsLoading(false);
			// console.log(data);
		};

		getUsers().catch((err) => {
			setIsLoading(false);

			setHttpError(err.message);
			// console.log(err);
		});
	}, []);

	if (httpError) {
		return (
			<section className={styles.main}>
				<h2 className={styles.error}>{httpError}</h2>
			</section>
		);
	}

	if (isLoading) {
		return (
			<section className={styles.main}>
				<h2>LOADING....</h2>
			</section>
		);
	}

	usersArr = users.map((user) => user);

	return (
		<main className={styles.main}>
			{currentItems.map((user) => {
				return (
					<User
						key={user.login.uuid}
						name={user.name.first}
						email={user.email}
						gender={user.gender}
						picture={user.picture.large}
					/>
				);
			})}
			<ul className={styles.pageNumbers}>
				<li>
					<button onClick={prevPageClickHandler} disabled={currentPage === pageNumbers[0] ? true : false}>
						Prev
					</button>
				</li>
				{pageDecrementBtn}
				{renderPageNumbers}
				{pageIncrementBtn}
				<li>
					<button
						onClick={nextPageClickHandler}
						disabled={currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
					>
						Next
					</button>
				</li>
			</ul>
		</main>
	);
}

export default UsersComp;
