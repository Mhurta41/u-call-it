import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NonAlcoholic.css';

const NonAlcoholic = () => {
	const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState(null);

	const renderNonAlcoholicDrinks = () => {
		return nonAlcoholicDrinks.map((nonAlcoholicDrink) => {
			return (
				<Link to={`/cocktaildetails/${nonAlcoholicDrink.idDrink}`}>
					<div className='non-alcohol-card' key={nonAlcoholicDrink.idDrink}>
						<div className='non-alcohol-thumbnail-div'>
							<img
								className='non-alcoholic-thumbnail'
								src={nonAlcoholicDrink.strDrinkThumb}
								alt={nonAlcoholicDrink.strDrink}
							/>
						</div>
						<div className='non-alcohol-title'>
							<h3>{nonAlcoholicDrink.strDrink}</h3>
						</div>
					</div>
				</Link>
			);
		});
	};
	useEffect(() => {
		const nonAlcoholicUrl =
			'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non%20alcoholic';
		fetch(nonAlcoholicUrl)
			.then((res) => res.json())
			.then((json) => {
				setNonAlcoholicDrinks(json.drinks);
			})
			.catch(console.error);
	}, []);
	if (!nonAlcoholicDrinks) {
		return null;
	}
	return (
		<div>
			<h1>Non-Alcoholic</h1>
			<h3>
				<i>({nonAlcoholicDrinks.length} results)</i>
			</h3>
			<section className='container-non-alcohol'>
				{renderNonAlcoholicDrinks()}
			</section>
		</div>
	);
};

export default NonAlcoholic;
