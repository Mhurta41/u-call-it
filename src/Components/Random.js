import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import './Random.css';

const Random = () => {
	const [randomDrink, setRandomDrink] = useState(null);
	const [ingredients, setIngredients] = useState([]);
	const [measurements, setMeasurements] = useState([]);
	const defineIngredients = (drink) => {
		let temp = [];
		for (let i = 1; i <= 15; i++) {
			const currentIngredient = drink[`strIngredient${i}`];
			if (!currentIngredient) {
				break;
			}
			temp.push(currentIngredient);
		}
		setIngredients(temp);
	};

	const renderIngredients = () => {
		return (
			<ul>
				{ingredients.map((ingredient, index) => {
					return (
						<ul className='ingredient-list'>
							<li>
								<p>
									-{ingredient} : {measurements[index]}
								</p>
							</li>
						</ul>
					);
				})}
			</ul>
		);
	};

	const defineMeasurements = (measurement) => {
		let tempMeasurement = [];
		for (let i = 1; i <= 15; i++) {
			const currentMeasurement = measurement[`strMeasure${i}`];
			if (!currentMeasurement) {
				break;
			}
			tempMeasurement.push(currentMeasurement);
		}
		setMeasurements(tempMeasurement);
	};

	useEffect(() => {
		const randomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
		fetch(randomUrl)
			.then((res) => res.json())
			.then((json) => {
				setRandomDrink(json.drinks[0]);
				defineIngredients(json.drinks[0]);
				defineMeasurements(json.drinks[0]);
			})
			.catch(console.error);
	}, []);
	const copyLinkToClipboard = () => {
		copy(
			`https://u-call-it-mh.herokuapp.com/cocktaildetails/${randomDrink.idDrink}`
		);
	};
	if (!randomDrink) {
		return null;
	}
	return (
		<>
			<h1>{randomDrink.strDrink}</h1>
			<h2>({randomDrink.strCategory})</h2>
			<section className='random-component'>
				<div className='random-card'>
					<img
						className='drink-thumbnail'
						src={randomDrink.strDrinkThumb}
						alt='random-drink'
					/>
				</div>
				<div className='random-card'>
					<h2>Instructions:</h2>
					<p className='random-p'>{randomDrink.strInstructions}</p>
					<h3>Recommended glass:</h3>
					<p className='random-p'>{randomDrink.strGlass}</p>
				</div>
				<div className='random-card'>
					<button
						className='share-button'
						type='button'
						value='share'
						onClick={copyLinkToClipboard}>
						Copy link!
					</button>
					<h2>Ingredients:</h2>
					{renderIngredients()}
				</div>
			</section>
		</>
	);
};

export default Random;
