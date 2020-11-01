import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';
const SearchResults = (props) => {
	const [searchName, setSearchName] = useState(props.location.state.queryText);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const searchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`;
		fetch(searchUrl)
			.then((res) => res.json())
			.then((json) => {
				setSearchResults(json.drinks);
			})
			.catch(console.error);
	}, []);

	const renderResults = () => {
		return searchResults.map((drink) => {
			return (
				<Link to={`/cocktaildetails/${drink.idDrink}`}>
					<div className='search-card' key={drink.idDrink}>
						<div className='thumbnail-div'>
							<img
								className='search-thumbnail'
								src={drink.strDrinkThumb}
								alt={drink.strDrink}
							/>
						</div>
						<div className='search-title'>
							<h3>{drink.strDrink}</h3>
						</div>
					</div>
				</Link>
			);
		});
	};
	return (
		<div>
			<h1>Search Results:</h1>
			<h3>
				<i>{searchResults.length} results</i>
			</h3>
			<section className='container-alcohol'>{renderResults()}</section>
		</div>
	);
};

export default SearchResults;
