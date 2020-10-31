import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OptionalAlcohol.css';

const OptionalAlcohol = () => {
	const [optionalAlDrinks, setOptionalAlDrinks] = useState(null);
	const renderOptionalAlDrinks = () => {
		return optionalAlDrinks.map((optionalAlDrink) => {
			return (
				<Link to={`/cocktaildetails/${optionalAlDrink.idDrink}`}>
					<div className='optional-alcohol-card' key={optionalAlDrink.idDrink}>
						<div className='optional-alcohol-thumbnail-div'>
							<img
								className='optional-alcoholic-thumbnail'
								src={optionalAlDrink.strDrinkThumb}
								alt={optionalAlDrink.strDrink}
							/>
						</div>
						<div className='optional-alcohol-title'>
							<h3>{optionalAlDrink.strDrink}</h3>
						</div>
					</div>
				</Link>
			);
		});
	};
	useEffect(() => {
		const optionalAlUrl =
			'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Optional%20alcohol';
		fetch(optionalAlUrl)
			.then((res) => res.json())
			.then((json) => {
				setOptionalAlDrinks(json.drinks);
				console.log(json.drinks);
			})
			.catch(console.error);
	}, []);
	if (!optionalAlDrinks) {
		return null;
	}
	return (
		<div>
			<h1>Optional Alcohol</h1>
			<h3>
				<i>(9 results)</i>
			</h3>
			<section className='container-optional-alcohol'>
				{renderOptionalAlDrinks()}
			</section>
		</div>
	);
};

export default OptionalAlcohol;
