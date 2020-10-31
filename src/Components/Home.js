import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ match }) => {
	const [searchText, setSearchText] = useState('');
	// useEffect(() => {
	// 	const searchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${match.params.strDrink}`;
	// 	fetch(searchUrl)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			setSearchText(json);
	// 			console.log(json);
	// 		})
	// 		.catch(console.error);
	// }, []);
// ***-------steps---***
//1. get all drink data here in one array (spread operator)
//2. use filtered drinks variable to filter() over all the drinks (higher order method filter)
//3. Map over filtered drinks

	const onSearch = (queryText) => {};
	const handleInput = (event) => {
		event.preventDefault();
		const text = event.target.value;
		setSearchText(text);
	};

	const handleChange = (event) => {
		const text = event.target.value;
		setSearchText(text);
	};

	const handleEnterKeyPressed = (event) => {
		if (event.key === 'Enter') {
			onSearch(searchText);
		}
	};
	// const filteredDrinks = 
	return (
		<div>
			<img
				className='banner'
				src='https://i.imgur.com/nXoPJx3.png'
				alt='banner'
			/>
			<div className='wrap'>
				<form className='search' onChange={handleInput}>
					<input
						className='searchTerm'
						onChange={handleChange}
						onKeyPress={handleEnterKeyPressed}
						type='text'
						value={searchText}
						placeholder='Search for your fav drink!'
					/>
					<button type='submit' class='searchButton'>
						<img
							className='searchIcon'
							src='https://i.imgur.com/a4DApQP.png'
							alt='search-icon'
						/>
					</button>
				</form>
				<Link to='/random'>
					<input
						className='surprise-me-btn'
						type='button'
						value='Surprise me!'
					/>
				</Link>
			</div>
		</div>
	);
};

export default Home;
