import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Alcoholic.css';

const Alcoholic = () => {
	const [alcoholicDrinks, setAlcoholicDrinks] = useState(null);

	const renderAlcoholicDrinks = () => {
		return alcoholicDrinks.map((alcoholicDrink) => {
			return (
				<Link to={`/cocktaildetails/${alcoholicDrink.idDrink}`}>
					<div className='alcohol-card' key={alcoholicDrink.idDrink}>
						<div className='thumbnail-div'>
							<img
								className='alcoholic-thumbnail'
								src={alcoholicDrink.strDrinkThumb}
								alt={alcoholicDrink.strDrink}
							/>
						</div>
						<div className='alcohol-title'>
							<h3>{alcoholicDrink.strDrink}</h3>
						</div>
					</div>
				</Link>
			);
		});
	};
	useEffect(() => {
		const alcoholUrl =
			'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
		fetch(alcoholUrl)
			.then((res) => res.json())
			.then((json) => {
				setAlcoholicDrinks(json.drinks);
			})
			.catch(console.error);
	}, []);
	if (!alcoholicDrinks) {
		return null;
	}
	return (
		<div>
			<h1>Alcoholic Beverages</h1>
			<h3>
				<i>({alcoholicDrinks.length} results)</i>
			</h3>
			<section className='container-alcohol'>{renderAlcoholicDrinks()}</section>
		</div>
	);
};

export default Alcoholic;
