import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Home.css';

const Home = (props) => {
	const [searchText, setSearchText] = useState('');
	const [shouldRedirect, setShouldRedirect] = useState(false);

	const onSearch = (queryText) => {
		setShouldRedirect(true);
	};
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

	const renderRedirect = () => {
		return shouldRedirect ? (
			<Redirect
				to={{
					pathname: '/searchresults',
					state: { queryText: searchText },
				}}
			/>
		) : null;
	};

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
					<button type='submit' class='searchButton' onClick={onSearch}>
						<img
							className='searchIcon'
							src='https://i.imgur.com/a4DApQP.png'
							alt='search-icon'
						/>
					</button>
				</form>
				{renderRedirect()}
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
