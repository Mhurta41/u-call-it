import React, { useState } from 'react';
import './Home.css';

const Home = (props) => {
	const [searchText, setSearchText] = useState('');
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
	return (
		<div>
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
			</div>
		</div>
	);
};

export default Home;
